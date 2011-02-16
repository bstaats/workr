/*globals SC Workr */

Workr.TopMenu = SC.View.extend({

  tagName: 'div',
  layerId: 'menu',
  classNamesReset: YES,
  classNames: ['menu'],
  displayProperties: ['isMoved'],

  mouseDown: function(evt){
    var id = evt.target.id || evt.target.parentNode.id;

    if(id=='menu_studio_btn'){
      Workr.statechart.sendEvent('openAppMenu');
    }else if(id=='menu_library_btn'){
      Workr.statechart.sendEvent('openLibMenu');
    }else if(id=='menu_properties_btn'){
      Workr.statechart.sendEvent('openPropMenu');
    }else{
      Workr.statechart.sendEvent('closeMenus');
    }

  },

  update: function(context) {
    if(this.didChangeFor('update', 'isMoved')){
      this.childViews[0].set('isMoved', this.get('isMoved'));
    }
  },


  render: function (context, firstTime) {
    sc_super();
    if (firstTime) {
      context.push(
        '<ul class="left">',
          '<li id="menu_studio_btn">     <span></span><label>Studio</label></li>',
        '</ul>',
        '<ul class="right">',
          '<li id="menu_library_btn">    <span></span><label>Library</label></li>',
          '<li id="menu_properties_btn"> <span></span><label>Properties</label></li>',
        '</ul>'
      );
    }else{
      this.update(context);
    }
  },

  createChildViews: function(){

    this.set('childViews', [
      this.createChildView(
        SC.LabelView.extend(SC.Animatable, {
          layout: { top: 5, left: 60, width:600, height: 22},
          classNamesReset: YES,
          classNames: ['title'],
          isEditable: YES,
          fontWeight: SC.BOLD_WEIGHT,
          contentBinding: 'Workr.masterWorkrController',
          contentValueKey: 'title',
          displayProperties: ['isMoved'],
          transitions: {
            left:{duration:0.4, timing:SC.Animatable.TRANSITION_EASE_IN_OUT}
          },
          update: function(context) {
            if(this.didChangeFor('update', 'isMoved')){

              if(this.get('isMoved')){
                this.adjust('left',274).updateStyle();
              }else{
                this.adjust('left',60).updateStyle();
              }
            }
          },
          render: function (context, firstTime) {
            sc_super();
            if(!firstTime){
              this.update(context);
            }
          }


        })
      )
    ]);

  }


});
