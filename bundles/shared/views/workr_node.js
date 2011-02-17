sc_require('core');


Workr.WorkrNode = SC.View.extend(
  LinkIt.NodeView,
  Workr.WorkrNodeDelegate,
  Ki.StatechartManager,{


  layout: { top: 0, left: 0, width: 65, height: 65 },
  displayProperties: ['content', 'isSelected'],
  classNames: ['workr'],
  delegate: null,

  workrNodeDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isWorkrNodeDelegate', del);
    }.property('delegate').cacheable(),


/*
  STATES
*/
  initialState: 'base',

  base: Ki.State.design({
    /* Cannot use enterState since this is the initialState (this obj has not been created yet)  */

    doubleClick: function(evt){
      var del = this.get('owner').get('workrNodeDelegate');
      del.workrNodeOpenPanel(this.get('owner'));
    },

    render: function(context, firstTime){
      // maybe there should be a selected state
      if (this.get('owner').get("isSelected")) context.addClass("selected");
    }

  }),


  render: function(context, firstTime){
    if(firstTime){
      this.set('owner', this); // why should I have to do this? the owner is this objects parent by default
      sc_super();
    }else{
      this.invokeStateMethod('render', context, firstTime);
    }
  },


  createChildViews: function(){
    var childViews = [], contentView;
    var content = this.get('content');
    if(SC.none(content)) return;

    var iconView = this.createChildView(
      SC.View.extend({
        classNames: ['icon'],
        content: content,
        layout: { centerY: 0, centerX: 0, width: 35, height: 35},
        render: function(context, firstTime){
          sc_super();
        }
      })
    );
    childViews.push(iconView);

    // This is the content of the view
    contentView = this.createChildView(
      SC.LabelView.extend({
        classNames: ['name'],
        content: content,
        isEditable: YES,
        layout: { top: 70, centerX: 0, width: 150, height: 25},
        textAlign: SC.ALIGN_CENTER,
        valueBinding: SC.binding('.title', content)
      })
    );
    childViews.push(contentView);

    // input Terminal
    this._term_input = this.createChildView(
      SC.View.extend(LinkIt.Terminal, {
        classNames: ['workr-terminal'],
        layout: { left: 0, top: 25, width: 3, height: 13 },
        linkStyle: { lineStyle: LinkIt.HORIZONTAL_CURVED, width: 2, color: '#ccc', cap: LinkIt.ROUND},
        node: content,
        terminal: 'input',
        direction: LinkIt.INPUT_TERMINAL
      })
    );
    childViews.push(this._term_input);

    // putput Terminal
    this._term_output = this.createChildView(
      SC.View.extend(LinkIt.Terminal, {
        classNames: ['workr-terminal'],
        layout: { right: 0, top: 25, width: 3, height: 13 },
        linkStyle: { lineStyle: LinkIt.HORIZONTAL_CURVED, width: 2, color: '#ccc', cap: LinkIt.ROUND},
        node: content,
        terminal: 'output',
        direction: LinkIt.OUTPUT_TERMINAL
      })
    );
    childViews.push(this._term_output);


    this.set('childViews', childViews);
  },

  // ..........................................................
  // LINKIT Specific for the view
  //
  /**
    Implements LinkIt.NodeView.terminalViewFor()
  */
  terminalViewFor: function(terminalKey) {
    //console.log(this,terminalKey, this['_term_' + terminalKey])
    return this['_term_' + terminalKey];
  }
});
