sc_require('lib/sha1');

Workr.loginController = SC.ObjectController.create(Workr.Sha1,{
  email:        '',
  password:     '',
  isLoggingIn:  NO,
  loggedIn:     NO,
  loginErrorMessage: '',
  loginReady:   NO,

  login: function(){

    var email    = this.get('email'),
        password = this.get('password');

    if (email == null || email == '') {
      throw SC.Error.desc('A valid email address is required');
    }

    if (password == null || password == '') {
      throw SC.Error.desc('Password is required');
    }

    Workr.authenticate(email, this.hashPassword(password));

    // Start login
    this.set('isLoggingIn', YES);

  },


  _unhashedPassword: '',
  unhashedPassword: function(key, value) {
    if (value !== undefined) {
      this._unhashedPassword = value;
      this.set('password', Workr.loginController.hashPassword(value));
    } else {
      return this._unhashedPassword;
    }
  }.property('_unhashedPassword').cacheable(),

  hashPassword: function(password) {
    return password? this.sha1Hash(password) : '';
  }


});

