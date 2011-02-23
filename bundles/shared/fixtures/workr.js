// ==========================================================================
// Project:   Workr.Workr Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

sc_require('models/workr');

Workr.Workr.FIXTURES = [

  { id:         '1',
    title:      "The Overlord",
    desc:       "Work it babe!",
    type:       "master",
    master:     true,
    parent:     null,
    input:      null,
    output:     null,
    subworkrs:  ['2','3','4','5','6'],
    position:   {y: 0, x: 0}
  },

  { id:         '2',
    title:      "Water Minion",
    desc:       "Work it babe again!",
    type:       "slave",
    parent:     '1',
    input:      null,
    output:     '3',
    subworkrs:  [],
    position:   {y: 30, x: 30}
  },

  { id:         '3',
    title:      "Fire Minion",
    desc:       "Work it babe again!",
    type:       "slave",
    parent:     '1',
    input:      '2',
    output:     '4',
    subworkrs:  [],
    position:   {y: 140, x: 160}
  },

  { id:         '4',
    title:      "Earth Minion",
    desc:       "Work it babe!",
    type:       "slave",
    parent:     '1',
    input:      '3',
    output:     '5',
    subworkrs:  [],
    position:   {y: 250, x: 290}
  },

  { id:         '5',
    title:      "Air Minion",
    desc:       "Work it babe again!",
    type:       "slave",
    parent:     '1',
    input:      '4',
    output:     '6',
    subworkrs:  [],
    position:   {y: 250, x: 420}
  },

  { id:         '6',
    title:      "Dark Minion",
    desc:       "Work it babe again!",
    type:       "slave",
    parent:     '1',
    input:      '5',
    output:     null,
    subworkrs:  [],
    position:   {y: 250, x: 650}
  },

];

Workr.WorkrType.FIXTURES = [
  {
    "id" : 1,
    "name" : "Data",
    "desc" : "Add a Description",
    "type" : "data",
    "level" : 1,
    "parent" : null,
    "children" : [2,3,4]
  },
  {
    "id" : 2,
    "name" : "Clean",
    "desc" : "Add a Description",
    "type" : "clean",
    "level" : 2,
    "parent" : 1.0,
    "children" : null
  },
  {
    "id" : 3,
    "name" : "I/O",
    "desc" : "Add a Description",
    "type" : "i/o",
    "level" : 2,
    "parent" : 1.0,
    "children" : null
  },
  {
    "id" : 4,
    "name" : "Organize",
    "desc" : "Add a Description",
    "type" : "organize",
    "level" : 2,
    "parent" : 1.0,
    "children" : null
  },
  {
    "id" : 5,
    "name" : "Presentation",
    "desc" : "Add a Description",
    "type" : "presentation",
    "level" : 1,
    "parent" : null,
    "children" : [6,7,8]
  },
  {
    "id" : 6,
    "name" : "Typography",
    "desc" : "Add a Description",
    "type" : "typography",
    "level" : 2,
    "parent" : 5.0,
    "children" : null
  },
  {
    "id" : 7,
    "name" : "Images",
    "desc" : "Add a Description",
    "type" : "images",
    "level" : 2,
    "parent" : 5.0,
    "children" : null
  },
  {
    "id" : 8,
    "name" : "Shapes",
    "desc" : "Add a Description",
    "type" : "shape",
    "level" : 2,
    "parent" : 5.0,
    "children" : null
  },
  {
    "id" : 9,
    "name" : "Visualization",
    "desc" : "Add a Description",
    "type" : "visualization",
    "level" : 1,
    "parent" : null,
    "children" : [10,11,12,13,14,15]
  },
  {
    "id" : 10,
    "name" : "Comparison",
    "desc" : "Add a Description",
    "type" : "comparison",
    "level" : 2,
    "parent" : 9.0,
    "children" : null
  },
  {
    "id" : 11,
    "name" : "Distribution",
    "desc" : "Add a Description",
    "type" : "distribution",
    "level" : 2,
    "parent" : 9.0,
    "children" : null
  },
  {
    "id" : 12,
    "name" : "Composition",
    "desc" : "Add a Description",
    "type" : "composition",
    "level" : 2,
    "parent" : 9.0,
    "children" : null
  },
  {
    "id" : 13,
    "name" : "Trend",
    "desc" : "Add a Description",
    "type" : "trend",
    "level" : 2,
    "parent" : 9.0,
    "children" : null
  },
  {
    "id" : 14,
    "name" : "Relationship",
    "desc" : "Add a Description",
    "type" : "relationship",
    "level" : 2,
    "parent" : 9.0,
    "children" : null
  },
  {
    "id" : 15,
    "name" : "Table",
    "desc" : "Add a Description",
    "type" : "table",
    "level" : 2,
    "parent" : 9.0,
    "children" : null
  }
];