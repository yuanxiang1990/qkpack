define("fe-common/utopia-quicklogin@0.1.5",["fe-common/utopia-cookie@0.0.1","fe-common/utopia-emitter@0.0.1","fe-common/utopia-loading@0.0.1","fe-common/utopia-refer-statistics@0.0.2","fe-platform/utopia-fe-captcha@0.0.3"],function(require, exports, module) {
                
var fe_common_utopia_cookie_0_0_1 = require("fe-common/utopia-cookie@0.0.1");
var fe_common_utopia_emitter_0_0_1 = require("fe-common/utopia-emitter@0.0.1");
var fe_common_utopia_loading_0_0_1 = require("fe-common/utopia-loading@0.0.1");
var fe_common_utopia_refer_statistics_0_0_2 = require("fe-common/utopia-refer-statistics@0.0.2");
var fe_platform_utopia_fe_captcha_0_0_3 = require("fe-platform/utopia-fe-captcha@0.0.3");

                module.exports = /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./test/crossdomain.js":
/*!*****************************!*\
  !*** ./test/crossdomain.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * \n * @authors xiongyang (xiongyang@zhubajie.com)\n * @date    2016-05-10 18:11:37\n * @description ajax 数据传输对象扩展\n *          以最优的方式实现跨域的请求和加载 （post & get）\n */\n\n/**\n * 前置过滤器扩展\n */\nvar rQuery = (/\\?/);\n\n$.ajaxPrefilter('crossdomain', function(settings, originalSettings, jqXHR) {\n\n  settings.crossDomain = true;\n\n  // 默认返回数据类型 json\n  if (settings.dataTypes.length === 1) {\n    settings.dataTypes.push('json');\n  }\n\n  // 如果浏览器支持cors 走XMLHttpRequest Leve2提交数据\n  if ($.support.cors) {\n    settings.dataTypes.shift();\n  }\n\n  // ie8 9 不支持cors\n  // 但是提供了XDomainRequest，但是不能携带cookie\n  else if (\n    window.XDomainRequest &&\n    !('xhrFields' in settings && settings['xhrFields']['withCredentials'])\n  ) {\n    settings.dataTypes[0] = 'xdomainrequest';\n  }\n\n  // default: iframe postMessage\n  else {\n    // 拼接url 添加iframe标记参数\n    settings.url += (rQuery.test(settings.url) ? '&' : '?') + 'iframe=1';\n\n    settings.dataTypes[0] = 'iframe';\n  }\n\n});\n\n\n/**\n * 数据传输对象 XDomainRequest\n */\n$.ajaxTransport('xdomainrequest', function(settings, userOptions, jqXHR) {\n  var callback;\n\n  // 从 dataTypes 中移除xdomainrequest\n  settings.dataTypes.shift();\n\n  return {\n\n    /**\n     * 发送请求\n     * 参考 https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest\n     * @param  {Object}      _           需要携带的http头(没有什么卵用)\n     * @param  {Function}    complete    请求完成回调\n     */\n    send: function(_, complete) {\n\n      var xdr = new XDomainRequest(),\n        postData;\n\n      // 回调\n      xdr.onload = callback = function(_, isAbort) {\n\n        var responseHeader;\n\n        callback = undefined;\n\n        // 终止请求\n        if (isAbort) {\n          xdr.abort();\n          return;\n        }\n\n        // header\n        responseHeader = ''.concat(\n          'Content-Length: ', xdr.responseText.length,\n          '\\r\\nContent-Type: ', xdr.contentType\n        );\n\n        // success\n        complete(200, 'success', {\n          text: xdr.responseText\n        }, responseHeader);\n\n      };\n\n      xdr.onerror = function() {\n        complete(500, 'error', {\n          text: xdr.responseText\n        });\n      };\n\n      xdr.open(settings.type, settings.url);\n      xdr.send(settings.data);\n    },\n\n    /**\n     * 终止请求\n     */\n    abort: function() {\n\n      if (callback) {\n        callback(undefined, true);\n      }\n\n    }\n\n  };\n});\n\n/**\n * 数据传输对象 iframe\n */\nvar uid = (new Date()).valueOf(),\n\n  // iframe 模板\n  iframeTpl = [\n    '<iframe title=\"empty\" tabindex=\"-1\" width=\"0\" height=\"0\" style=\"display:none\" name=\"',\n    '\"></iframe>'\n  ];\n\n$.ajaxTransport('iframe', function(settings, userOptions, jqXHR) {\n\n  var responseHandler;\n\n  // 从 dataTypes 中移除iframe\n  settings.dataTypes.shift();\n\n  return {\n\n    /**\n     * 发送请求\n     * @param  {Object}      _           需要携带的http头(没有什么卵用)\n     * @param  {Function}    complete    请求完成回调\n     */\n    send: function(_, callback) {\n      var iframeUid = 'iframe' + (uid++),\n        body = document.body || document.documentElement,\n        iframe, form;\n\n      // 创建一个隐形的iframe \n      // 参考 http://www.paciellogroup.com/blog/?p=604.\n      iframe = string2Html(iframeTpl[0] + iframeUid + iframeTpl[1]);\n\n      form = buildForm({\n          target: iframeUid,\n          method: settings.type,\n          action: settings.url\n        },\n        // innerHTML\n        buildHiddenFields(settings.data)\n      );\n\n      // 插入DOM中\n      // chrome中 没有设置src的iframe也会执行onload\n      body.appendChild(iframe);\n      body.appendChild(form);\n\n\n      // post message event\n      $(window).on('message', responseHandler = function(event, isAbort) {\n        var responseData;\n\n        if (event && event.originalEvent.origin !== getUriHost(settings.url)) {\n          return;\n        }\n\n        // 防止IE霸气侧漏\n        iframe.onload = iframe.onreadystatechange = null;\n\n        // Remove the element\n        if (iframe.parentNode) {\n          iframe.parentNode.removeChild(iframe);\n        }\n\n        if (form.parentNode) {\n          form.parentNode.removeChild(form);\n        }\n\n        iframe = form = null;\n\n        if (!isAbort) {\n          responseData = event.originalEvent.data;\n\n          // 考虑到IE8中总是返回object类型的数据\n          // 这里并不处理数据\n          callback(200, \"success\", {\n            text: responseData\n          });\n\n          $(window).off('message', responseHandler);\n        }\n      });\n\n      //提交\n      form.submit();\n    },\n\n    /**\n     * 终止请求\n     */\n    abort: function() {\n      if (responseHandler) {\n        responseHandler(undefined, true);\n      }\n    }\n\n  };\n});\n\n/**\n * 构建表单\n */\nvar formTpl = ['<form style=\"display:none;\" ', '</form>'];\n\nfunction buildForm(attrs, innerHTML) {\n  var elemAttrs = [],\n    attr;\n\n  for (attr in attrs) {\n    elemAttrs.push(attr + '=\"' + attrs[attr] + '\"');\n  }\n\n  return string2Html(formTpl[0] + elemAttrs.join(' ') + '>' + innerHTML + formTpl[1]);\n}\n\n\n/**\n * 将数据转换为表单隐藏域\n */\nvar rWhite = (/\\S+/g),\n\n  rQueryPair = /([^=&]+)=([^&]+)?/g,\n\n  emptyString = '';\n\nfunction buildHiddenFields(data) {\n  var ret, pair;\n\n  if (!data) {\n    return emptyString;\n  }\n\n  ret = [];\n\n  while (pair = rQueryPair.exec(data)) {\n    ret.push('<input type=\"hidden\" name=\"' + decodeURIComponent(pair[1]) + '\" value=\"' + decodeURIComponent(pair[2]) + '\"/>');\n  }\n\n  return ret.join(emptyString);\n}\n\n\n/**\n * 将字符串转换为HTML\n */\nfunction string2Html(html) {\n  var div = document.createElement('div'),\n    ret;\n\n  div.innerHTML = html;\n\n  ret = div.firstChild;\n\n  div = null;\n\n  return ret;\n}\n\n\nvar rUriHost = /http(s)?:\\/\\/[^\\/]*/;\n\n/**\n * 获取uri中的host\n */\nfunction getUriHost(uri) {\n  return uri.match(rUriHost)[0]\n}\n\n//# sourceURL=webpack:///./test/crossdomain.js?");

/***/ }),

/***/ "./test/images/warn.png":
/*!******************************!*\
  !*** ./test/images/warn.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQoz5XSMWpCURCF4e/KwyzCFQRETQrNIrKBiPWLNrbiNtIo1qIbcAOWaYKK4AqyiYTk2VxB5D7U0wz8Z2YYZiaIKnJV9PGGesR7LDENMz8QYnINK7SktcFrmPkOsfPnRfIuxsYZ26KT4T3ReYgC6zPWRJ6hmxjhr2S0bgXPbtdTVmJUS/hvhi+8XBgf+E8U7CtYJIwRxgm+DEXuIa61eWWtO7TvP9yJxAMO0MNjxAfMMTm9xhErfSsJlmPZfwAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./test/images/warn.png?");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Created by yuanx on 2016/5/13.\n */\nvar Emitter = __webpack_require__(/*! fe-common/utopia-emitter@0.0.1 */ \"fe-common/utopia-emitter@0.0.1\");\nvar Captchable = __webpack_require__(/*! fe-platform/utopia-fe-captcha@0.0.3 */ \"fe-platform/utopia-fe-captcha@0.0.3\");\nvar loading = __webpack_require__(/*! fe-common/utopia-loading@0.0.1 */ \"fe-common/utopia-loading@0.0.1\");\nvar cookie = __webpack_require__(/*! fe-common/utopia-cookie@0.0.1 */ \"fe-common/utopia-cookie@0.0.1\");\nvar referStatistics = __webpack_require__(/*! fe-common/utopia-refer-statistics@0.0.2 */ \"fe-common/utopia-refer-statistics@0.0.2\");\n\n\n// 模板\nvar loginabletpl = __webpack_require__(/*! ./quicklogin.tmpl */ \"./test/quicklogin.tmpl\");\n\n// 样式\n__webpack_require__(/*! ./index.less */ \"./test/index.less\");\n\n// JQuery 扩展\n__webpack_require__(/*! ./crossdomain */ \"./test/crossdomain.js\");\n\nvar QuickLogin = Emitter.extend({\n\n  element: undefined,\n\n  mobile: undefined,\n\n  mode: 0,\n\n  classPrefix: \"employ-dialog\",\n\n  tpl: loginabletpl,\n\n  radioPrefix: \"employ-radio\",\n  \n  loginAsync:true,\n\n  /**\n   * 组件初始化\n   */\n  init: function (options) {\n    var me = this;\n\n    options = options || {};\n\n    $.extend(me, options);\n\n    me.parent();\n\n    me.element = $(me.element);\n\n    me.parseElement();\n\n    /**\n     * 初始化一些参数\n     */\n\n    this.root = this.element;\n    me.verifyBtn = this.element.find(\"[data-role='verify-sender']\");\n    me.phone = this.element.find(\"input[name='phone']\");\n    me.modifyphone = this.element.find(\"input[name='modifyphone']\");\n    me.yzm = this.element.find(\"input[name='modifyphone-yzm']\");\n    me.csrfInput = this.element.find('input[name=\"zbj_csrf_token\"]');\n    me.radioname = me.radioPrefix+\"_exists_phone\";\n    me._refreshToken();\n    me.initEvent();\n  },\n  \n  /**\n   * 异步刷新token，解决部分界面下token缓存不刷新的问题。。。。。\n   * @private\n   */\n  _refreshToken: function () {\n    var me = this;\n\n    $.ajax({\n      type: 'GET',\n      url: getLoginUrl(\"/ajax/refreshtoken\"),\n      dataType: 'jsonp',\n      jsonp: 'jsonpcallback'\n    }).done(function (json) {\n      me.emit(\"getcsrftoken\",[json]);\n      if (json.success) {\n        var token = json.data;\n        if (token) {\n          me.csrfInput.val(token);\n        }\n      }\n    })\n  },\n\n  /**\n   * 重写parseElement方法，以支持已在界面上写好html的情况\n   */\n  parseElement: function () {\n    var me = this;\n    /**\n     * tpl为false时则是已经写好了html的情况,其他情况则使用百度模板\n     */\n    if (!this.tpl === false) {\n      this.html = me.tpl({\n        classPrefix: me.classPrefix,\n        mobile: me.mobile,\n        radioPrefix:me.radioPrefix\n      });\n      me.element.html(this.html);\n    }\n  },\n\n  /**\n   * 初始化事件绑定\n   */\n  initEvent: function () {\n    var me = this;\n    var inputPhone = me.modifyphone;\n    var inputYzm = me.yzm;\n    me.verifyBtn.on(\"click\", function (e) {\n      e.preventDefault();\n      if ($(this).hasClass(\"disabled\")) {\n        return;\n      }\n      me._sendCode();\n    });\n    $(\"input[name=\"+me.radioname+\"]\").on(\"click\", function () {\n      me._modifyPhoneToggleShow($(this).val());\n    });\n\n    inputPhone.on(\"keyup input\", function () {\n      checkInputPhone(1);\n    });\n\n    inputPhone.on(\"blur\", function () {\n      checkInputPhone(2);\n    });\n\n    inputYzm.on(\"keyup blur input propertychange\", function () {\n      me.emit(\"captchachange\", [$(this).val()]);\n    });\n\n    /**\n     *\n     * @param type 1：keyup事件 2：其他事件\n     * @returns {*}\n     */\n    function checkInputPhone (type) {\n      var inputPhoneVal = inputPhone.val();\n      var isValid;\n      if (!/^1\\d{10}$/.test(inputPhoneVal)) {\n        if (isNaN(inputPhoneVal) || (type == 1 && inputPhoneVal.length >= 11) || type == 2) {\n          me.showError('phone');\n        }\n        me.verifyBtn.addClass('disabled');\n        isValid = 0;\n      } else {\n        me.hideError('phone');\n        if (!loading.isBusy(me.verifyBtn)) {\n          me.verifyBtn.removeClass('disabled');\n        }\n        isValid = 1;\n      }\n      me.emit(\"mobilevalid\", isValid, inputPhoneVal);\n      return isValid;\n    }\n  },\n\n  /**\n   *其他号码显示隐藏\n   * @param val 点击的checkbox值\n   * @private\n   */\n  _modifyPhoneToggleShow: function (val) {\n    $(\".\" + this.classPrefix + \"-modifyphone\")[val == 0 ? 'show' : 'hide']();\n  },\n\n  /**\n   * 发送手机号码\n   * @private\n   */\n  _sendCode: function () {\n    var me = this;\n    this._hideAllError();\n    if (!this._validPhone()) {\n      return;\n    }\n    /**\n    * 当检测到有极验组件在的时候，\n     * 就需要验证及验证验证码\n    * */\n    if(me.captchable) {\n         me.captchable.verify();\n    }else{\n        var data = {\n          umobile:me.modifyphone.val(),\n          ltype:me.mode,\n          zbj_csrf_token:me.csrfInput.val()\n        };\n        me.send(data)\n    }\n  },\n\n  /**\n   * 发送手机验证码\n   * @param mobile 手机号码\n   * @param mode  当mode为 0 时，如果该手机号码关联了账号则直接登录，不存在关联的账号信息则会注册一个猪八戒账号并登录。\n   当mode为 1 时，如果不存在账号信息则不会注册猪八戒账号。\n   * @returns {*}\n   * 在未登录情况下返回register=1,时展示请同意用户协议文案\n   */\n  send: function (data) {\n    var dtd = $.Deferred(); // 生成Deferred对象\n    var me = this;\n    var sendUrl;\n    if (cookie.get('userid')) {\n      sendUrl = getLoginUrl(\"/quickreg/SendPhoneCode?fr=1\")\n    } else {\n      sendUrl = getLoginUrl(\"/quickreg/SendGCode?fr=1\");\n    }\n    me.emit(\"beforesend\");\n    $.ajax({\n      dataType: \"crossdomain\",\n      url: sendUrl,\n      type: \"post\",\n      xhrFields: {\n        withCredentials: true\n      },\n      data: data,\n      success: function (json) {\n        me.emit(\"sendcomplete\", [json]);\n        if (json.success) {\n          loading.start(me.verifyBtn, {\n            countingdown: 1\n          });\n          me.csrfInput.val(json.qr_token);\n          me.element.find('input[name=\"vid\"]').val(json.vid);\n          //如果返回的register=1,需要提示用户协议,这句话不能省。。\n          json.register==1 && me.showError('agreement', json.msg);\n          dtd.resolve();\n        } else if (json.code == -4) { //需要校验图片验证码\n           if (!me.captchable) {\n                me.initCaptchable();\n           } else {\n             me.showError('phone', json.msg);\n             //验证失败重置极验\n             setTimeout(function () {\n               me.captchable.reset();\n             },2000)\n          }\n          dtd.reject();\n          me.emit(\"sendfailure\", [json.msg]);\n        } else {\n          if(me.captchable){\n            setTimeout(function () {\n              me.captchable.reset();\n            },2000)\n          }\n          me.showError('phone', json.msg);\n          dtd.reject();\n          me.emit(\"sendfailure\", [json.msg]);\n        }\n      },\n      error: function (XMLHttpRequest, textStatus, errorThrown) {\n        // 通常 textStatus 和 errorThrown 之中\n        // 只有一个会包含信息\n\n      }\n    });\n    return dtd;\n  },\n  /**\n  * 初始化极验验证码\n  * */\n  initCaptchable:function(){\n    /**\n     * 减少请求量，当且仅当页面没有极验验证码，并且code为-4\n     * 初始化极验验证码并且给出极验一次验证成功和失败的回调方法\n     * */\n    var me = this;\n    me.captchable = new Captchable({\n      product: \"bind\",\n      gt_type: 'quickreg'\n    });\n    me.captchable.on(\"ready\",function(captchaObj){\n      /**\n       * 验证码错误，trigger一下重新获取验证码，\n       * 并验证极验验证码\n       * */\n      me.verifyBtn.trigger('click');\n    });\n    //极验一次验证成功的回调方法\n    me.captchable.on('success',function(captchaObj){\n      var data = me.captchable.getValidateData();\n      data.umobile = me.modifyphone.val();\n      data.ltype = me.mode;\n      data.zbj_csrf_token = me.csrfInput.val();\n      data.gt_type = \"quickreg\";\n      me.send(data);\n      me.emit('jySuccess',[me.captchable.validateObj]);\n    });\n    //极验一次验证失败的回调方法\n    me.captchable.on('error',function(obj){\n      me.emit(\"invalid\", \"cap\", \"获取图片验证码接口错误\");\n      me.showError('phone', obj.msg);\n    });\n  },\n  /**\n   * 隐藏所有错误提示信息\n   * @private\n   */\n  _hideAllError: function () {\n    this.hideError('phone');\n    this.hideError('verify');\n    this.hideError('agreement');\n  },\n\n  /**\n   * 其他号码表单验证\n   * @returns {boolean} 验证结果 true：验证通过 false：验证失败\n   */\n  valid: function () {\n    var me = this;\n    var selectedPhone = this.element.find(\"input[name=\"+me.radioname+\"]:checked\").val();\n    if (selectedPhone == 0 || this.element.find(\"input[name=\"+me.radioname+\"]\").size() == 0) {\n      if (!this._validPhone()) {\n        return false;\n      } else if (!this._validYzm()) {\n        return false;\n      } \n    }\n    return true;\n  },\n\n  /**\n   * 验证手机号码输入框\n   * @returns {boolean}验证结果 true：验证通过 false：验证失败\n   * @private\n   */\n  _validPhone: function () {\n    var mobile_reg = /^1\\d{10}$/;\n    var phone = this.element.find(\"input[name='modifyphone']\");\n    if (!mobile_reg.test(phone.val())) {\n      this.emit(\"invalid\", [\"phone\", \"请输入正确的手机号\"]);\n      this.showError(\"phone\", \"请输入正确的手机号\");\n      return false;\n    }\n    return true;\n  },\n\n  /**\n   * 验证手机验证码输入框\n   * @returns {boolean}验证结果 true：验证通过 false：验证失败\n   * @private\n   */\n  _validYzm: function () {\n    var yzm = this.yzm = this.element.find(\"input[name='modifyphone-yzm']\");\n    if (yzm.val().length == 0) {\n      this.emit(\"invalid\", [\"verify\", \"请输入验证码\"]);\n      this.showError(\"verify\", \"请输入验证码\");\n      return false;\n    }\n    return true;\n  },\n  /**\n   * 快速登录\n   * @param cb 回调函数\n   */\n  login: function (cb) {\n    var url;\n    var phoneInput = this.element.find('input[name=\"modifyphone\"]');\n    var me = this;\n    var mode = me.mode;\n    var check_phone = me.element.find(\"input[name=\"+me.radioname+\"]:checked\");\n    this._hideAllError();\n    if (check_phone.val() == 0 || me.element.find(\"input[name=\"+me.radioname+\"]\").size() == 0) { //选择的是使用其他号码\n      if (!me.valid()) {\n        return;\n      }\n    } else { //如果选择的是业务方传的已绑定的号码\n      me.phone.val(check_phone.val());\n      cb && cb();\n      return;\n    }\n    var loginParam = {};\n    if (cookie.get('userid')) {\n      url = getLoginUrl(\"/quickreg/VerifyPhoneVCode?fr=1\"); //校验手机号\n      //接口参数\n      loginParam = {\n        umobile: me.modifyphone.val(),\n        ltype: mode,\n        zbj_csrf_token: me.csrfInput.val(),\n        vcode: me.yzm.val(),\n        vid: me.element.find('input[name=\"vid\"]').val()\n      }\n    } else {\n      url = getLoginUrl(\"/quickreg/LoginVerify?fr=1\"); //快速登录\n      //手机号码\n      var mobile = phoneInput.val().replace(/^\\s*|\\s$/, '');\n\n      var staticData = referStatistics.getStatisticsData('Obj');\n\n      //统计数据\n      var unionData  = \"pmcode=\"+staticData.pmcode + \"&\" +\n          \"first_page=\" + encodeURIComponent(staticData.first_page) + \"&\" +\n          \"referer=\" + encodeURIComponent(staticData.referer) + \"&\" +\n          \"pub_page=\" + encodeURIComponent(window.location.href);\n\n      //雇主or服务商\n      var intention = this.root.find('input[name=\"user_intention\"]');\n      //当前来源\n      var wayType = this.root.find('input[name=\"way_type\"]');\n      //当前页面地址\n      var urlInput = this.root.find('input[name=\"url\"]');\n      /**\n      * 接口参数\n       * @param souceId:用于统计从哪个登录注册成功的标识\n      * */\n      loginParam = {\n        umobile: me.modifyphone.val(),\n        ltype: mode,\n        zbj_csrf_token: me.csrfInput.val(),\n        vcode: me.yzm.val(),\n        mobile: mobile,\n        union: unionData,\n        sourceId:1,\n        url: me.url || urlInput && urlInput.val() || window.location.href,\n        user_intention: me.userIntention || intention && intention.val() || '',\n        way_type: me.wayType || wayType && wayType.val() || ''\n      };\n      /**\n      * way_type为必传字段，需要找产品申请@yiweia\n      * */\n      if(loginParam.way_type.length == 0){\n        this.showError(\"phone\", \"way_type不能为空！\");\n        return;\n      };\n    }\n\n    me.emit(\"beforelogin\");\n    /**\n     * 进行快速登录或注册,已登录用户只进行手机校验\n     */\n    $.ajax({\n      dataType: \"crossdomain\",\n      url: url,\n      type: \"post\",\n      xhrFields: {\n        withCredentials: true\n      },\n      async:me.loginAsync,\n      data: loginParam,\n      success: function (json) {\n        me.emit(\"logincomplete\", [json]);\n        if (json.success) {\n          \n          /*修复发布流程第二步短信验证失效的问题\n           * */\n          if(isPubStep2()){\n            var existsphone = $('#exists_phone_input');\n            var myphone = $(\"input[name=modifyphone]\").val();\n            $(\".j-exists-phone-span\").html(myphone);\n            existsphone.val(myphone);\n            $(\"input[name=phone]\").val(myphone);\n            me.element.find(\".unstyled\").show();\n            existsphone.trigger(\"click\");\n          }\n\n          me.phone.val(phoneInput.val());\n          cb && cb(json);\n        } else {\n          if(me.captchable){\n            setTimeout(function () {\n              me.captchable.reset();\n            },2000);\n          };\n          me.emit(\"loginfailure\", [json.msg]);\n          me.showError('verify', json.msg);\n        }\n      }\n    })\n\n  },\n\n  /**\n   * 显示错误\n   * @param type 错误类型 phone:手机号码 verify:手机验证码\n   * @param msg 错误信息\n   */\n  showError: function (type, msg) {\n    var root = this.element;\n    if (type == 'phone') {\n      !msg && (msg = '请输入正确的手机号');\n    }\n    root\n      .find('.j-' + type + '-error')\n      .show()\n      .find('.j-error-tip')\n      .html(msg);\n\n    this.emit('error', msg);\n  },\n\n  /**\n   * 隐藏错误\n   * @param type 错误类型 phone:手机号码 verify:手机验证码\n   */\n  hideError: function (type) {\n    var root = this.element;\n    root\n      .find('.j-' + type + '-error')\n      .hide();\n  }\n});\n\nfunction getLoginUrl (path) {\n  return  \"https://login.\" + ZBJInfo.baseURI + path;\n}\n/**\n   * 是否发布流程第二步\n   */\nfunction isPubStep2() {\n    var locationHref=window.location.href;\n    if(locationHref.indexOf(\"/pub/step2-category-\")!=-1){\n        return true;\n    }else{\n        return false;\n    }\n}\nmodule.exports = QuickLogin;\n\n//# sourceURL=webpack:///./test/index.js?");

/***/ }),

