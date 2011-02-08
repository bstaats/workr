Workr.statechart = Ki.Statechart.create({

  rootState: Ki.State.design({

    initialSubstate: 'loadingBundles',

    loadingBundles: Ki.State.design({

      enterState: function() {
        var self = this ;
/*      Login not complete. Dont load
        SC.loadBundle('login', function() {
          self.gotoState('loggedOut');
        });
*/

/*
        var store = FamilyTree.get('store');
        var fc = FamilyTree.familiesController.set('content', store.find(FamilyTree.Family));
        FamilyTree.familiesController.set('selection', fc.get('content').objectAt(1));
*/

        var store = Workr.get('store'),
            query = SC.Query.local(Workr.Workr,{conditions: 'master = true'})
            master = store.find(query);

        Workr.workrsController.set('masterWorkr', master);
        Workr.workrsController.set('content', master);
/*
        var wc = Workr.workrsController.set('content', store.find(Workr.Workr));
        wc.set('masterWorkr', wc.get('content').objectAt(0));
*/

        self.gotoState('studio');

      }

    }),

    studio: Ki.State.design({
      initialSubstate:        'root',

      root: Ki.State.design(),

      enterState: function() {
        Workr.mainPage.get('mainPane').append();
      },

      openAppMenu: function(){
        this.gotoState('appMenu');
      },

      openLibMenu: function(){
        this.gotoState('libMenu');
      },

      openPropMenu: function(){
        this.gotoState('propMenu');
      },

      closeMenus: function(){
        this.gotoState('root');
      },

      workrPanelOpened: function(){
        this.gotoState('workrPanelOpen');
      },


      workrPanelOpen: Ki.State.design({
        initialSubstate: 'main',

        enterState: function(){
          console.log('panel open');
        },

        exitState: function(){
          console.log('panel closed')
        },

        workrPanelClosed: function(){
          this.gotoState('studio');
        },

        main: Ki.State.design({
          enterState: function(){
            console.log('main view');
          },

          exitState: function(){
          }
        }),

        info: Ki.State.design({
          enterState: function(){
          },

          exitState: function(){
          }
        }),

        edit: Ki.State.design({
          enterState: function(){
          },

          exitState: function(){
          }
        }),

      }),

      libMenu: Ki.State.design({
        enterState: function(){
          console.log(this.name);
        }
      }),

      propMenu: Ki.State.design({
        enterState: function(){
          console.log(this.name);
        }
      }),

      appMenu: Ki.State.design({
        initialSubstate: 'appMenuOpen',

        appMenuOpen: Ki.State.design(),

        enterState: function() {
          Workr.mainPage.get('appMenu').set('isOpen', YES);
          Workr.mainPage.get('canvas').set('isMoved', YES);
          Workr.mainPage.get('topMenu').set('isMoved', YES);
        },

        exitState: function() {
          Workr.mainPage.get('appMenu').set('isOpen', NO);
          Workr.mainPage.get('canvas').set('isMoved', NO);
          Workr.mainPage.get('topMenu').set('isMoved', NO);
        },


        openAppMenuSearching: function(){
          this.gotoState('searching');
        },

        searching: Ki.State.design({
          enterState: function(){
            Workr.mainPage.get('appMenu').set('isSearching', YES);
          },

          exitState: function(){
            Workr.mainPage.get('appMenu').set('isSearching', NO);
          }

        })

      })
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