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
  parent:     SC.Record.toOne('Workr.Workr'),
  master:     SC.Record.attr(Boolean),
  input:      SC.Record.toOne('Workr.Workr'),
  output:     SC.Record.toOne('Workr.Workr'),
  subworkrs:  SC.Record.toMany('Workr.Workr', {
    inverse: 'parent',
    isMaster: YES
  }),


  minions: function(){

    var members = [],
        workrs  = this.get('subworkrs'),
        len     = workrs.get('length');

    for(var i = 0; i < len; i++ ){
      members.push(workrs.objectAt(i));
    }

    return members;
  }.property('subworkrs').cacheable(),


  // ..........................................................
  // LINKIT SPECIFIC INFORMTION
  //
  terminals: ['input', 'output'],
  position:  SC.Record.attr(Object),

  links: function(){
    var links       = [],
        startNode   = this.get('input'),
        endNode     = this.get('output');

    if(startNode){
      links.push( SC.Object.create( LinkIt.Link, {
        startNode:      startNode,
        startTerminal:  'output',
        endNode:        this,
        endTerminal:    'input'
      }));
    }

    if(endNode){
      links.push( SC.Object.create( LinkIt.Link, {
        startNode:      this,
        startTerminal: 'output',
        endNode:        endNode,
        endTerminal:   'input'
      }));
    }

    return links;
  }.property('input', 'output').cacheable(),


  canLink: function(link) {
 console.log('canLink');
    if (!link) return NO;
/*

    var sn = link.get('startNode'), st = link.get('startTerminal');
    var en = link.get('endNode'), et = link.get('endTerminal');

    // Make sure we don't connect to ourselves.
    if (sn === en) return NO;
    //console.log('\nCan Link: (%@).%@ => (%@).%@'.fmt(SC.guidFor(sn), st, SC.guidFor(en), et));

    // Make sure we don't already have this link.
    if (this._hasLink(link)) return NO;

    var sGender = sn.get('isMale') ? 'boy' : 'girl';
    var eGender = en.get('isMale') ? 'boy' : 'girl';
    var terms = '%@:%@ %@:%@'.fmt(sGender, st, eGender, et);
    if(sGender !== eGender && st === 'sig' && et === 'sig') {
      //console.log('(%@,%@) Man married to woman: %@'.fmt(SC.guidFor(sn), SC.guidFor(en), terms ));
      return YES;
    }

    // Data Points
    var dadHasKids = (terms.indexOf('boy:kids') > -1);
    var hasDad = (terms.indexOf('dad') > -1);
    var momHasKids = (terms.indexOf('girl:kids') > -1);
    var hasMom = (terms.indexOf('mom') > -1);
    var hasPets = (terms.indexOf('animals') > -1);
    var hasOwner = (terms.indexOf('myOwner') > -1);

    //console.log('dadKidsIdx: %@, hasDadIdx: %@, momKidsIdx: %@, hasMomIdx: %@'.fmt(dadHasKids, hasDad, momHasKids, hasMom));

    if(dadHasKids && hasDad) {
      //console.log('(%@,%@) Dad link to Kids: %@'.fmt(SC.guidFor(sn), SC.guidFor(en), terms ));
      return YES;
    }

    if(momHasKids && hasMom) {
      //console.log('(%@,%@) Mom link to Kids: %@'.fmt(SC.guidFor(sn), SC.guidFor(en), terms ));
      return YES;
    }

    if(hasPets && hasOwner){
      //console.log('(%@,%@) Owner link to pet: %@'.fmt(SC.guidFor(sn), SC.guidFor(en), terms ));
      return YES;
    }

    // TODO: [EG] add the check to make sure there is no incest
*/

    return NO;
  },

  _hasLink: function(link) {
    var links = this.get('links') || [];
    console.log('_hasLink');
 /*
    var len = links.get('length'), n;
     var linkID = LinkIt.genLinkID(link);
     for (var i = 0; i < len; i++) {
       n = links.objectAt(i);
       if (LinkIt.genLinkID(n) === linkID) {
         return YES;
       }
     }*/

  },

  didCreateLink: function(link) {
    var l = link[0]; // The link is comprised of an ARRAY of links with the Bi-directional links...often you only need the first object to complete the link
    console.log('didCreateLink');
/*
    var sn = l.get('startNode'), st = l.get('startTerminal');
    var en = l.get('endNode'), et = l.get('endTerminal');
    if(et === 'sig'){
      this.set('spouse', en);
    }
    else if (et === 'mom' && sn !== this){
      this.set('mother', sn);
    }
    else if (et === 'dad' && sn !== this){
      this.set('father', sn);
    }*/

  },

  willDeleteLink: function(link) {
 console.log('willDeleteLink');
 /*
    var sn = link.get('startNode'), st = link.get('startTerminal');
     var en = link.get('endNode'), et = link.get('endTerminal');
     if(et === 'sig'){
       this.set('spouse', null);
     }
     else if (et === 'mom'){
       this.set('mother', null);
     }
     else if (et === 'dad'){
       this.set('father', null);
     }*/

  }

});