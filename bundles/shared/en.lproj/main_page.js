Workr.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'canvas topMenu appMenu'.w(),

    canvas: FamilyTree.CanvasView.extend({
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
