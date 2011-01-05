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

  }), //mainPane
  

  appNavButton: SC.outlet('appMenu.contentView.appNavButton'),

  appMenu: SC.PickerPane.design({
    layout: {width: 200},

    contentView: SC.View.design(SC.StaticLayout, {
      layout: { top: 0, left: 0, bottom: 0, right: 0 }, // localizable
      hasStaticLayout: NO
      tagName: 'div', // the default
      layerId: 'my-id',
      classNames: 'app-menu', // 'sc-base sc-view app-menu'
      classNamesReset: YES,

      childViews: 'appNavButton'.w(),
      
      mouseDown: function(evt) {
        var target = evt.target ; // some element
        var id = target.id ; // the element's id
        mouseDown && new -> some other states (also do something)
        // tweak animation CSS now
        this.displayDidChange();
      },
      
      render: function(context, firstTime) {
        var state = this.get('state') ;
        
        switch (state) {
          case 'new-mode':
            // do the rendering
            set a class to 'new-mode' ;// stays the same
        }
      },

      appNavButton: SC.ButtonView.design({
        layout: {top:0, left:0, width: 200, height: 30 },
        classNames: ['menu-item appNavButton open'],
        title:'Studio',
        action: 'closeAppMenu'
      })

    })

  })

});
