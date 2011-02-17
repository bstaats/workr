Workr.LibMenu = SC.View.extend(
  SC.Animatable,
  Workr.LibMenuDelegate,
  Ki.StatechartManager,{


  tagName: 'div',
  layerId: 'libmenu',
  classNamesReset: YES,
  classNames: ['menu'],
  transitions: {
    right:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },
  delegate: null,

  libMenuDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isLibMenuDelegate', del);
    }.property('delegate').cacheable(),


/*
  STATES
*/
  initialState: 'closed',

  closed: Ki.State.design({
    /* Cannot use enterState since this is the initialState (this obj has not been created yet)  */

    open: function(){
      this.gotoState('opened')
    },

  }),

  opened: Ki.State.design({

    enterState: function(){
      this.get('owner').adjust('right',0);
    },

    exitState: function(){
      this.get('owner').adjust('right',-249);
    },

    close: function(){
      this.gotoState('closed')
    },

  }),


  render: function (context, firstTime) {
    if(firstTime){
      context.push(
        '<ul class="tabs">',
          '<li id="libmenu_btn" class="selected_menu"><span></span><label>Library</label></li>',
/*  no properties menu for awhile        '<li id="propmenu_btn"> <span></span><label>Properties</label></li>',*/
        '</ul>',
        '<div class="search_field">  <input type="text" value="Search" ></div>'
      );

      this.set('owner', this); // why should I have to do this? the owner is this objects parent by default
      sc_super();             // call here so childViews are added last
    }else{
      this.invokeStateMethod('render', context, firstTime);
    }

  },
/*

  createChildViews: function(){
    var content = this.get('content');



      this.createChildView(
        SC.View.extend({
          tagName: 'ul',
          classNamesReset: YES,
          classNames:'menuitems',
          layout: { top: 80, left: 0, right:0, bottom:0 },
          update: function(context) {
          },
          render: function (context, firstTime) {
            if(firstTime){
              context.push(
                '<li id="libmenu_login">   <span></span><label>Login</label></li>',
                '<li></li>',
                '<li id="libmenu_new">     <span></span><label>New Workr</label></li>',
                '<li id="libmenu_load">    <span></span><label>Load Workr</label></li>',
                '<li></li>',
                '<li id="libmenu_clear">   <span></span><label>Clear Canvas</label></li>'
              );
            }else{
              this.update(context);
            }
          }

        })
      )
    ]);
  }
*/


});
