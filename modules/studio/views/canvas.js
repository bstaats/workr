sc_require('views/workr_node');

Workr.CanvasView = LinkIt.CanvasView.extend(
  Workr.CanvasDelegate,
  Ki.StatechartManager,{

  layerId: 'studio',
  contentBinding:   SC.Binding.from('Workr.workrsController').oneWay(),
  selectionBinding: 'Workr.workrsController.selection',
  exampleView:      Workr.WorkrNode,
  delegate: null,

  canvasDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isCanvasDelegate', del);
    }.property('delegate').cacheable(),


/*
  STATES
*/
  initialState: 'base',

  base: Ki.State.design({
    mouseDown: function(evt) {
      var del = this.get('owner').get('canvasDelegate');
      del.canvasClicked();
    },

    move: function(){
      this.gotoState('moved');
    }
  }),

  moved: Ki.State.design({
    enterState: function(){
      this.get('owner').animate('left', Workr.APPMENU_WIDTH, Workr.TRANSITION);
    },

    exitState: function(){
      this.get('owner').animate('left', 0, Workr.TRANSITION);
    },

    mouseDown: function(evt) {
      var del = this.get('owner').get('canvasDelegate');
      del.canvasClicked();
      this.gotoState('base');
    },

    move: function(){
      this.gotoState('base');
    }

  }),


/*
  mouseDown out of state due to LinkIt.CanvasView requirements
*/
  mouseDown: function(evt) {
    this.currentStates()[0].mouseDown(evt);
    sc_super();
  },

  render: function (context, firstTime) {
    if(firstTime){
      this.set('owner', this);
      sc_super();
    }else{
      this.invokeStateMethod('render', context, firstTime);
    }
  }
});