/***/ "./test/index.less":
/*!*************************!*\
  !*** ./test/index.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/warn.png */ \"./test/images/warn.png\"));\n\n// Module\nexports.push([module.i, \".employ-dialog-contact li {\\n  margin-bottom: 15px;\\n}\\n.employ-dialog-contact li label {\\n  font-size: 12px;\\n  line-height: 1;\\n}\\n.employ-dialog-contact li input {\\n  margin-right: 6px;\\n  margin-top: 0;\\n  vertical-align: bottom;\\n}\\n.employ-dialog-modifyphone {\\n  display: none;\\n}\\n.employ-dialog-modifyphone-inputwrap {\\n  margin-bottom: 16px;\\n}\\ninput.employ-dialog-modifyphone-input,\\n.employ-dialog-modifyphone-verify {\\n  border: 1px solid #e5e5e5;\\n  height: 33px;\\n  line-height: 33px;\\n  padding: 0 5px;\\n}\\ninput.employ-dialog-modifyphone-input {\\n  border-radius: 0;\\n  font-size: 12px;\\n  width: 125px;\\n  vertical-align: baseline;\\n  box-shadow: none;\\n  margin-bottom: 0;\\n}\\n.employ-dialog-modifyphone-verify {\\n  border: 1px solid #ff9000;\\n  color: #ff9000;\\n  display: inline-block;\\n  border-radius: 5px;\\n  margin-left: 5px;\\n  padding: 0 15px;\\n  background-image: -webkit-linear-gradient(top, #fffcf7 0%, #ffe9c9 100%);\\n  background-image: -o-linear-gradient(top, #fffcf7 0%, #ffe9c9 100%);\\n  background-image: linear-gradient(to bottom, #fffcf7 0%, #ffe9c9 100%);\\n  background-repeat: repeat-x;\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffffcf7', endColorstr='#ffffe9c9', GradientType=0);\\n}\\n.employ-dialog-modifyphone-verify:hover {\\n  background-image: -webkit-linear-gradient(top, #ffe9c9 0%, #fffcf7 100%);\\n  background-image: -o-linear-gradient(top, #ffe9c9 0%, #fffcf7 100%);\\n  background-image: linear-gradient(to bottom, #ffe9c9 0%, #fffcf7 100%);\\n  background-repeat: repeat-x;\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffe9c9', endColorstr='#fffffcf7', GradientType=0);\\n}\\n.employ-dialog-modifyphone-verify.disabled,\\n.employ-dialog-modifyphone-verify.disabled:hover {\\n  background: #eeeeee;\\n  border: 1px solid #e5e5e5;\\n  color: #a9a9a9;\\n  cursor: default;\\n}\\n.modifyphone-error {\\n  color: #f60000;\\n  display: none;\\n  visibility: visible;\\n  margin-left: 0px;\\n}\\n.j-agreement-error {\\n  color: #a9a9a9;\\n}\\n.j-agreement-error a {\\n  color: #555;\\n}\\n.j-agreement-error i {\\n  display: inline-block;\\n  background: url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat center;\\n  height: 12px;\\n  width: 12px;\\n  vertical-align: middle;\\n}\\n.modifyphone-captcha-wrap {\\n  display: block;\\n  margin-top: 16px;\\n}\\n.modifyphone-captcha-wrap > input {\\n  margin-bottom: 0px;\\n  width: 123px;\\n  height: 25px;\\n  border-radius: 0px;\\n  box-shadow: none;\\n  font-size: 12px;\\n  border: 1px solid #e5e5e5;\\n}\\n.modifyphone-captcha-wrap .refimg {\\n  margin-left: 5px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./test/index.less?");

