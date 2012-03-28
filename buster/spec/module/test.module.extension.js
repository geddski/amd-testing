/* 
Tests without using run(), meant to be used with AMD extension
TODO run these with the AMD extension to avoid the error:
Uncaught TypeError: Cannot read property 'tests' of undefined
*/

buster.spec.expose();
require.config({
  baseUrl: 'js/' //MUST be the same as the modules you're testing
});

define('single', ['module-one'], function(moduleOne){
  describe('single dependency', function(){
    it('should work', function () {
      expect(moduleOne.name).toEqual("Module One");
    });
  });
});

define('multiple', ['module-one', 'module-three'], function(moduleOne, moduleThree){
  describe('multiple dependencies', function(){
    it('should work', function () {
      expect(moduleOne.name).toEqual("Module One");
      expect(moduleThree.name).toEqual("Module Three");
    });
  });
});

/* module-two depends on module-one */
define('own', ['module-two'], function(moduleTwo){
  describe('module with own dependency', function(){
    it('should work', function () {
      expect(moduleTwo.name).toEqual("Module Two");
      expect(moduleTwo.dependencies[0].name).toEqual("Module One");
    });
  });  
});

/* !! TEST BEING SKIPPED FOR SOME REASON !! */
define('using-plugins', [], function(){
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
        expect(true).toEqual(false); //getting skipped still... :(
      });
    });
  });
});

/* USING REQUIRE() CAUSES ERROR: 
Uncaught exception: /bust...bundle-0.3.1.js:5691 Uncaught TypeError: Cannot read property 'tests' of undefined
*/
define('nested', ['require'], function(require){
  describe('nested requires', function(){
    require(['module-one'], function(moduleOne){
      it('should work', function(){
        expect(moduleOne.name).toEqual("Module One");
      });
    });
  });
});




