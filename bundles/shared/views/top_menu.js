/*globals SC Workr */

Workr.TopMenu = SC.View.extend({

  tagName: 'div',
  layerId: 'menu',
  classNamesReset: YES,

  mouseDown: function(evt){
    var id = evt.target.id || evt.target.parentNode.id;

    if(id=='menu_studio_btn'){
      Workr.statechart.sendEvent('openAppMenu');
    }else if(id=='menu_library_btn'){
      Workr.statechart.sendEvent('openLibMenu');
    }else if(id=='menu_properties_btn'){
      Workr.statechart.sendEvent('openPropMenu');
    }else{
      Workr.statechart.sendEvent('closeMenus');
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
