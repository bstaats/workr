sc_require('core');

/*
  SC.PalettePane doesnt play well with Ki state charts... try with SC 1.5
*/
Workr.WorkrPanel = SC.PalettePane.extend( Workr.WorkrPanelDelegate,{
  classNames:         ['nodepanel'],
  delegate:           null,
  displayProperties:  ['isSelected'],

  workrPanelDelegate: function() {
      var del = this.get('delegate');
      return this.delegateFor('isWorkrPanelDelegate', del);
    }.property('delegate').cacheable(),


/*
  INTERACTION
*/
  doubleClick: function(evt){
    var del    = this.get('workrPanelDelegate'),
        target = SC.CoreQuery(evt.target);

    if(target.hasClass('title')){
      del.workrPanelClose();
    }
  },

  mouseDown: function(evt){
    var del    = this.get('workrPanelDelegate');
    del.selectWorkrPanel();
    sc_super();
  },


/*
  RENDERING
*/
  update: function(context) {
    if(this.didChangeFor('update', 'isSelected')){
      if(this.get('isSelected')){
        context.addClass('selected');
      }else{
        context.removeClass('selected');
      }
    }
  },

  render: function (context, firstTime) {
    sc_super();
    if (firstTime) {
      context.push(
        '<div class="info"><span></span></div>',
        '<div class="edit"><span></span></div>'
      );
      this.set('isSelected', YES);
    }else{
      this.update(context);
    }
  },

  createChildViews: function(){
    var content = this.get('content');

    this.set('childViews', [
      this.createChildView(
        SC.LabelView.extend({
          layout: {left: 0, right: 0, height: 20},
          classNamesReset: YES,
          classNames: ['title'],
          content: content,
          textAlign: SC.ALIGN_CENTER,
          valueBinding: SC.binding('.title', content)
        })
      ),

      this.createChildView(
        SC.View.extend({
          layout: { left: 10, right: 10, top:30, bottom: 10 },
          classNamesReset: YES,
          classNames: ['content'],
        })
      ),

      this.createChildView(
        SC.View.design(SCUI.Resizable,{
          layout: { right: 0, bottom: 0, width:20, height:20 },
          classNamesReset: YES,
          classNames: ['handle']
        })
      )

    ]);
  }

});
