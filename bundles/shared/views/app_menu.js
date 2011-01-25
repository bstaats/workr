Workr.AppMenu = SC.View.extend(SC.Animatable, {
  layout: { top: 0, left: -249, bottom: 0 , width: 249 },
  tagName: 'div',
  layerId: 'appmenu',
  classNamesReset: YES,
  displayProperties: 'isSearching isOpen'.w(),
  //childViews: 'searchInput searchResults'.w(),
  transitions: {
    left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },

  searchInput: SCUI.ComboBoxView.design({
/*  Replacing the divs in this view with real components
    layout: { top: 200, left: 20, width: 70, height: 18 },
    objectsBinding: 'Workr.AppMenuController.searchResults',
    nameKey: "name",
    valueKey : "id"
*/
  }),


  searchResults: SC.ListView.design({
/*  Replacing the divs in this view with real components
    layerId: 'appmenu_search_results',
    layout: { left: 0, top: 156, width: 195},
    rowHeight: 43,
    rowSpacing: 2,
    exampleView: Workr.SearchResultView,
    selectionBinding: 'Workr.AppMenuController.selection',
    contentBinding: 'Workr.AppMenuController',
    contentValueKey: 'name',
    actOnSelect: YES,
    action: 'changedSelection'
*/
  }),


  mouseDown: function(evt){
    var id = evt.target.id || evt.target.parentNode.id;

    if(id=='appmenu_search'){
      Workr.statechart.sendEvent('openAppMenuSearching');
    }else{
      // maybe do something
    }
  },


  update: function(context) {

    if(this.didChangeFor('update', 'isOpen')){

      if(this.get('isOpen')){
        this.adjust('left',0).updateStyle();
      }else{
        this.adjust('left',-249).updateStyle();
      }
    }

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
  },

  render: function (context, firstTime) {
    sc_super();
    if(firstTime){
      context.push(
        '<ul class="left">',
          '<li id="appmenu_studio_btn">     <label>Studio</label><span></span></li>',
        '</ul>',
        '<div id="appmenu_search">  <input type="text" value="Search"></div>',
        '<div id="appmenu_search_results">',
          '<ul>',
/*
            '<li id="search_result1" class="workra"><span></span><label>Workr A</label><div><span></span></div></li>',
            '<li id="search_result2" class="workrb"><span></span><label>Workr B</label><div><span></span></div></li>',
            '<li id="search_result3" class="workrc"><span></span><label>Workr C</label><div><span></span></div></li>',
*/
          '</ul>',
        '</div>',
        '<ul class="menuitems">',
          '<li id="appmenu_login">   <span></span><label>Login</label></li>',
          '<li></li>',
          '<li id="appmenu_new">     <span></span><label>New Workr</label></li>',
          '<li id="appmenu_load">    <span></span><label>Load Workr</label></li>',
          '<li></li>',
          '<li id="appmenu_clear">   <span></span><label>Clear Canvas</label></li>',
        '</ul>'
      );

    }else{
      this.update(context);
    }
  }

});
