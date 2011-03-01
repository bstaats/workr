/*globals SC Workr */

Workr.TopMenu = SC.View.extend(
  Workr.TopMenuDelegate,
  Ki.StatechartManager,{


  tagName: 'div',
  layerId: 'menu',
  childViews: ['workrTitle'],
  classNamesReset: YES,
  classNames: ['menu'],
  delegate: null,

  topMenuDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isTopMenuDelegate', del);
    }.property('delegate').cacheable(),

/*
  STATES
*/
  initialState: 'base',

  base: Ki.State.design({
    /* Cannot use enterState since this is the initialState (this obj has not been created yet)  */

    mouseDown: function(evt){
      var id = evt.target.id || evt.target.parentNode.id,
          del = this.get('owner').get('topMenuDelegate');

      if(id=='menu_studio_btn'){
        del.appMenuClicked();
        this.get('owner').get('workrTitle').adjust('left',274);

      }else if(id=='menu_library_btn'){
        del.libMenuClicked();
      }else if(id=='menu_properties_btn'){
        del.propMenuClicked();
      }else{
        del.nothingClicked();
      }
    },

    appMenuClosed: function(){
      this.get('owner').get('workrTitle').adjust('left',60);
    }

  }),


  render: function(context, firstTime){
    if (firstTime) {
      context.push(
        '<ul class="left">',
          '<li id="menu_studio_btn" class="studio_btn">     <span></span><label>Studio</label></li>',
        '</ul>',
        '<ul class="right">',
          '<li id="menu_library_btn" class="lib_btn">    <span></span><label>Library</label></li>',
/*  no properties menu for awhile        '<li id="menu_properties_btn"> <span></span><label>Properties</label></li>',*/
        '</ul>'
      );
      this.set('owner', this); // why should I have to do this? the owner is this objects parent by default
      sc_super();
    }else{
      this.invokeStateMethod('render', context, firstTime);
    }
  },


/*
  CHILDREN VIEWS
*/
  workrTitle: SC.LabelView.extend(SC.Animatable, {
    layout: { top: 7, left: 60, width:600, height: 22},
    classNamesReset: YES,
    classNames: ['title'],
    isEditable: YES,
    fontWeight: SC.BOLD_WEIGHT,
    contentBinding: 'Workr.masterWorkrController',
    contentValueKey: 'title',
    transitions: {
      left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
    }
  })


});
