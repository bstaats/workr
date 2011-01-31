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
    parent:     null,
    inputs:     [],
    outputs:    [],
    subworkrs:  ['2','3','4','5','6'],
    position:   {y: 35, x: 300}
  },

  { id:         '2',
    title:      "Cup cake",
    desc:       "Work it babe again!",
    parent:     '1',
    inputs:     [],
    outputs:    ['3'],
    subworkrs:  [],
    position:   {y: 35, x: 300}  
  },

  { id:         '3',
    title:      "Poo cake",
    desc:       "Work it babe again!",
    parent:     '1',
    inputs:     ['2'],
    outputs:    ['4'],
    subworkrs:  [],
    position:   {y: 300, x: 10}
  },

  { id:         '4',
    title:      "Pork cake",
    desc:       "Work it babe!",
    parent:     '1',
    inputs:     ['3'],
    outputs:    ['5'],
    subworkrs:  [],
    position:   {y: 300, x: 300}
  },

  { id:         '5',
    title:      "real cake",
    desc:       "Work it babe again!",
    parent:     '1',
    inputs:     ['4'],
    outputs:    ['6'],
    subworkrs:  [],
    position:   {y: 200, x: 300}
  },

  { id:         '6',
    title:      "No cake, Cake is a lie",
    desc:       "Work it babe again!",
    parent:     '1',
    inputs:     ['5'],
    outputs:    [],
    subworkrs:  [],
    position:   {y: 100, x: 100}
  },

];
