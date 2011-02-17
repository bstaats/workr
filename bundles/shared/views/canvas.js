sc_require('views/workr_node');

Workr.CanvasView = LinkIt.CanvasView.extend(
  SC.Animatable,
  Workr.CanvasDelegate,
  Ki.StatechartManager,{


  layerId: 'studio',
  transitions: {
    left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
  },

  contentBinding:   SC.Binding.from('Workr.workrsController').oneWay(),
  selectionBinding: 'Workr.workrsController.selection',
 // nodeViewDelegate: Workr.workrController,
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
    move: function(){
      this.gotoState('moved');
    }
  }),

  moved: Ki.State.design({
    enterState: function(){
      this.get('owner').adjust('left',249);
    },

    exitState: function(){
      this.get('owner').adjust('left',0);
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
    var s = this.currentStates()[0];
    if(s.name=='moved') s.mouseDown(evt);
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
})