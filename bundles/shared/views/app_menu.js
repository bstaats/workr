Workr.AppMenu = SC.PickerPane.extend({
  layout: {width: 200},

  contentView: SC.View.design({
    layout: {top: 0, left: 0, bottom: 0, right: 0 },
    classNames: 'app-menu',
    childViews: 'appNavButton'.w(),

    appNavButton: SC.ButtonView.design({
      layout: {top:0, left:0, width: 200, height: 30 },
      classNames: ['menu-item appNavButton open'],
      title:'Studio',
      action: 'closeAppMenu'
    })

  })

})