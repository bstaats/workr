sc_require('core');

Workr.WorkrPanelView = SC.PalettePane.extend({
  layout: { top: 0, left: 0, width: 265, height: 265 },

  update: function(context) {

  },

  render: function (context, firstTime) {
    sc_super();
    if (firstTime) {
      context.push(
        '<p>WorkrPanelView</p>'
      );
    }else{
      this.update(context);
    }
  },

});
