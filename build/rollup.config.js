const babel = require('rollup-plugin-babel'); // 处理babel es6语法
const typescript = require('rollup-plugin-typescript2'); // 处理typescript语法
const resolve = require('rollup-plugin-node-resolve'); // 
const postcss = require('rollup-plugin-postcss'); // 处理css 语法
const autoprefixer = require('autoprefixer'); // 处理css 语法 添加前缀
const cssnano = require('cssnano'); // 压缩css
const path = require('path');

const resolveFile = (_path) => {
  return path.join(__dirname,'..', _path);
}

module.exports = {
  input: resolveFile('src/index.ts'),
  output: {
    file: resolveFile('lib/index.js'),
    format: 'umd',
    sourcemap: true,
    name: 'React',
  },
  plugins: [ 
    babel(),
    typescript(),
    resolve(),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano()],
      extract: true,
    })
   ],
  external:['react']
};