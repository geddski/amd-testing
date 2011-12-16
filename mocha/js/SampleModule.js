define(['lib/module-b'], function(moduleB){
  return {
    name: "sample",
    purpose: "AMD testing",
	  dependency: moduleB.name
  };
});