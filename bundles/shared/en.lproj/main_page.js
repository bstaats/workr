Workr.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'menu'.w(),

    menu: SC.View.design({
      layout: {left: 0, top: 0, right: 0, height: 30},
      classNames: ['menu'],
      childViews: 'appInfoButton appNavButton libraryButton'.w(),

      appInfoButton: SC.ButtonView.design({
        layout: {top:0, left:0, width: 40, height: 30 },
        classNames: ['menu-item'],
        title:'W'
      }),

      appNavButton: SC.ButtonView.design({
        layout: {top:0, left:40, width: 200, height: 30 },
        classNames: ['menu-item appNavButton'],
        title:'Studio',
        action: 'openAppMenu'
      }),

      libraryButton: SC.ButtonView.design({
        layout: {top:0, right:0, width: 40, height: 30 },
        classNames: ['libraryButton'],
        title:''
      })

    }) // header

  }) //mainPane

});
