sc_require('core');

Workr.libMenuController = SC.ArrayController.create({
  content: null,
  selection: null,

  levelone: function(){
    var query = this._query;
    if(!query) query = this._query = SC.Query.local(Workr.WorkrType, 'level = {level}', { level: 1 });
    return Workr.get('store').find(query);
  }.property().cacheable()

});

