module.exports = function(broccoli) {
  var filterTemplates     = require('broccoli-template');
  var vndFilterES6Modules = require('broccoli-dist-es6-module');

  function filterES6Modules(tree, opts) {
    return new broccoli.MergedTree(vndFilterES6Modules(tree, opts));
  }
  var lib = broccoli.makeTree('lib');

  lib = filterTemplates(lib, {
    extensions: ['hbs'],
    compileFunction: 'Ember.Handlebars.compile'
  })

  lib = filterES6Modules(lib, {
    global:      'em.stripe',
    packageName: 'em-stripe',
    main:        'main',

    shim: {
      'ember':        'Ember',
      'handlebars':   'Handlebars',
      'ember/rsvp':   'Ember.RSVP',
      'ember/string': 'Ember.String'
    }
  });

  return [lib];
};
