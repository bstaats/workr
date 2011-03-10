/*
  APP STATECHART
*/
Workr.Statechart = SC.Statechart.create({
  //trace: YES,

  rootState: SC.State.extend({
    appMenuToggle: function(){
      jQuery('#appmenu').toggleClass('open');
    }

  }),
});



/*
  VIEWS
*/
Workr.AppMenuButton = SC.TemplateView.create({
  tagName: 'li',
  classNames: ['studio_btn'],

  mouseDown: function(e){
    Workr.Statechart.sendEvent('appMenuToggle');
  }
});


Workr.TopMenuView = SC.TemplateView.create({
  classNames: ['topmenu'],
  mouseDown: function(e){
    if(jQuery('#appmenu').hasClass('open')){
      Workr.Statechart.sendEvent('appMenuToggle');
    }
  }
});


Workr.AppMenuView = SC.TemplateView.create({

});


jQuery(document).ready(function() {
  Workr.Statechart.initStatechart();

  Workr.mainPane = SC.TemplatePane.append({
    layerId: 'workr',
    templateName: 'workr',
/*
    childViews: 'canvas'.w(),

    canvas: Workr.CanvasView.extend({
      layout: {left: 0, top: 30, right: 0, bottom:0}
    })
*/

  });


});
