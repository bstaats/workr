/*globals SC Workr */

Workr.TopMenu = SC.View.extend({

  tagName: 'div',
  layerId: 'menu',
  classNamesReset: YES,

  mouseDown: function(evt){
    var target = evt.target;
    var state = Workr.statechart.get('currentStates')[0];

    // there has to be a better way than this
    if(state.name=='appMenu'){
      Workr.statechart.sendEvent('closeAppMenu');
    }else{
      if(target.id=='menu_studio_btn' || target.parentNode.id=='menu_studio_btn'){
        Workr.statechart.sendEvent('openAppMenu');
      }
    }
  },

  render: function (context, firstTime) {
    if (firstTime) {
      context.push(
        '<ul class="left">',
          '<li id="menu_studio_btn">     <span></span><label>Studio</label></li>',
        '</ul>',
        '<ul class="right">',
          '<li id="menu_library_btn">    <span></span><label>Library</label></li>',
          '<li id="menu_properties_btn"> <span></span><label>Properties</label></li>',
        '</ul>'
      );
    }
  }

});
