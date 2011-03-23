/*
  Global Statechart
*/
Workr.Statechart = Ki.Statechart.create({
  trace: NO,

  rootState: Ki.State.design({
    initialSubstate: 'setup',

    enterState: function() {
      SC.LOG_MODULE_LOADING = NO;

      SC.Module.loadModule('studio', function(){
        Workr.Statechart.gotoState('modulesLoaded');
      })
    },

    setup : Ki.State.design({
      enterState: function(){
        Workr.set('store', SC.Store.create().from(SC.Record.fixtures));
      }
    }),

    modulesLoaded: Ki.State.design({
      enterState: function(){
        Workr.StudioStatechart.initStatechart();
      }
    })

  })
})