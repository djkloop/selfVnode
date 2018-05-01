/*
 * @Author: djkloop 
 * @Date: 2018-05-02 00:51:02 
 * @Last Modified by: djkloop
 * @Last Modified time: 2018-05-02 01:44:21
 */

// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';
import moment from 'moment';
import babel from 'rollup-plugin-babel';
const path = require('path');

const now = moment().format("YYYY-MM-DD HH:mm:ss");
const banner = `/*
  ${pkg.name}.js v${pkg.version}
  Created Date ${`2018-04-15 14:22:14`}
  Last Modified ${now}
  当前DEMO - 纯粹是为了学习vnode.
  Released under the MIT License.
*/`;

const src = path.resolve( 'src' );
const bin = path.resolve( 'bin' );

function resolveTypescript() {
  return {
    name: 'resolve-typescript',
    resolveId(importee, importer) {
      if(importer && (importer.startsWith(src) || importer.startsWith(bin)) && importee[0] === '.' && path.extname(importee) === '') {
        return path.resolve(path.dirname(importer), `${importee}.ts`);
      }
    }
  };
}
export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/vnode.browser.js',
    format: 'umd',
    name: 'vnode',
    sourcemap: false,
    banner
  }],
  plugins: [
    resolveTypescript(),
    typescript( {
      typescript: require( 'typescript' )
    } ),
    resolve({ browser: true }),
    commonjs()
  ]
};