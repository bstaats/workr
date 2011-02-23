Workr.statechart = Ki.Statechart.create({

  initialState: 'loadingBundles',

  loadingBundles: Ki.State.design({

    enterState: function() {
/*      Login not complete. Dont load
      SC.loadBundle('login', function() {
        self.gotoState('loggedOut');
      });
*/

      var store = Workr.get('store'),
          query = SC.Query.local(Workr.Workr,{conditions: 'master = true'})
          master = store.find(query);

      Workr.workrsController.set('masterWorkr', master);
      Workr.workrsController.set('content', master);
      
      Workr.libMenuController.set('content', Workr.libMenuController.get('levelone'));

      this.gotoState('base');
    }

  }),


  base: Ki.State.design({

    enterState: function() {
      Workr.mainPage.get('mainPane').append();
    },

    openAppMenu: function(){
      this.gotoState('appMenuOpened');
    },

    openLibMenu: function(){
      this.gotoState('libMenuOpened');
    },

    openPropMenu: function(){
      this.gotoState('propMenuOpened');
    },
  }),


  appMenuOpened: Ki.State.design({
    enterState: function() {
      Workr.mainPage.get('appMenu').sendAction('open');
      Workr.mainPage.get('canvas').sendAction('move');
    },

    exitState: function() {
      Workr.mainPage.get('appMenu').sendAction('close');
      Workr.mainPage.get('canvas').sendAction('move');
      Workr.mainPage.get('topMenu').sendAction('appMenuClosed');
    },

    canvasClicked: function(){
      this.gotoState('base');
    }

  }),


  libMenuOpened: Ki.State.design({
    enterState: function(){
      Workr.mainPage.get('libMenu').sendAction('open');
    },

    exitState: function(){
      Workr.mainPage.get('libMenu').sendAction('close');
    },

    canvasClicked: function(){
      this.gotoState('base');
    }

  }),


  propMenuOpened: Ki.State.design({
    enterState: function() {
    },

    exitState: function() {
    },

    closePropMenu: function(){
      this.gotoState('base');
    }

  }),


})