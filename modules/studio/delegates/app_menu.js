Workr.AppMenuDelegate = {
  isAppMenuDelegate: YES,

  search: function(filter){
    Workr.SearchResultsController.find(filter);
  },

  nothingClicked: function(){
    Workr.StudioStatechart.sendAction('canvasClicked');
  }
}