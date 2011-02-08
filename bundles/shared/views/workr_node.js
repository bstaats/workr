sc_require('core');


Workr.WorkrNode = SC.View.extend( LinkIt.NodeView, Workr.WorkrNodeDelegate,{
  layout: { top: 0, left: 0, width: 65, height: 65 },
  displayProperties: ['content', 'isSelected'],
  delegate: null,

  workrNodeDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isWorkrNodeDelegate', del);
    }.property('delegate').cacheable(),

  doubleClick: function(evt){
    var del = this.get('workrNodeDelegate');
    del.workrNodeOpenPanel(this);
  },

  render: function(context){
    var c = this.get('content');
    context.addClass('workr');

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
