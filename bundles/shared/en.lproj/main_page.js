Workr.mainPage = SC.Page.design({
  classNames: 'studio_page'.w(),

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'canvas menu appMenu'.w(),

    canvas: FamilyTree.CanvasView.extend({
      layout: {left: 0, top: 30, right: 0, bottom:0}
    }),

    menu: Workr.TopMenu.design({
      layout: {left: 0, top: 0, right: 0, height: 30}
    }),

    appMenu: Workr.AppMenu.design({
      layout: { top: 0, left: -249, bottom: 0 , width: 249 }
    })

  }),

});
