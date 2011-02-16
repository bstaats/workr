Workr.mainPage = SC.Page.design({

  appMenu: SC.outlet('mainPane.appMenu'),
  canvas:  SC.outlet('mainPane.canvas'),
  topMenu: SC.outlet('mainPane.topMenu'),

  mainPane: SC.MainPane.design({
    classNamesReset: YES,
    classNames: [''],
    defaultResponder: 'Workr.statechart',
    childViews: 'canvas topMenu appMenu'.w(),

    canvas: Workr.CanvasView.extend({
      layout: {left: 0, top: 30, right: 0, bottom:0}
    }),

    topMenu: Workr.TopMenu.design({
      layout: {left: 0, top: 0, right: 0, height: 30}
    }),

    appMenu: Workr.AppMenu.design({
      layout: { top: 0, left: -249, bottom: 0 , width: 249 }
    })

  }),

});
