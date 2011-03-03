// ==========================================================================
// Project:   Workr
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

Workr = SC.Application.create();



/*
  APP STATECHART
*/

SC.LOG_MODULE_LOADING = YES;

Workr.Statechart = SC.Statechart.create({
  trace: YES,

  rootState: SC.State.design({
    enterState: function(){

    }
  }),
});




jQuery(document).ready(function() {

  Workr.mainPane = SC.TemplatePane.append({
    layerId: 'workr',
    templateName: 'workr'
  });

  Workr.Statechart.initStatechart();
});
