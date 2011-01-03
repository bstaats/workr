// ==========================================================================
// Project:   Workr.RuoteExpression
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

/** @class

  Describes an Expression in Ruote

  @extends SC.Record
  @version 0.1
*/
Workr.RuoteExpression = SC.Record.extend(
/** @scope Workr.RuoteExpression.prototype */ {
  primaryKey: "fei",
  name: SC.Record.attr(String),
  tree: SC.Record.attr(String),
  /*
  * Probably should be a separate resource? This is likely an
  * array, not a string.
  */
  variables: SC.Record.attr(String),
  appliedWorkitem: SC.Record.attr(String, {key: "applied_workitem"}),
  tree: SC.Record.attr(String),
  originalTree: SC.Record.attr(String, {key: "original_tree"}),
  timeoutScheduleId: SC.Record.attr(String, {key: "timeout_schedule_id"})
});
