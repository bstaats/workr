sc_require('core');

Workr.WorkrPanelDelegate = {
  isWorkrPanelDelegate: YES,

  selectWorkrPanel: function(){
    var sel =  Workr.workrPanelController.get('selection');
    if(sel && sel!=this){
      sel.set('isSelected', NO);
    }

    this.set('isSelected', YES);
    Workr.workrPanelController.set('selection', this);
  },

  workrPanelClose: function(){
    this.remove();
    Workr.statechart.sendAction('workrPanelClosed');
  },

}