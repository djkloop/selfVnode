/*
  selfVnode.js v1.0.0
  Created Date 2018-04-15 14:22:14
  Last Modified 2018-05-02 01:45:10
  当前DEMO - 纯粹是为了学习vnode.
  Released under the MIT License.
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    /**
     * svg
     */
    function h (_) {
        console.log('h 函数...');
    }

    function is () {
        console.log(2);
    }

    // fresh page.
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></script>');
    h("good man");
    is();

})));
