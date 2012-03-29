var config = module.exports;

// config["Browser Tests With Extension"] = {
//   environment:"browser",
//   rootPath:"../",
//   libs:["js/lib/require.js"],
//   tests:[
//     "spec/module/test.module.extension.js"
//   ], 
//   sources:['**/*.js'],
//   extensions: [require("buster-amd")]
// };

config["Browser Tests"] = {
  environment:"browser",
  rootPath:"../",
  libs:["js/lib/require.js"],
  tests:[
    "spec/module/test.module.js"
  ], 
  resources:['**/*.js']
};