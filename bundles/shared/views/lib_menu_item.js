sc_require('core');


Workr.LibMenuItem = SC.ListItemView.extend(
  Workr.LibMenuItemDelegate,
  Ki.StatechartManager,{


  layout: { top: 0, left: 0, height: 100, right:0 },
  classNames: ['libmenu-item'],
  classNamesReset: YES,
  content: null,
  delegate: null,

  libMenuItemDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('islibMenuItemDelegate', del);
    }.property('delegate').cacheable(),


/*
  STATES
*/
  initialState: 'base',

  base: Ki.State.design(),


  render: function(context, firstTime){
    if(firstTime){
      this.set('owner', this); // why should I have to do this? the owner is this objects parent by default
      sc_super();
    }else{
      this.invokeStateMethod('render', context, firstTime);
    }
  }


});
