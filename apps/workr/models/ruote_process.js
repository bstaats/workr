// ==========================================================================
// Project:   Workr.RuoteProcess
// ==========================================================================
/*globals Workr */

/** @class

  A process instantiation persisted in Ruote.  

  @extends SC.Record
  @version 0.1
*/
Workr.RuoteProcess = SC.Record.extend(
/** @scope Workr.RuoteProcess.prototype */ {
  /*
   * Some of these are counts.  These might be best served
   * as being calculated by app itself, since we'll have
   * relations mapped.  But, since the data is "free", we might
   * as well keep these for now.
   *
   * TODO: Need to check how SC handles the arrays. 
   */
  primaryKey: "wfid",
  expressions: SC.Record.attr(Number),
  detailed: SC.Record.attr(Boolean),
  errors: SC.Record.attr(Number),
  storedWorkitems: SC.Record.attr(Number, {key: "stored_workitems"}),
  definitionName: SC.Record.attr(String, {key: "definition_name"}),
  definitionRevision: SC.Record.attr(String, {key: "definition_revision"}),
  currentTree: SC.Record.attr(String, {key: "current_tree"}),
  launchedTime: SC.Record.attr(Date, {key: "launched_time"),
  lastActive: SC.Record.attr(Date, {key: "last_active"}),
  tags: SC.Record.attr(String),
  originalTree: SC.Record.attr(String, {key: "original_tree"}),
  variables: SC.Record.attr(String)
});
