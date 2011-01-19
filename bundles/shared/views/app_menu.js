Workr.AppMenu = SC.View.extend(SC.Animatable, {
  layout: { top: 0, left: -248, bottom: 0 , width: 249 },
  tagName: 'div',
  layerId: 'appmenu',
  classNames: 'searching'.w(),
  classNamesReset: YES,
  transitions: {
    left:{duration:5.0, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },

  mouseDown: function(evt){
    var target = evt.target;
    var state = Workr.statechart.get('currentStates')[0];

    // there has to be a better way than this
    if(state.name=='appMenu' && target.id!='appmenu'){
      Workr.statechart.sendEvent('closeAppMenu');
    }
  },


  render: function (context, firstTime) {
    if (firstTime) {
      context.push(
        '<ul class="left">',
          '<li id="appmenu_studio_btn">     <label>Studio</label><span></span></li>',
        '</ul>',
        '<div id="appmenu_search">  <input type="text" value="wor"></div>',
        '<div id="appmenu_search_results">',
          '<ul>',
            '<li id="search_result1" class="workra"><span></span><label>Workr A</label><div><span></span></div></li>',
            '<li id="search_result2" class="workrb"><span></span><label>Workr B</label><div><span></span></div></li>',
            '<li id="search_result3" class="workrc"><span></span><label>Workr C</label><div><span></span></div></li>',
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
    }
  }

});
