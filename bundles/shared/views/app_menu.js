Workr.AppMenu = SC.View.extend(SC.Animatable, Workr.AppMenuDelegate,{
  tagName: 'div',
  layerId: 'appmenu',

  displayProperties: 'isSearching isOpen'.w(),
  transitions: {
    left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },
  delegate: null,

  appMenuDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isAppMenuDelegate', del);
    }.property('delegate').cacheable(),


  /*
    INTERACTION
  */
/*
  mouseDown: function(evt){
    var id = evt.target.id || evt.target.parentNode.id;

    if(id=='appmenu_search'){
      Workr.statechart.sendEvent('openAppMenuSearching');
    }else{
      // maybe do something
    }
  },
*/


  /*
    RENDERING
  */
  update: function(context) {
    if(this.didChangeFor('update', 'isOpen')){
      if(this.get('isOpen')){
        this.adjust('left',0);
      }else{
        this.adjust('left',-249);
      }
    }

/*
    if(this.didChangeFor('update', 'isSearching')){
        if(this.get('isSearching')){
          context.addClass('searching');

          var input = this.$('#appmenu_search input');
          if(input.attr('value')=='Search'){
            input.attr('value', '');
          }
          input[0].focus();
        }
      }
*/
  },

  render: function (context, firstTime) {
    if(firstTime){
      context.push(
        '<ul class="left">',
          '<li id="appmenu_studio_btn">     <label>Studio</label><span></span></li>',
        '</ul>',
        '<div id="appmenu_search">  <input type="text" value="Search"></div>'
/*        '<div id="appmenu_search_results">',
          '<ul>',

            '<li id="search_result1" class="workra"><span></span><label>Workr A</label><div><span></span></div></li>',
            '<li id="search_result2" class="workrb"><span></span><label>Workr B</label><div><span></span></div></li>',
            '<li id="search_result3" class="workrc"><span></span><label>Workr C</label><div><span></span></div></li>',

          '</ul>',
        '</div>',
*/
      );

    }else{
      this.update(context);
    }
    sc_super(); // call here so childViews are added last
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
