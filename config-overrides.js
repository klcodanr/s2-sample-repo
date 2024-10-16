const macros = require("unplugin-parcel-macros");

module.exports = function override(config, env) {
  config.plugins.push(macros.webpack());
  return config;
};
