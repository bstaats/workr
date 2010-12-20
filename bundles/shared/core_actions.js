Workr.mixin({

  /**
   * Authenticate user trying to log in to Workr application.
   *
   * @param {String} user's email.
   * @param {String} user's password.
   */
  authenticate: function(email, password) {
    // console.log('DEBUG: authenticate()');
    Workr.set('email', email);
    if(CoreWorkr.remoteDataSource) { // remote authentication
      var params = {
        successCallback: this.authenticationSuccess,
        failureCallback: this.authenticationFailure
      };

      return Workr.User.authenticate(email, password, params);
    }else{ // running off fixtures
      for(var i = 0, len = Workr.User.FIXTURES.length; i < len; i++) {
        if(email === Workr.User.FIXTURES[i].email) {
          return this.authenticationSuccess();
        }
      }
      return this.authenticationFailure();
    }
  },


  /**
   * Called after successful authentication.
   */
  authenticationSuccess: function(response, request) {
    // console.log('DEBUG: authenticationSuccess()');

    // Check status
/*
    SC.Logger.info('HTTP status code: ' + response.status);
    if (!SC.ok(response)) {
      // Error
      throw SC.Error.desc('Invalid username or password. Try admin/admin ;-)');
    }
*/
    Workr.loginController.set('isLoggingIn', YES);
    Workr.statechart.sendAction('loginSuccess',SC.Object.create(),SC.Object.create());
  },

  /**
   * Called after failed authentication.
   *
   * @param {SC.Response} response object from failed call
   */
  authenticationFailure: function(response) {
    // console.log('DEBUG: authenticationFailure()');
    Workr.loginController.set('isLoggingIn', NO);
    Workr.statechart.sendAction('loginFailure',SC.Object.create(),SC.Object.create());
  },


});