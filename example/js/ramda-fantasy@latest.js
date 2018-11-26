!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.ramdaFantasy=t()}}(function(){return function t(n,r,e){function o(i,c){if(!r[i]){if(!n[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var s=r[i]={exports:{}};n[i][0].call(s.exports,function(t){var r=n[i][1][t];return o(r?r:t)},s,s.exports,t,n,r,e)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)o(e[i]);return o}({1:[function(t,n,r){n.exports={Either:t("./src/Either"),Future:t("./src/Future"),Identity:t("./src/Identity"),IO:t("./src/IO"),lift2:t("./src/lift2"),lift3:t("./src/lift3"),Maybe:t("./src/Maybe"),Reader:t("./src/Reader"),State:t("./src/State"),Tuple:t("./src/Tuple")}},{"./src/Either":54,"./src/Future":55,"./src/IO":56,"./src/Identity":57,"./src/Maybe":58,"./src/Reader":59,"./src/State":60,"./src/Tuple":61,"./src/lift2":63,"./src/lift3":64}],2:[function(t,n,r){var e=t("./internal/_curry1");n.exports=e(function(t){return function(){return t}})},{"./internal/_curry1":17}],3:[function(t,n,r){var e=t("./internal/_arity"),o=t("./internal/_curry2");n.exports=o(function(t,n){return e(t.length,function(){return t.apply(n,arguments)})})},{"./internal/_arity":12,"./internal/_curry2":18}],4:[function(t,n,r){var e=t("./pipe"),o=t("./reverse");n.exports=function(){if(0===arguments.length)throw new Error("compose requires at least one argument");return e.apply(this,o(arguments))}},{"./pipe":46,"./reverse":49}],5:[function(t,n,r){var e=t("./internal/_curry1"),o=t("./curryN");n.exports=e(function(t){return o(t.length,t)})},{"./curryN":6,"./internal/_curry1":17}],6:[function(t,n,r){var e=t("./internal/_arity"),o=t("./internal/_curry1"),u=t("./internal/_curry2"),i=t("./internal/_curryN");n.exports=u(function(t,n){return 1===t?o(n):e(t,i(t,[],n))})},{"./internal/_arity":12,"./internal/_curry1":17,"./internal/_curry2":18,"./internal/_curryN":20}],7:[function(t,n,r){var e=t("./internal/_curry2"),o=t("./internal/_equals");n.exports=e(function(t,n){return o(t,n,[],[])})},{"./internal/_curry2":18,"./internal/_equals":22}],8:[function(t,n,r){var e=t("./internal/_curry2"),o=t("./internal/_dispatchable"),u=t("./internal/_filter"),i=t("./internal/_isObject"),c=t("./internal/_reduce"),a=t("./internal/_xfilter"),f=t("./keys");n.exports=e(o(["filter"],a,function(t,n){return i(n)?c(function(r,e){return t(n[e])&&(r[e]=n[e]),r},{},f(n)):u(t,n)}))},{"./internal/_curry2":18,"./internal/_dispatchable":21,"./internal/_filter":23,"./internal/_isObject":30,"./internal/_reduce":37,"./internal/_xfilter":41,"./keys":44}],9:[function(t,n,r){var e=t("./internal/_checkForMethod"),o=t("./internal/_curry2");n.exports=o(e("forEach",function(t,n){for(var r=n.length,e=0;e<r;)t(n[e]),e+=1;return n}))},{"./internal/_checkForMethod":14,"./internal/_curry2":18}],10:[function(t,n,r){var e=t("./internal/_curry2");n.exports=e(function(t,n){return t===n?0!==t||1/t===1/n:t!==t&&n!==n})},{"./internal/_curry2":18}],11:[function(t,n,r){var e=t("./internal/_curry1"),o=t("./internal/_identity");n.exports=e(o)},{"./internal/_curry1":17,"./internal/_identity":26}],12:[function(t,n,r){n.exports=function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,o){return n.apply(this,arguments)};case 5:return function(t,r,e,o,u){return n.apply(this,arguments)};case 6:return function(t,r,e,o,u,i){return n.apply(this,arguments)};case 7:return function(t,r,e,o,u,i,c){return n.apply(this,arguments)};case 8:return function(t,r,e,o,u,i,c,a){return n.apply(this,arguments)};case 9:return function(t,r,e,o,u,i,c,a,f){return n.apply(this,arguments)};case 10:return function(t,r,e,o,u,i,c,a,f,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},{}],13:[function(t,n,r){n.exports=function(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}},{}],14:[function(t,n,r){var e=t("./_isArray");n.exports=function(t,n){return function(){var r=arguments.length;if(0===r)return n();var o=arguments[r-1];return e(o)||"function"!=typeof o[t]?n.apply(this,arguments):o[t].apply(o,Array.prototype.slice.call(arguments,0,r-1))}}},{"./_isArray":29}],15:[function(t,n,r){n.exports=function(t){return function(){return!t.apply(this,arguments)}}},{}],16:[function(t,n,r){var e=t("./_indexOf");n.exports=function(t,n){return e(n,t,0)>=0}},{"./_indexOf":27}],17:[function(t,n,r){var e=t("./_isPlaceholder");n.exports=function(t){return function n(r){return 0===arguments.length||e(r)?n:t.apply(this,arguments)}}},{"./_isPlaceholder":31}],18:[function(t,n,r){var e=t("./_curry1"),o=t("./_isPlaceholder");n.exports=function(t){return function n(r,u){switch(arguments.length){case 0:return n;case 1:return o(r)?n:e(function(n){return t(r,n)});default:return o(r)&&o(u)?n:o(r)?e(function(n){return t(n,u)}):o(u)?e(function(n){return t(r,n)}):t(r,u)}}}},{"./_curry1":17,"./_isPlaceholder":31}],19:[function(t,n,r){var e=t("./_curry1"),o=t("./_curry2"),u=t("./_isPlaceholder");n.exports=function(t){return function n(r,i,c){switch(arguments.length){case 0:return n;case 1:return u(r)?n:o(function(n,e){return t(r,n,e)});case 2:return u(r)&&u(i)?n:u(r)?o(function(n,r){return t(n,i,r)}):u(i)?o(function(n,e){return t(r,n,e)}):e(function(n){return t(r,i,n)});default:return u(r)&&u(i)&&u(c)?n:u(r)&&u(i)?o(function(n,r){return t(n,r,c)}):u(r)&&u(c)?o(function(n,r){return t(n,i,r)}):u(i)&&u(c)?o(function(n,e){return t(r,n,e)}):u(r)?e(function(n){return t(n,i,c)}):u(i)?e(function(n){return t(r,n,c)}):u(c)?e(function(n){return t(r,i,n)}):t(r,i,c)}}}},{"./_curry1":17,"./_curry2":18,"./_isPlaceholder":31}],20:[function(t,n,r){var e=t("./_arity"),o=t("./_isPlaceholder");n.exports=function t(n,r,u){return function(){for(var i=[],c=0,a=n,f=0;f<r.length||c<arguments.length;){var s;f<r.length&&(!o(r[f])||c>=arguments.length)?s=r[f]:(s=arguments[c],c+=1),i[f]=s,o(s)||(a-=1),f+=1}return a<=0?u.apply(this,i):e(a,t(n,i,u))}}},{"./_arity":12,"./_isPlaceholder":31}],21:[function(t,n,r){var e=t("./_isArray"),o=t("./_isTransformer");n.exports=function(t,n,r){return function(){if(0===arguments.length)return r();var u=Array.prototype.slice.call(arguments,0),i=u.pop();if(!e(i)){for(var c=0;c<t.length;){if("function"==typeof i[t[c]])return i[t[c]].apply(i,u);c+=1}if(o(i)){var a=n.apply(null,u);return a(i)}}return r.apply(this,arguments)}}},{"./_isArray":29,"./_isTransformer":33}],22:[function(t,n,r){var e=t("./_arrayFromIterator"),o=t("./_functionName"),u=t("./_has"),i=t("../identical"),c=t("../keys"),a=t("../type");n.exports=function t(n,r,f,s){if(i(n,r))return!0;if(a(n)!==a(r))return!1;if(null==n||null==r)return!1;if("function"==typeof n.equals||"function"==typeof r.equals)return"function"==typeof n.equals&&n.equals(r)&&"function"==typeof r.equals&&r.equals(n);switch(a(n)){case"Arguments":case"Array":case"Object":if("function"==typeof n.constructor&&"Promise"===o(n.constructor))return n===r;break;case"Boolean":case"Number":case"String":if(typeof n!=typeof r||!i(n.valueOf(),r.valueOf()))return!1;break;case"Date":if(!i(n.valueOf(),r.valueOf()))return!1;break;case"Error":return n.name===r.name&&n.message===r.message;case"RegExp":if(n.source!==r.source||n.global!==r.global||n.ignoreCase!==r.ignoreCase||n.multiline!==r.multiline||n.sticky!==r.sticky||n.unicode!==r.unicode)return!1;break;case"Map":case"Set":if(!t(e(n.entries()),e(r.entries()),f,s))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":break;case"ArrayBuffer":break;default:return!1}var p=c(n);if(p.length!==c(r).length)return!1;for(var l=f.length-1;l>=0;){if(f[l]===n)return s[l]===r;l-=1}for(f.push(n),s.push(r),l=p.length-1;l>=0;){var y=p[l];if(!u(y,r)||!t(r[y],n[y],f,s))return!1;l-=1}return f.pop(),s.pop(),!0}},{"../identical":10,"../keys":44,"../type":53,"./_arrayFromIterator":13,"./_functionName":24,"./_has":25}],23:[function(t,n,r){n.exports=function(t,n){for(var r=0,e=n.length,o=[];r<e;)t(n[r])&&(o[o.length]=n[r]),r+=1;return o}},{}],24:[function(t,n,r){n.exports=function(t){var n=String(t).match(/^function (\w*)/);return null==n?"":n[1]}},{}],25:[function(t,n,r){n.exports=function(t,n){return Object.prototype.hasOwnProperty.call(n,t)}},{}],26:[function(t,n,r){n.exports=function(t){return t}},{}],27:[function(t,n,r){var e=t("../equals");n.exports=function(t,n,r){var o,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(o=1/n;r<t.length;){if(u=t[r],0===u&&1/u===o)return r;r+=1}return-1}if(n!==n){for(;r<t.length;){if(u=t[r],"number"==typeof u&&u!==u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(e(t[r],n))return r;r+=1}return-1}},{"../equals":7}],28:[function(t,n,r){var e=t("./_has");n.exports=function(){var t=Object.prototype.toString;return"[object Arguments]"===t.call(arguments)?function(n){return"[object Arguments]"===t.call(n)}:function(t){return e("callee",t)}}()},{"./_has":25}],29:[function(t,n,r){n.exports=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},{}],30:[function(t,n,r){n.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{}],31:[function(t,n,r){n.exports=function(t){return null!=t&&"object"==typeof t&&t["@@functional/placeholder"]===!0}},{}],32:[function(t,n,r){n.exports=function(t){return"[object String]"===Object.prototype.toString.call(t)}},{}],33:[function(t,n,r){n.exports=function(t){return"function"==typeof t["@@transducer/step"]}},{}],34:[function(t,n,r){n.exports=function(t,n){for(var r=0,e=n.length,o=Array(e);r<e;)o[r]=t(n[r]),r+=1;return o}},{}],35:[function(t,n,r){n.exports=function(t,n){return function(){return n.call(this,t.apply(this,arguments))}}},{}],36:[function(t,n,r){n.exports=function(t){var n=t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return'"'+n.replace(/"/g,'\\"')+'"'}},{}],37:[function(t,n,r){var e=t("./_xwrap"),o=t("../bind"),u=t("../isArrayLike");n.exports=function(){function t(t,n,r){for(var e=0,o=r.length;e<o;){if(n=t["@@transducer/step"](n,r[e]),n&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}function n(t,n,r){for(var e=r.next();!e.done;){if(n=t["@@transducer/step"](n,e.value),n&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function r(t,n,r){return t["@@transducer/result"](r.reduce(o(t["@@transducer/step"],t),n))}var i="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(o,c,a){if("function"==typeof o&&(o=e(o)),u(a))return t(o,c,a);if("function"==typeof a.reduce)return r(o,c,a);if(null!=a[i])return n(o,c,a[i]());if("function"==typeof a.next)return n(o,c,a);throw new TypeError("reduce: list must be array or iterable")}}()},{"../bind":3,"../isArrayLike":43,"./_xwrap":42}],38:[function(t,n,r){n.exports=function(){var t=function(t){return(t<10?"0":"")+t};return"function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(n){return n.getUTCFullYear()+"-"+t(n.getUTCMonth()+1)+"-"+t(n.getUTCDate())+"T"+t(n.getUTCHours())+":"+t(n.getUTCMinutes())+":"+t(n.getUTCSeconds())+"."+(n.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}()},{}],39:[function(t,n,r){var e=t("./_contains"),o=t("./_map"),u=t("./_quote"),i=t("./_toISOString"),c=t("../keys"),a=t("../reject");n.exports=function t(n,r){var f=function(o){var u=r.concat([n]);return e(o,u)?"<Circular>":t(o,u)},s=function(t,n){return o(function(n){return u(n)+": "+f(t[n])},n.slice().sort())};switch(Object.prototype.toString.call(n)){case"[object Arguments]":return"(function() { return arguments; }("+o(f,n).join(", ")+"))";case"[object Array]":return"["+o(f,n).concat(s(n,a(function(t){return/^\d+$/.test(t)},c(n)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof n?"new Boolean("+f(n.valueOf())+")":n.toString();case"[object Date]":return"new Date("+(isNaN(n.valueOf())?f(NaN):u(i(n)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof n?"new Number("+f(n.valueOf())+")":1/n===-(1/0)?"-0":n.toString(10);case"[object String]":return"object"==typeof n?"new String("+f(n.valueOf())+")":u(n);case"[object Undefined]":return"undefined";default:if("function"==typeof n.toString){var p=n.toString();if("[object Object]"!==p)return p}return"{"+s(n,c(n)).join(", ")+"}"}}},{"../keys":44,"../reject":48,"./_contains":16,"./_map":34,"./_quote":36,"./_toISOString":38}],40:[function(t,n,r){n.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},{}],41:[function(t,n,r){var e=t("./_curry2"),o=t("./_xfBase");n.exports=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=o.init,t.prototype["@@transducer/result"]=o.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},e(function(n,r){return new t(n,r)})}()},{"./_curry2":18,"./_xfBase":40}],42:[function(t,n,r){n.exports=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},function(n){return new t(n)}}()},{}],43:[function(t,n,r){var e=t("./internal/_curry1"),o=t("./internal/_isArray"),u=t("./internal/_isString");n.exports=e(function(t){return!!o(t)||!!t&&("object"==typeof t&&(!u(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})},{"./internal/_curry1":17,"./internal/_isArray":29,"./internal/_isString":32}],44:[function(t,n,r){var e=t("./internal/_curry1"),o=t("./internal/_has"),u=t("./internal/_isArguments");n.exports=function(){var t=!{toString:null}.propertyIsEnumerable("toString"),n=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],r=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),i=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1};return e("function"!=typeof Object.keys||r?function(e){if(Object(e)!==e)return[];var c,a,f=[],s=r&&u(e);for(c in e)!o(c,e)||s&&"length"===c||(f[f.length]=c);if(t)for(a=n.length-1;a>=0;)c=n[a],o(c,e)&&!i(f,c)&&(f[f.length]=c),a-=1;return f}:function(t){return Object(t)!==t?[]:Object.keys(t)})}()},{"./internal/_curry1":17,"./internal/_has":25,"./internal/_isArguments":28}],45:[function(t,n,r){var e=t("./internal/_arity"),o=t("./internal/_curry1");n.exports=o(function(t){var n,r=!1;return e(t.length,function(){return r?n:(r=!0,n=t.apply(this,arguments))})})},{"./internal/_arity":12,"./internal/_curry1":17}],46:[function(t,n,r){var e=t("./internal/_arity"),o=t("./internal/_pipe"),u=t("./reduce"),i=t("./tail");n.exports=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return e(arguments[0].length,u(o,arguments[0],i(arguments)))}},{"./internal/_arity":12,"./internal/_pipe":35,"./reduce":47,"./tail":51}],47:[function(t,n,r){var e=t("./internal/_curry3"),o=t("./internal/_reduce");n.exports=e(o)},{"./internal/_curry3":19,"./internal/_reduce":37}],48:[function(t,n,r){var e=t("./internal/_complement"),o=t("./internal/_curry2"),u=t("./filter");n.exports=o(function(t,n){return u(e(t),n)})},{"./filter":8,"./internal/_complement":15,"./internal/_curry2":18}],49:[function(t,n,r){var e=t("./internal/_curry1"),o=t("./internal/_isString");n.exports=e(function(t){return o(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()})},{"./internal/_curry1":17,"./internal/_isString":32}],50:[function(t,n,r){var e=t("./internal/_checkForMethod"),o=t("./internal/_curry3");n.exports=o(e("slice",function(t,n,r){return Array.prototype.slice.call(r,t,n)}))},{"./internal/_checkForMethod":14,"./internal/_curry3":19}],51:[function(t,n,r){var e=t("./internal/_checkForMethod"),o=t("./internal/_curry1"),u=t("./slice");n.exports=o(e("tail",u(1,1/0)))},{"./internal/_checkForMethod":14,"./internal/_curry1":17,"./slice":50}],52:[function(t,n,r){var e=t("./internal/_curry1"),o=t("./internal/_toString");n.exports=e(function(t){return o(t,[])})},{"./internal/_curry1":17,"./internal/_toString":39}],53:[function(t,n,r){var e=t("./internal/_curry1");n.exports=e(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)})},{"./internal/_curry1":17}],54:[function(t,n,r){function e(t,n){switch(arguments.length){case 0:throw new TypeError("no arguments to Either");case 1:return function(n){return null==n?e.Left(t):e.Right(n)};default:return null==n?e.Left(t):e.Right(n)}}function o(t){this.value=t}function u(t){this.value=t}var i=t("ramda/src/curry"),c=t("ramda/src/toString"),a=t("./internal/util");e.prototype["@@type"]="ramda-fantasy/Either",e.prototype.map=a.returnThis,e.of=e.prototype.of=function(t){return e.Right(t)},e.prototype.chain=a.returnThis,e.either=i(function(t,n,r){if(r instanceof u)return t(r.value);if(r instanceof o)return n(r.value);throw new TypeError("invalid type given to Either.either")}),e.isLeft=function(t){return t.isLeft},e.isRight=function(t){return t.isRight},a.extend(o,e),o.prototype.isRight=!0,o.prototype.isLeft=!1,o.prototype.map=function(t){return new o(t(this.value))},o.prototype.ap=function(t){return t.map(this.value)},o.prototype.chain=function(t){return t(this.value)},e.chainRec=e.prototype.chainRec=function(t,n){for(var r,o=a.chainRecNext(n);o.isNext;){if(r=t(a.chainRecNext,a.chainRecDone,o.value),e.isLeft(r))return r;o=r.value}return e.Right(o.value)},o.prototype.bimap=function(t,n){return new o(n(this.value))},o.prototype.extend=function(t){return new o(t(this))},o.prototype.toString=function(){return"Either.Right("+c(this.value)+")"},o.prototype.equals=a.getEquals(o),e.Right=function(t){return new o(t)},a.extend(u,e),u.prototype.isLeft=!0,u.prototype.isRight=!1,u.prototype.ap=a.returnThis,u.prototype.bimap=function(t){return new u(t(this.value))},u.prototype.extend=a.returnThis,u.prototype.toString=function(){return"Either.Left("+c(this.value)+")"},u.prototype.equals=a.getEquals(u),e.Left=function(t){return new u(t)},e.prototype.either=function(t,n){return this.isLeft?t(this.value):n(this.value)},n.exports=e},{"./internal/util":62,"ramda/src/curry":5,"ramda/src/toString":52}],55:[function(t,n,r){function e(t,n){return function(r){try{return n(r)}catch(n){t(n)}}}function o(t){return this instanceof o?void(this._fork=t):new o(t)}var u=t("ramda/src/once"),i=t("ramda/src/forEach"),c=t("ramda/src/toString"),a=t("ramda/src/curry"),f=t("./internal/util");o.prototype["@@type"]="ramda-fantasy/Future",o.prototype.fork=function(t,n){this._fork(t,e(t,n))},o.prototype.map=function(t){return this.chain(function(n){return o.of(t(n))})},o.prototype.ap=function(t){var n=this;return new o(function(r,o){var i,c,a=u(r),f=e(a,function(){if(null!=i&&null!=c)return o(i(c))});n._fork(a,function(t){i=t,f()}),t._fork(a,function(t){c=t,f()})})},o.of=function(t){return new o(function(n,r){return r(t)})},o.prototype.of=o.of,o.prototype.chain=function(t){return new o(function(n,r){return this._fork(function(t){return n(t)},e(n,function(e){return t(e)._fork(n,r)}))}.bind(this))},o.chainRec=o.prototype.chainRec=function(t,n){return o(function(r,e){return function n(o){for(var u=null,i=f.chainRecNext(o),c=function(t){null===u?(u=!0,i=t):(t.isNext?n:e)(t.value)};i.isNext;)if(u=null,t(f.chainRecNext,f.chainRecDone,i.value).fork(r,c),u!==!0)return void(u=!1);e(i.value)}(n)})},o.prototype.chainReject=function(t){return new o(function(n,r){return this._fork(e(n,function(e){return t(e)._fork(n,r)}),function(t){return r(t)})}.bind(this))},o.prototype.bimap=function(t,n){var r=this;return new o(function(o,u){r._fork(e(o,function(n){o(t(n))}),e(o,function(t){u(n(t))}))})},o.reject=function(t){return new o(function(n){n(t)})},o.prototype.toString=function(){return"Future("+c(this._fork)+")"},o.cache=function(t){function n(t,n){c.push({REJECTED:t,RESOLVED:n})}function r(n,r){return u="PENDING",t._fork(f("REJECTED",n),f("RESOLVED",r))}var e,u="IDLE",c=[],f=a(function(t,n,r){u=t,e=r,n(r),i(function(t){t[u](e)},c)});return new o(function(t,o){switch(u){case"IDLE":r(t,o);break;case"PENDING":n(t,o);break;case"REJECTED":t(e);break;case"RESOLVED":o(e)}})},n.exports=o},{"./internal/util":62,"ramda/src/curry":5,"ramda/src/forEach":9,"ramda/src/once":45,"ramda/src/toString":52}],56:[function(t,n,r){function e(t){return this instanceof e?void(this.fn=t):new e(t)}var o=t("ramda/src/compose"),u=t("ramda/src/toString"),i=t("./internal/util");n.exports=e,e.prototype["@@type"]="ramda-fantasy/IO",e.prototype.chain=function(t){var n=this;return new e(function(){var r=t(n.fn.apply(n,arguments));return r.fn.apply(r,arguments)})},e.chainRec=e.prototype.chainRec=function(t,n){return new e(function(){for(var r=i.chainRecNext(n);r.isNext;)r=t(i.chainRecNext,i.chainRecDone,r.value).fn();return r.value})},e.prototype.map=function(t){var n=this;return new e(o(t,n.fn))},e.prototype.ap=function(t){return this.chain(function(n){return t.map(n)})},e.runIO=function(t){return t.runIO.apply(t,[].slice.call(arguments,1))},e.prototype.runIO=function(){return this.fn.apply(this,arguments)},e.prototype.of=function(t){return new e(function(){return t})},e.of=e.prototype.of,e.prototype.toString=function(){return"IO("+u(this.fn)+")"}},{"./internal/util":62,"ramda/src/compose":4,"ramda/src/toString":52}],57:[function(t,n,r){function e(t){return this instanceof e?void(this.value=t):new e(t)}var o=t("ramda/src/toString"),u=t("./internal/util");e.prototype["@@type"]="ramda-fantasy/Identity",e.of=function(t){return new e(t)},e.prototype.of=e.of,e.prototype.map=function(t){return new e(t(this.value))},e.prototype.ap=function(t){return t.map(this.value)},e.prototype.chain=function(t){return t(this.value)},e.chainRec=e.prototype.chainRec=function(t,n){for(var r=u.chainRecNext(n);r.isNext;)r=t(u.chainRecNext,u.chainRecDone,r.value).get();return e(r.value)},e.prototype.get=function(){return this.value},e.prototype.equals=u.getEquals(e),e.prototype.toString=function(){return"Identity("+o(this.value)+")"},n.exports=e},{"./internal/util":62,"ramda/src/toString":52}],58:[function(t,n,r){function e(t){return null==t?f:e.Just(t)}function o(t){this.value=t}function u(){}var i=t("ramda/src/toString"),c=t("ramda/src/curry"),a=t("./internal/util.js");e.prototype["@@type"]="ramda-fantasy/Maybe",a.extend(o,e),o.prototype.isJust=!0,o.prototype.isNothing=!1,a.extend(u,e),u.prototype.isNothing=!0,u.prototype.isJust=!1;var f=new u;e.Nothing=function(){return f},e.Just=function(t){return new o(t)},e.of=e.Just,e.prototype.of=e.Just,e.isJust=function(t){return t.isJust},e.isNothing=function(t){return t.isNothing},e.maybe=c(function(t,n,r){return r.reduce(function(t,r){return n(r)},t)}),e.toMaybe=e,o.prototype.concat=function(t){return t.isNothing?this:this.of(this.value.concat(t.value))},u.prototype.concat=a.identity,o.prototype.map=function(t){return this.of(t(this.value))},u.prototype.map=a.returnThis,o.prototype.ap=function(t){return t.map(this.value)},u.prototype.ap=a.returnThis,o.prototype.chain=a.baseMap,u.prototype.chain=a.returnThis,e.chainRec=e.prototype.chainRec=function(t,n){for(var r,o=a.chainRecNext(n);o.isNext;){if(r=t(a.chainRecNext,a.chainRecDone,o.value),e.isNothing(r))return r;o=r.value}return e.Just(o.value)},o.prototype.datatype=o,u.prototype.datatype=u,o.prototype.equals=a.getEquals(o),u.prototype.equals=function(t){return t===f},e.prototype.isNothing=function(){return this===f},e.prototype.isJust=function(){return this instanceof o},o.prototype.getOrElse=function(){return this.value},u.prototype.getOrElse=function(t){return t},o.prototype.reduce=function(t,n){return t(n,this.value)},u.prototype.reduce=function(t,n){return n},o.prototype.toString=function(){return"Maybe.Just("+i(this.value)+")"},u.prototype.toString=function(){return"Maybe.Nothing()"},n.exports=e},{"./internal/util.js":62,"ramda/src/curry":5,"ramda/src/toString":52}],59:[function(t,n,r){function e(t){return this instanceof e?void(this.run=t):new e(t)}var o=t("ramda/src/compose"),u=t("ramda/src/identity"),i=t("ramda/src/toString"),c=t("ramda/src/always");e.run=function(t){return t.run.apply(t,[].slice.call(arguments,1))},e.prototype["@@type"]="ramda-fantasy/Reader",e.prototype.chain=function(t){var n=this;return new e(function(r){return t(n.run(r)).run(r)})},e.prototype.ap=function(t){return this.chain(function(n){return t.map(n)})},e.prototype.map=function(t){return this.chain(function(n){return e.of(t(n))})},e.prototype.of=function(t){return new e(function(){return t})},e.of=e.prototype.of,e.ask=e(u),e.prototype.toString=function(){return"Reader("+i(this.run)+")"},e.T=function(t){var n=function t(n){return this instanceof t?void(this.run=n):new t(n)};return n.lift=o(n,c),n.ask=n(t.of),n.prototype.of=n.of=function(r){return n(function(){return t.of(r)})},n.prototype.chain=function(t){var r=this;return n(function(n){var e=r.run(n);return e.chain(function(r){return t(r).run(n)})})},n.prototype.map=function(t){return this.chain(function(r){return n.of(t(r))})},n.prototype.ap=function(t){var r=this;return n(function(n){return r.run(n).ap(t.run(n))})},n.prototype.toString=function(){return"ReaderT["+t.name+"]("+i(this.run)+")"},n},n.exports=e},{"ramda/src/always":2,"ramda/src/compose":4,"ramda/src/identity":11,"ramda/src/toString":52}],60:[function(t,n,r){function e(t){function n(t){return this instanceof n?void(this._run=t):new n(t)}return n.prototype.run=function(t){return this._run(t)},n.prototype.eval=function(t){return i.fst(this.run(t))},n.prototype.exec=function(t){return i.snd(this.run(t))},n.prototype.chain=function(t){var r=this;return n(function(n){return r._run(n).chain(function(n){return t(i.fst(n))._run(i.snd(n))})})},n.of=n.prototype.of=function(r){return n(function(n){return t.of(i(r,n))})},n.prototype.ap=c.deriveAp(n),n.prototype.map=c.deriveMap(n),n.tailRec=o(function(r,e){return n(function(n){return t.tailRec(function(n){return r(i.fst(n))._run(i.snd(n)).chain(function(n){return t.of(i.fst(n).bimap(function(t){return i(t,i.snd(n))},function(t){return i(t,i.snd(n))}))})},i(e,n))})}),n.lift=function(r){return n(function(n){return r.chain(function(r){return t.of(i(r,n))})})},n.get=n(function(n){return t.of(i(n,n))}),n.gets=function(r){return n(function(n){return t.of(i(r(n),n))})},n.put=function(r){return n(function(n){return t.of(i(void n,r))})},n.modify=function(r){return n(function(n){return t.of(i(void 0,r(n)))})},n}var o=t("ramda/src/curry"),u=t("./Identity"),i=t("./Tuple"),c=t("./internal/util"),a=e(u);a.T=e,a.prototype.run=function(t){return this._run(t).value},n.exports=a},{"./Identity":57,"./Tuple":61,"./internal/util":62,"ramda/src/curry":5}],61:[function(t,n,r){function e(t,n){switch(arguments.length){case 0:throw new TypeError("no arguments to Tuple");case 1:return function(n){return new o(t,n)};default:return new o(t,n)}}function o(t,n){this[0]=t,this[1]=n,this.length=2}function u(t){t.forEach(function(t){if("function"!=typeof t.concat)throw new TypeError(i(t)+" must be a semigroup to perform this operation")})}var i=t("ramda/src/toString"),c=t("ramda/src/equals");e.fst=function(t){return t[0]},e.snd=function(t){return t[1]},o.prototype["@@type"]="ramda-fantasy/Tuple",o.prototype.concat=function(t){return u([this[0],this[1]]),e(this[0].concat(t[0]),this[1].concat(t[1]))},o.prototype.map=function(t){return e(this[0],t(this[1]))},o.prototype.ap=function(t){return u([this[0]]),e(this[0].concat(t[0]),this[1](t[1]))},o.prototype.equals=function(t){return t instanceof o&&c(this[0],t[0])&&c(this[1],t[1])},o.prototype.toString=function(){return"Tuple("+i(this[0])+", "+i(this[1])+")"},n.exports=e},{"ramda/src/equals":7,"ramda/src/toString":52}],62:[function(t,n,r){var e=t("ramda/src/equals");n.exports={baseMap:function(t){return t(this.value)},getEquals:function(t){return function(n){return n instanceof t&&e(this.value,n.value)}},extend:function(t,n){function r(){this.constructor=t}r.prototype=n.prototype,t.prototype=new r,t.super_=n.prototype},identity:function(t){return t},notImplemented:function(t){return function(){throw new Error(t+" is not implemented")}},notCallable:function(t){return function(){throw new Error(t+" cannot be called directly")}},returnThis:function(){return this},chainRecNext:function(t){return{isNext:!0,value:t}},chainRecDone:function(t){return{isNext:!1,value:t}},deriveAp:function(t){return function(n){return this.chain(function(r){return n.chain(function(n){return t.of(r(n))})})}},deriveMap:function(t){return function(n){return this.chain(function(r){return t.of(n(r))})}}}},{"ramda/src/equals":7}],63:[function(t,n,r){var e=t("ramda/src/curryN");n.exports=e(3,function(t,n,r){return n.map(t).ap(r)})},{"ramda/src/curryN":6}],64:[function(t,n,r){var e=t("ramda/src/curryN");n.exports=e(4,function(t,n,r,e){return n.map(t).ap(r).ap(e)})},{"ramda/src/curryN":6}]},{},[1])(1)});