/* wrap.js RequireJS plugin
 * Copyright 2012, Dave Geddes (@geddesign)
 * wrap.js may be freely distributed under the MIT license.
 * version 0.2.1
 */

define(['text'], function (text) {
  return {
    buildMap:{},
    load:function (name, req, load, config) {
      var _this = this,
        module = config.wrapJS && config.wrapJS[name],
        //use the `path` attribute if specified
        path = config.wrapJS[name].path || name; 
        
      // if no module to load return early.
      if (!module) {
        return load();
      }

      // load the wrapped script's dependencies
      req(module.deps || [], function () {
        //for the build, get the contents with the text plugin and store the contents of the script for the write() function
        if (config.isBuild) {
          text.get(req.toUrl(path), function (scriptContent) {
            _this.buildMap[name] = {
              content:scriptContent,
              deps:module.deps || [],
              attach:config.wrapJS[name].attach
            };
            return load();
          });
        }
        else {
          // load the script now that dependencies are loaded.
          req([path], function () {
            // Attach property
            return load(getAttach(config.wrapJS[name].attach));
          });
        }
      });
    },

    /* write the output during the build, effectively turning the script into an AMD module */
    write:function (pluginName, name, write) {
      var module = this.buildMap[name],
        deps = module.deps.map(toQuotes).join(', '),
        attach = module.attach,
        //immediate function that executes the attach function or returns the global
        writeAttach = "(function () {\n" +
          "var attach = "+attach+"; \n" +
          "return (typeof attach === 'function') ? attach.apply(this) : attach; \n" +
        "}())",
        output = '/* script wrapped by the wrap! plugin */\n'+
          'define("' + pluginName + '!' + name + '", ['+ deps + '], function(){ \n' +
          module.content + '\n' +
          'return ' + writeAttach + ';\n' +
          '});\n';
      write(output);
    }
  };

  function toQuotes(val) {
    return "\"" + val + "\"";
  }

  // return the correct attached object
  function getAttach(attach){
    return (typeof attach === 'function') ? attach.apply(this, arguments) : this[attach];
  }
});