sc_require('core');

Workr.workrPanelController = SC.ArrayController.create( {
  content:                  [],
  allowsMultipleSelection:  NO,

  contentIDs: function(){
    return this.get('content').map(function(d){
      return d.get('content').get('id')
     })
  }.property('content')
});