/*globals SC Workr */

Workr.TopMenu = SC.View.extend({

  tagName: 'div',
  layerId: 'menu',
  classNamesReset: YES,

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
