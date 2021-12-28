const path = require('path');
const serve = require('rollup-plugin-serve');
const config = require('./rollup.config');

const resolveFile = (_path) => {
  return path.join(__dirname,'..', _path);
}
config.output.sourcemap = true;

config.plugins = [
  ...config.plugins,
  ...[
    serve({
      open: true,
      port: 3000,
      contentBase: [
        resolveFile('lib'),
        resolveFile('public'),
      ]
    }),
  ]
]

module.exports = config;