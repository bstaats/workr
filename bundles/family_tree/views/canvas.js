sc_require('core');

FamilyTree.CanvasView = LinkIt.CanvasView.extend(SC.Animatable, {
  layerId: 'studio',
  displayProperties: 'isMoved'.w(),
  transitions: {
    left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },

  contentBinding: SC.Binding.from('FamilyTree.membersController').oneWay(),
  selectionBinding: 'FamilyTree.membersController.selection',
  nodeViewDelegate: 'FamilyTree.familyController',
  exampleView: FamilyTree.NodeView,
  delegate: 'FamilyTree.familyController',


  mouseDown: function(evt) {
    var id = evt.target.id || evt.target.parentNode.id;

    sc_super();

    if(id=='studio'){
      Workr.statechart.sendEvent('closeMenus');
    }

  },

  update: function(context) {
    if(this.didChangeFor('update', 'isMoved')){

      if(this.get('isMoved')){
        this.adjust('left',249).updateStyle();
      }else{
        this.adjust('left',0).updateStyle();
      }
    }
  },

  render: function (context, firstTime) {
    sc_super();
    if(!firstTime){
      this.update(context);
    }
  }
})