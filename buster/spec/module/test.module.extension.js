/* 
Tests without using run(), meant to be used with AMD extension
TODO run these with the AMD extension to avoid the error:
Uncaught TypeError: Cannot read property 'tests' of undefined
*/

buster.spec.expose();
require.config({
  baseUrl: 'js/' //MUST be the same as the modules you're testing
});

describe('no dependencies', function(){
  require([], function(){
      it('should work', function () {
        expect(true).toEqual(true);
      });
  });
});

describe('single dependency', function(){
  require(['module-one'], function(moduleOne){
      it('should work', function () {
        expect(moduleOne.name).toEqual("Module One");
      });
  });
});

describe('multiple dependencies', function(){
  require(['module-one', 'module-three'], function(moduleOne, moduleThree){
      it('should work', function () {
        expect(moduleOne.name).toEqual("Module One");
        expect(moduleThree.name).toEqual("Module Three");
      });
  });
});

/* module-two depends on module-one */
describe('module with own dependency', function(){
  require(['module-two'], function(moduleTwo){
      it('should work', function () {
        expect(moduleTwo.name).toEqual("Module Two");
        expect(moduleTwo.dependencies[0].name).toEqual("Module One");
      });
    });
});

/* !! TEST BEING SKIPPED FOR SOME REASON !! */
describe('nested requires', function(){
  require(['require'], function(require){
    require(['module-one'], function(moduleOne){
      it('should work', function(){
        expect(moduleOne.name).toEqual("Module One");
      });
    });
  })
});

/* !! TEST BEING SKIPPED FOR SOME REASON !! */
describe('requirejs plugins', function(){
  require.config({
    paths: {'wrap': 'lib/wrap', 'text': 'lib/text'},
    wrapJS: {
      'pizza': {
        deps: ['cheese'],
        attach: 'pizza'
      }
    }
  });
  require(['wrap!pizza'], function(pizza){
      it('should work', function(){
        expect(pizza.ingredients[0].name).toEqual("cheese");
      });
  });
});




