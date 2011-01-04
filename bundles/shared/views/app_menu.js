Workr.AppMenu = SC.PickerPane.extend({
  init: function(){
    sc_super();
  },

  render: function(context, firstTime){
    // How to mix rendering HTML with SC.Views?
    if (firstTime) context.push("<ul><li class='search'><input type='text' value='Search'></li><li>&nbsp;</li><li class='login'>Login</li><li class='new'>New Workr</li><li class='load'>Load Workr</li><li class='clear'>Clear Canvas</li></ul>");
  }
})