Workr.workrController = SC.ObjectController.create( SC.CollectionViewDelegate, {
  /**
    Don't allow typical array actions on the content of this controller since
    our model setup doesn't let us do that either.  We have to add and remove
    campaign elements in particular ways.
  */
  isEditable: NO,

  contentBinding: 'Workr.workrsController.selection',
  contentBindingDefault: SC.Binding.oneWay().single(),

  // LinkIt Canvas is a Collection Views so to correct the deletion you have to include this
  /**
    Delegate for SC.CollectionView's deletion.  We implement this here
    because we have to handle deletion very carefully, but we still want to be able to
    trigger it by pressing the delete key on the canvas.
  */
  collectionViewDeleteContent: function(view, content, indexes) {
    Workr.deleteSelectedMembers();
    return YES;
  },

});