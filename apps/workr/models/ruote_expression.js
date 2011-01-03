// ==========================================================================
// Project:   Workr.RuoteExpression
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

/** @class

  Describes an Expression in Ruote, as persisted by the Ruote Storage
  engine.

  @extends SC.Record
  @version 0.1
*/
Workr.RuoteExpression = SC.Record.extend(
/** @scope Workr.RuoteExpression.prototype */ {
  primaryKey: "fei",
  name: SC.Record.attr(String),
  tree: SC.Record.attr(String),
  /*
  * Should this be a separate resource?
  */
  variables: SC.Record.attr(Array),
  appliedWorkitem: SC.Record.attr(String, {key: "applied_workitem"}),
  /*
  * This is a JSON tree, but we don't know the structure beforehand.
  */
  tree: SC.Record.attr(String),
  originalTree: SC.Record.attr(String, {key: "original_tree"}),
  timeoutScheduleId: SC.Record.attr(String, {key: "timeout_schedule_id"})
});
