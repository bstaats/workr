Workr.AppMenu = SC.View.extend(
  SC.Animatable,
  Workr.AppMenuDelegate,
  Ki.StatechartManager,{


  tagName: 'div',
  layerId: 'appmenu',
  classNamesReset: YES,
  classNames: ['menu'],
  transitions: {
    left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },
  delegate: null,

  appMenuDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isAppMenuDelegate', del);
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
      this.get('owner').adjust('left',0);
    },

    exitState: function(){
      this.get('owner').adjust('left',-249);
    },

    close: function(){
      this.gotoState('closed')
    },

  }),


  render: function (context, firstTime) {
    if(firstTime){
      context.push(
        '<ul class="tabs">',
          '<li id="appmenu_studio_btn" class="selected_menu"><span></span><label>Studio</label></li>',
        '</ul>',
        '<div class="search_field">  <input type="text" value="Search" ></div>'
      );

      this.set('owner', this); // why should I have to do this? the owner is this objects parent by default
      sc_super();             // call here so childViews are added last
    }else{
      this.invokeStateMethod('render', context, firstTime);
    }

  },

  createChildViews: function(){
    var content = this.get('content');

    this.set('childViews', [
/*
      this.createChildView(
        SCUI.ComboBoxView.design({
          layerId: 'appmenu_search',
          classNamesReset: YES,
          classNames:'',
          layout: { top: 35, left: 10, width: 195, height: 24 },
          objectsBinding: SC.Binding.from('Workr.SearchResultsController').oneWay(),

          keyUp: function(){
            if(this.get('filter') && this.get('filter').length>3){
              var del = this.get('owner').get('appMenuDelegate');
              del.search(this.get('filter'));
            }
            sc_super();
          },

          textFieldView: SC.TextFieldView.design({
            classNamesReset: YES,
            classNames:'',
            layout: { top: 0, left: 0, height: 24, right: 0 },
            leftAccessoryView: SC.View.design(),
            rightAccessoryView: SC.View.design()

          }),


        })
      ),
*/

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
                '<li id="appmenu_login">   <span></span><label>Login</label></li>',
                '<li></li>',
                '<li id="appmenu_new">     <span></span><label>New Workr</label></li>',
                '<li id="appmenu_load">    <span></span><label>Load Workr</label></li>',
                '<li></li>',
                '<li id="appmenu_clear">   <span></span><label>Clear Canvas</label></li>'
              );
            }else{
              this.update(context);
            }
          }

        })
      )
    ]);
  }


});