/***/ }),

/***/ "./test/quicklogin.tmpl":
/*!******************************!*\
  !*** ./test/quicklogin.tmpl ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function anonymous(_template_object\n/**/) {\nvar _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(var name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('<div class=\"',typeof(classPrefix) === 'undefined'?'':baidu.template._encodeHTML(classPrefix),'-section-title yahei\">留下您的联系方式，服务商可以更快的与您沟通</div><input name=\"phone\" type=\"hidden\" value=\"',typeof(mobile) === 'undefined'?'':baidu.template._encodeHTML(mobile),'\" data-role=\"targetPhone\"/><ul class=\"unstyled\" style=\"');if(!mobile){_template_fun_array.push('display:none');}_template_fun_array.push('\">    <li>        <label>            <input id=\"exists_phone_input\" type=\"radio\" name=\"',typeof(radioPrefix) === 'undefined'?'':baidu.template._encodeHTML(radioPrefix),'_exists_phone\"                   checked value=\"',typeof(mobile) === 'undefined'?'':baidu.template._encodeHTML(mobile),'\"/>            <span class=\"j-exists-phone-span\">',typeof(mobile) === 'undefined'?'':baidu.template._encodeHTML(mobile),'</span>        </label>    </li>    <li>        <label>            <input id=\"other_phone_input\"  type=\"radio\" name=\"',typeof(radioPrefix) === 'undefined'?'':baidu.template._encodeHTML(radioPrefix),'_exists_phone\" value=\"0\"/>使用其他号码        </label>    </li></ul><div class=\"',typeof(classPrefix) === 'undefined'?'':baidu.template._encodeHTML(classPrefix),'-modifyphone\" ');if(!mobile){_template_fun_array.push('style=\"display: block\"');}_template_fun_array.push(' data-role=\"modifyphone-wrap\"><div class=\"',typeof(classPrefix) === 'undefined'?'':baidu.template._encodeHTML(classPrefix),'-modifyphone-inputwrap\">    <input placeholder=\"请输入您的手机号\" name=\"modifyphone\" type=\"text\" class=\"',typeof(classPrefix) === 'undefined'?'':baidu.template._encodeHTML(classPrefix),'-modifyphone-input\"/>    <div class=\"modifyphone-error j-phone-error\"><i class=\"iconfont icon-font\">&#xe816;</i> <span class=\"j-error-tip\">请输入正确的手机号</span></div></div><div>    <input name=\"modifyphone-yzm\" type=\"text\" class=\"employ-dialog-modifyphone-input\" placeholder=\"请输入您收到的验证码\"/>    <a class=\"',typeof(classPrefix) === 'undefined'?'':baidu.template._encodeHTML(classPrefix),'-modifyphone-verify disabled\" data-role=\"verify-sender\" href=\"javascript:void(0)\">短信获取验证码</a>    <div class=\"modifyphone-error j-verify-error\"><i class=\"iconfont icon-font\">&#xe816;</i> <span class=\"j-error-tip\">请输入正确的验证码</span></div>    <div class=\"modifyphone-error j-agreement-error\"><i></i>    <span class=\"j-error-tip\">若手机号未注册，将自动创建猪八戒账号，且表示您已同意         <a href=\"//app.zbj.com/maijiaban/4.0.0/service-agreement.html\" target=\"_blank\">《猪八戒网服务协议》</a>    </span>    </div>    <input type=\"hidden\" name=\"vid\" />    <input type=\"hidden\" name=\"uid\" />    <input type=\"hidden\" name=\"zbj_csrf_token\"></div></div>');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n\n}\n\n//# sourceURL=webpack:///./test/quicklogin.tmpl?");

/***/ }),

