FamilyTree.CanvasView = LinkIt.CanvasView.design({
  layout: {left: 0, top: 30, right: 0, bottom:0},
  layerId: 'studio',
  classNamesReset: YES,

  contentBinding: SC.Binding.from('FamilyTree.membersController').oneWay(),
  selectionBinding: 'FamilyTree.membersController.selection',
  nodeViewDelegate: FamilyTree.familyController,
  exampleView: FamilyTree.NodeView,
  delegate: FamilyTree.familyController

})