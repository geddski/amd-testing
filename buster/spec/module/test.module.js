/* 
Tests using the run() syntax 
TODO find reliable way to test that ALL tests were run, none skipped
TODO figure out why a single run() for multiple describes doesn't work
*/


buster.spec.expose();
require.config({
  baseUrl: 'js/' //MUST be the same as the modules you're testing
});

describe('run syntax with no dependencies', function(run) {
  require([], function() {
    run(function() {
      it('should work', function() {
        expect(true).toEqual(true);
      });
    });
  });
});

describe('single dependency', function(run) {
  require(['module-one'], function(moduleOne) {
    run(function() {
      it('should work', function() {
        expect(moduleOne.name).toEqual("Module One");
      });
    });
  });
});

describe('multiple dependencies', function(run) {
  require(['module-one', 'module-three'], function(moduleOne, moduleThree) {
    run(function() {
      it('should work', function() {
        expect(moduleOne.name).toEqual("Module One");
        expect(moduleThree.name).toEqual("Module Three");
      });
    });
  });
});

/* module-two depends on module-one */
describe('module with own dependency', function(run) {
  require(['module-two'], function(moduleTwo) {
    run(function() {
      it('should work', function() {
        expect(moduleTwo.name).toEqual("Module Two");
        expect(moduleTwo.dependencies[0].name).toEqual("Module One");
      });
    });
  });
});

describe('nested requires', function(run) {
  require(['require'], function(require) {
    require(['module-one'], function(moduleOne) {
      run(function(){
        it('should work', function() {
          expect(moduleOne.name).toEqual("Module One");
        });
      });
    });
  })
});

/* !! TEST BEING SKIPPED FOR SOME REASON !! */
describe('requirejs plugins', function(run) {
  require.config({
    paths: {
      'wrap': 'lib/wrap',
      'text': 'lib/text'
    },
    wrapJS: {
      'pizza': {
        deps: ['cheese'],
        attach: 'pizza'
      }
    }
  });
  require(['wrap!pizza'], function(pizza) {
    run(function() {
      it('should work', function() {
        expect(true).toEqual(false); //getting skipped still... :(
        expect(pizza.ingredients[0].name).toEqual("cheese");
      });
    });
  });
});