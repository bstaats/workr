Workr.Statechart = SC.Statechart.create({
  trace: NO,
  
  rootState: SC.State.design({

    enterState: function() {
      Workr.set('store', SC.Store.create().from(SC.Record.fixtures));

      SC.Module.loadModule('studio', function(){
        console.log(this);
      })

/*      Login not complete. Dont load
      SC.loadBundle('login', function() {
        self.gotoState('loggedOut');
      });
*/
/*

      var store = Workr.get('store'),
          query = SC.Query.local(Workr.Workr,{conditions: 'master = true'})
          master = store.find(query);

      Workr.workrsController.set('masterWorkr', master);
      Workr.workrsController.set('content', master);
      
      Workr.libMenuController.set('content', Workr.libMenuController.get('levelone'));

      this.gotoState('base');*/

    }

  }),

})