/***/ "fe-common/utopia-cookie@0.0.1":
/*!************************************************!*\
  !*** external "fe-common/utopia-cookie@0.0.1" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = fe_common_utopia_cookie_0_0_1\n\n//# sourceURL=webpack:///external_%22fe-common/utopia-cookie@0.0.1%22?");

/***/ }),

/***/ "fe-common/utopia-emitter@0.0.1":
/*!*************************************************!*\
  !*** external "fe-common/utopia-emitter@0.0.1" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = fe_common_utopia_emitter_0_0_1\n\n//# sourceURL=webpack:///external_%22fe-common/utopia-emitter@0.0.1%22?");

/***/ }),

/***/ "fe-common/utopia-loading@0.0.1":
/*!*************************************************!*\
  !*** external "fe-common/utopia-loading@0.0.1" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = fe_common_utopia_loading_0_0_1\n\n//# sourceURL=webpack:///external_%22fe-common/utopia-loading@0.0.1%22?");

/***/ }),

/***/ "fe-common/utopia-refer-statistics@0.0.2":
/*!**********************************************************!*\
  !*** external "fe-common/utopia-refer-statistics@0.0.2" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = fe_common_utopia_refer_statistics_0_0_2\n\n//# sourceURL=webpack:///external_%22fe-common/utopia-refer-statistics@0.0.2%22?");

/***/ }),

/***/ "fe-platform/utopia-fe-captcha@0.0.3":
/*!******************************************************!*\
  !*** external "fe-platform/utopia-fe-captcha@0.0.3" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = fe_platform_utopia_fe_captcha_0_0_3\n\n//# sourceURL=webpack:///external_%22fe-platform/utopia-fe-captcha@0.0.3%22?");

/***/ })

/******/ })});;