Workr.statechart = Ki.Statechart.create({

  rootState: Ki.State.design({

    initialSubstate: 'loggedIn', // 'loadingLoginBundle',
    
    loadingLoginBundle: Ki.State.design({
      
      enterState: function() {
        var self = this ;
        SC.loadBundle('login', function() {
          self.gotoState('loggedOut');
        });
      }
      
    }),

    loggedOut: Ki.State.design({

      enterState: function() {
        Workr.getPath('loginPage.loginPane').append();
      },

      exitState: function() {
        Workr.getPath('loginPage.loginPane').remove();
      },

      logIn: function() {
        Workr.loginController.action('logIn')
      },

      loginSuccess: function(){
        this.gotoState('loggedIn');
      },

      loginFailure: function(a,b,c){
        errorMessage = 'Could not login.. Need to pass a param here to find out why. yell at Brian';
        Workr.loginController.set('loginErrorMessage', errorMessage);
        console.log('We need a login failure state',a,b,c);
      }

    }),

    loggedIn: Ki.State.design({
      initialSubstate:        'main',

      main: Ki.State.design({
        initialSubstate: "ready",
        ready: Ki.State.design({
          enterState: function() {
            Workr.getPath('mainPage.mainPane').append();
          },

          exitState: function() {
            Workr.getPath('mainPage.mainPane').remove();
          },

          logOut: function() {
            this.gotoState('loggedOut');
          }

        })
      })


    })

  })  // rootState

})