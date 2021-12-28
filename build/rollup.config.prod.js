const config = require('./rollup.config');
const { uglify } = require('rollup-plugin-uglify');

config.output.sourcemap = false;

config.plugins = [
  ...config.plugins,
  ...[
    uglify(),
  ]
]

module.exports = config;