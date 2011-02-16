Workr.SearchResultsController = SC.ArrayController.create({
  content:    null,
  selection:  null,

  find: function(filter){
    console.log(filter);

    var matches = Workr.store.find(
      SC.Query.local(Workr.Workr, {
        conditions: 'title CONTAINS {title}',
        title:      filter
      })
    );

    this.set('content', matches);
    console.log(this.get('content'))
  }

});

