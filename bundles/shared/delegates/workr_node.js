sc_require('core');

Workr.WorkrNodeDelegate = {
  isWorkrNodeDelegate: YES,

  /*
    These methods probably belong in a controller, but my attempts to use the delegate mixin for the controller have failed.
  */
  workrNodeOpenPanel: function(node){
    var panel = Workr.WorkrPanel.create({
      layout:{top:node.get('layout').top, left:node.get('layout').left, width: 250, height: 250},
      content: node.get('content')
    });
    panel.append();

    panel.get('workrPanelDelegate').selectWorkrPanel();
  },

}