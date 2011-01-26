// ==========================================================================
// Project:   Workr.Workr
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Workr.Workr = SC.Record.extend(LinkIt.Node, {
  primaryKey: 'id',
  title:      SC.Record.attr(String, { isRequired: YES, defaultValue: 'Untitled Workr' }),
  desc:       SC.Record.attr(String),
  subworkrs:  SC.Record.toMany('Workr.Workr')

}) ;
