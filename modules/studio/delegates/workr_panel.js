sc_require('core');

Workr.WorkrPanelDelegate = {
  isWorkrPanelDelegate: YES,

  selectWorkrPanel: function(){
    var sel =  Workr.workrPanelController.firstSelectableObject();
    if(sel && sel!=this){
      sel.set('isSelected', NO);
      Workr.workrPanelController.deselectObject(this);
    }
    this.set('isSelected', YES);
    Workr.workrPanelController.selectObject(this);
  },

  workrPanelClose: function(){
    this.remove();
    Workr.workrPanelController.removeObject(this);
  },

}