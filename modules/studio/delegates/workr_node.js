sc_require('core');

Workr.WorkrNodeDelegate = {
  isWorkrNodeDelegate: YES,

  /*
    These methods probably belong in a controller, but my attempts to use the delegate mixin for the controller have failed.
  */
  workrNodeOpenPanel: function(node){
    if(Workr.workrPanelController.get('contentIDs').indexOf(node.get('content').get('id'))==-1){
      var panel = Workr.WorkrPanel.create({
        layout:{top:node.get('layout').top, left:node.get('layout').left, width: 250, height: 250},
        content: node.get('content')
      });
      panel.append();
      Workr.workrPanelController.addObject(panel);
      panel.get('workrPanelDelegate').selectWorkrPanel();
    }
  },

}