Workr.mainPage = SC.Page.design({
  classNames: 'studio_page'.w(),

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'menu appMenu'.w(),

    menu: Workr.TopMenu.design({
      layout: {left: 0, top: 0, right: 0, height: 30}
    }),

    appMenu: Workr.AppMenu.design()

  }),

});
