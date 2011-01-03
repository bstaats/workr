// ==========================================================================
// Project:   Workr.RuoteWorkitem
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Workr */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Workr.RuoteWorkitem = SC.Record.extend(
/** @scope Workr.RuoteWorkitem.prototype */ {
  /*
  * TODO: How do we handle the nested arrays?
  */
  primaryKey: "id",
  participantName: SC.Record.attr(String),
  fields: SC.Record.attr(String),
});
