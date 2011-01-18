Workr.mainPage = SC.Page.design({
  classNames: 'studio_page'.w(),


  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'menu'.w(),

    menu: Workr.TopMenu.design({
      layout: {left: 0, top: 0, right: 0, height: 30}
    })

  }),


  /*
    what is the drawing order? Do we have to start setting z-indexes on everything?
  */
  appMenu: Workr.AppMenu.design({
    layout: { top: 0, left: -248, bottom: 0 , width: 249 }
  })


});
