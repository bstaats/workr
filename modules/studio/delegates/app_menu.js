sc_require('core');

Workr.AppMenuDelegate = {
  isAppMenuDelegate: YES,

  search: function(filter){
    Workr.SearchResultsController.find(filter);
  }


}