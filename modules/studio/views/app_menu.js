Workr.AppMenu = SC.View.extend(
  Workr.AppMenuDelegate,
  Ki.StatechartManager,{


  tagName: 'div',
  classNames: ['appmenu'],
  wantsAcceleratedLayer: YES,
  displayProperties:  ['viewClasses'],
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
      this.get('owner').$().toggleClass('open');
      // Have to set an empty call back here or the callback on the exitstate animate will fire.  WHY?
      this.get('owner').animate('left', 0, Workr.TRANSITION, function(){});
    },

    exitState: function(){
      this.get('owner').animate('left', -Workr.APPMENU_WIDTH, Workr.TRANSITION, function(){
        this.view.$().toggleClass('open');
      });

    },

    close: function(){
      this.gotoState('closed')
    },

    mouseDown: function(evt){
      var id = evt.target.id || evt.target.parentNode.id,
          del = this.get('owner').get('appMenuDelegate');

      if(id=='studio_btn'){
        del.nothingClicked();
      }
    },


  }),


  render: function (context, firstTime) {
    if(firstTime){
      // how do I get this to recognize sub templateviews within this template?
      context.push(
        SC.TEMPLATES['app_menu']({sc_view:this})
      );

      this.set('owner', this); // why should I have to do this? the owner is this objects parent by default
      sc_super();             // call here so childViews are added last
    }else{
      this.set('classNames', this.get('viewClasses').w())
      this.invokeStateMethod('render', context, firstTime);
    }


  },

/*
  createChildViews: function(){
    var content = this.get('content');

    this.set('childViews', [

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


    ]);
  }
*/


});
