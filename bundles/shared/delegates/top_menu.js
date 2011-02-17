sc_require('core');

Workr.TopMenuDelegate = {
  isTopMenuDelegate: YES,

  appMenuClicked: function(){
    Workr.statechart.sendAction('openAppMenu');
  },

  libMenuClicked: function(){
    Workr.statechart.sendAction('openLibMenu');
  },

  propMenuClicked: function(){
    Workr.statechart.sendAction('openPropMenu');
  },

  nothingClicked: function(){
    Workr.statechart.sendAction('canvasClicked');
  }

}