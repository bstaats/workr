Workr.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    defaultResponder: 'Workr.stateChart',
    childViews: 'header'.w(),

    header: SC.View.design({
      layout: {left: 0, top: 0, right: 0, height: 34},
      classNames: ['header'],

      render: function(context, firstTime){
        context = context.begin('div').addClass('logo').text('Workr')
                  .end();
      }
    }), // header


  }) //mainPane

});
