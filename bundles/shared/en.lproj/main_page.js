Workr.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.statechart',
    childViews: 'menu button'.w(),

    menu: SC.View.design({
      layout: {left: 0, top: 0, right: 0, height: 30},
      classNames: ['menu'],
      childViews: 'appInfoButton appNavButton libraryButton'.w(),

/*
      appInfo: SC.PickerPane.create({
        layout: { width: 300, height: 200 },
        contentView: SC.View.extend({
          layout: { top: 0, left: 0, bottom: 0, right: 0 }
        })
      }),
*/

      appInfoButton: SC.ButtonView.design({
        layout: {top:0, left:0, width: 40, height: 30 },
        classNames: ['menu-item'],
        title:'W'
      }),

      appNavButton: SC.ButtonView.design({
        layout: {top:0, left:40, width: 200, height: 30 },
        classNames: ['menu-item appNavButton'],
        title:'Studio'
      }),

      libraryButton: SC.ButtonView.design({
        layout: {top:0, right:0, width: 40, height: 30 },
        classNames: ['libraryButton'],
        title:''
      })

    }), // header

    button: ButtonView.design({
      layout: { top: 50, left: 50, width: 100, height: 50 }
    })

  }) //mainPane

});
