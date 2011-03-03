// ==========================================================================
// Project:   Workr
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

Workr = SC.Application.create();

jQuery(document).ready(function() {
  Workr.mainPane = SC.TemplatePane.append({
    layerId: 'workr',
    templateName: 'workr'
  });
});
