sc_require('core');

Workr.WorkrView = SC.View.extend( LinkIt.NodeView, {
  layout: { top: 0, left: 0, width: 60, height: 60 },
  displayProperties: ['content', 'isSelected'],

  content: null,

  render: function(context){
    var c = this.get('content');
    context.addClass('human');  // temp... need to style
    context.addClass('male');   // temp... need to style

    sc_super();
    if (this.get("isSelected")) context.addClass("selected");
  },

  createChildViews: function(){
    var childViews = [], contentView;
    var content = this.get('content');
    if(SC.none(content)) return;

    var iconView = this.createChildView(
      SC.View.extend({
        classNames: ['icon'],
        content: content,
        layout: { centerY: 0, left: 5, width: 25, height: 25},
        render: function(context, firstTime){
          context = context.addClass('male'); // temp... need to style
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
        classNames: ['father-terminal'],
        layout: { left: -5, top: 25, width: 10, height: 10 },
        linkStyle: { lineStyle: LinkIt.HORIZONTAL_CURVED, width: 3, color: '#A5C0DC', cap: LinkIt.ROUND},
        node: content,
        terminal: 'input',
        direction: LinkIt.INPUT_TERMINAL
      })
    );
    childViews.push(this._term_input);

    // putput Terminal
    this._term_output = this.createChildView(
      SC.View.extend(LinkIt.Terminal, {
        classNames: ['mother-terminal'],
        layout: { right: -5, top: 25, width: 10, height: 10 },
        linkStyle: { lineStyle: LinkIt.HORIZONTAL_CURVED, width: 3, color: '#E08CDF', cap: LinkIt.ROUND},
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
