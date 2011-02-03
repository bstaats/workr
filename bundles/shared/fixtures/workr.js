// ==========================================================================
// Project:   Workr.Workr Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Workr */

sc_require('models/workr');

Workr.Workr.FIXTURES = [

  { id:         '1',
    title:      "Beef Cake Workr",
    desc:       "Work it babe!",
    master:     true,
    parent:     null,
    input:      null,
    output:     null,
    subworkrs:  ['2','3','4','5','6'],
    position:   {y: 0, x: 0}
  },

  { id:         '2',
    title:      "Cup cake",
    desc:       "Work it babe again!",
    parent:     '1',
    input:      null,
    output:     '3',
    subworkrs:  [],
    position:   {y: 30, x: 30}
  },

  { id:         '3',
    title:      "Poo cake",
    desc:       "Work it babe again!",
    parent:     '1',
    input:      '2',
    output:     '4',
    subworkrs:  [],
    position:   {y: 140, x: 160}
  },

  { id:         '4',
    title:      "Pork cake",
    desc:       "Work it babe!",
    parent:     '1',
    input:      '3',
    output:     '5',
    subworkrs:  [],
    position:   {y: 250, x: 290}
  },

  { id:         '5',
    title:      "real cake",
    desc:       "Work it babe again!",
    parent:     '1',
    input:      '4',
    output:     '6',
    subworkrs:  [],
    position:   {y: 250, x: 420}
  },

  { id:         '6',
    title:      "No cake, Cake is a lie",
    desc:       "Work it babe again!",
    parent:     '1',
    input:      '5',
    output:     null,
    subworkrs:  [],
    position:   {y: 250, x: 650}
  },

];
