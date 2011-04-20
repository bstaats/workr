/*
  TODO: move these states into global statechart once support for adding states after statechart init
*/
Workr.StudioStatechart = Ki.Statechart.create({
  trace: NO,

  rootState: Ki.State.design({
    initialSubstate: 'setup',

    setup: Ki.State.design({
      enterState: function(){
        var store = Workr.get('store'),
            query = SC.Query.local(Workr.Workr,{conditions: 'master = true'})
            master = store.find(query);

        Workr.workrsController.set('masterWorkr', master);
        Workr.workrsController.set('content', master);
        Workr.libMenuController.set('content', Workr.libMenuController.get('levelone'));

        Workr.studioMainPage.get('mainPane').append();

        this.gotoState('ready');
      }
    }),

    ready: Ki.State.design({
      openAppMenu: function(){
        this.gotoState('appMenuOpened');
      },

      openLibMenu: function(){
        this.gotoState('libMenuOpened');
      },

      openPropMenu: function(){
        this.gotoState('propMenuOpened');
      }
    }),

    appMenuOpened: Ki.State.design({
      enterState: function() {
        return this.performAsync(function(){
          Workr.studioMainPage.get('appMenu').sendAction('open');
          Workr.studioMainPage.get('canvas').sendAction('move');
          this.resumeGotoState();
        });
      },

      exitState: function() {
        return this.performAsync(function(){
          Workr.studioMainPage.get('canvas').sendAction('move');
          Workr.studioMainPage.get('topMenu').sendAction('appMenuClosed');
          Workr.studioMainPage.get('appMenu').sendAction('close');
          this.resumeGotoState();
        });
      },

      canvasClicked: function(){
        this.gotoState('ready');
      }

    }),


  })
})