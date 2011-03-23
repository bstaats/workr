Workr.TopMenuDelegate = {
  isTopMenuDelegate: YES,

  appMenuClicked: function(){
    Workr.StudioStatechart.sendAction('openAppMenu');
  },

  libMenuClicked: function(){
    Workr.StudioStatechart.sendAction('openLibMenu');
  },

  propMenuClicked: function(){
    Workr.StudioStatechart.sendAction('openPropMenu');
  },

  nothingClicked: function(){
    Workr.StudioStatechart.sendAction('canvasClicked');
  }

}