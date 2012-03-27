var config = module.exports;

config["Browser Tests"] = {
  environment:"browser",
  rootPath:"../",
  libs:["js/lib/require.js"],
  tests:[
    // "spec/script/*.js"
    "spec/module/test.module.js"
  ], 
  resources:['**/*.js']
};