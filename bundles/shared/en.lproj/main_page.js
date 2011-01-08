Workr.mainPage = SC.Page.design({
  classNames: 'studio_page'.w(),

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'canvas menu'.w(),

    canvas: SC.View.design({
      layout: {left: 0, top: 30, right: 0},
      tagName: 'div',
      layerId: 'studio',
      classNamesReset: YES
    }),

    menu: Workr.TopMenu.design({
      layout: {left: 0, top: 0, right: 0, height: 30}
    })


  }), //mainPane

/*
  appMenu: Workr.AppMenu.design({
    layout: { top: 0, left: 0, bottom: 0 , width: 249 }
  })
*/

});
