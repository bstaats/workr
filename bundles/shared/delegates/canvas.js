sc_require('core');

Workr.CanvasDelegate = {
  isCanvasDelegate: YES,

  canvasClicked: function(){
    Workr.statechart.sendAction('canvasClicked');
  },

}