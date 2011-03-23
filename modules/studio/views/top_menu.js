Workr.TopMenu = SC.View.extend(
  Workr.TopMenuDelegate,
  Ki.StatechartManager,{


  tagName: 'div',
  childViews: ['workrTitle'],
  classNamesReset: YES,
  classNames: ['topmenu'],
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

      if(id=='studio_btn'){
        del.appMenuClicked();
        this.get('owner').get('workrTitle').animate('left', Workr.APPMENU_WIDTH+Workr.LEFT_MARGIN, Workr.TRANSITION);

      }else if(id=='lib_btn'){
        del.libMenuClicked();
      }else if(id=='prop_btn'){
        del.propMenuClicked();
      }else{
        del.nothingClicked();
      }
    },

    appMenuClosed: function(){
      this.get('owner').get('workrTitle').animate('left', Workr.LEFT_MARGIN*2, Workr.TRANSITION);
    }

  }),


  render: function(context, firstTime){
    if (firstTime) {
      context.push(
        SC.TEMPLATES['top_menu']({sc_view:this})
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
  workrTitle: SC.LabelView.extend({
    layout: { top: 7, left: Workr.LEFT_MARGIN*2, width:600, height: 22},
    classNamesReset: YES,
    classNames: ['title'],
    isEditable: YES,
    contentBinding: 'Workr.masterWorkrController',
    contentValueKey: 'title'
/*
    transitions: {
      left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
    }
*/
  })



});
