/**
 * 
 * @authors xiongyang (xiongyang@zhubajie.com)
 * @date    2016-05-10 18:11:37
 * @description ajax 数据传输对象扩展
 *          以最优的方式实现跨域的请求和加载 （post & get）
 */

/**
 * 前置过滤器扩展
 */
var rQuery = (/\?/);
var cookie = require('fe-common/utopia-co@0.0.1');
$.ajaxPrefilter('crossdomain', function(settings, originalSettings, jqXHR) {

  settings.crossDomain = true;

  // 默认返回数据类型 json
  if (settings.dataTypes.length === 1) {
    settings.dataTypes.push('json');
  }

  // 如果浏览器支持cors 走XMLHttpRequest Leve2提交数据
  if ($.support.cors) {
    settings.dataTypes.shift();
  }

  // ie8 9 不支持cors
  // 但是提供了XDomainRequest，但是不能携带cookie
  else if (
    window.XDomainRequest &&
    !('xhrFields' in settings && settings['xhrFields']['withCredentials'])
  ) {
    settings.dataTypes[0] = 'xdomainrequest';
  }

  // default: iframe postMessage
  else {
    // 拼接url 添加iframe标记参数
    settings.url += (rQuery.test(settings.url) ? '&' : '?') + 'iframe=1';

    settings.dataTypes[0] = 'iframe';
  }

});


/**
 * 数据传输对象 XDomainRequest
 */
$.ajaxTransport('xdomainrequest', function(settings, userOptions, jqXHR) {
  var callback;

  // 从 dataTypes 中移除xdomainrequest
  settings.dataTypes.shift();

  return {

    /**
     * 发送请求
     * 参考 https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
     * @param  {Object}      _           需要携带的http头(没有什么卵用)
     * @param  {Function}    complete    请求完成回调
     */
    send: function(_, complete) {

      var xdr = new XDomainRequest(),
        postData;

      // 回调
      xdr.onload = callback = function(_, isAbort) {

        var responseHeader;

        callback = undefined;

        // 终止请求
        if (isAbort) {
          xdr.abort();
          return;
        }

        // header
        responseHeader = ''.concat(
          'Content-Length: ', xdr.responseText.length,
          '\r\nContent-Type: ', xdr.contentType
        );

        // success
        complete(200, 'success', {
          text: xdr.responseText
        }, responseHeader);

      };

      xdr.onerror = function() {
        complete(500, 'error', {
          text: xdr.responseText
        });
      };

      xdr.open(settings.type, settings.url);
      xdr.send(settings.data);
    },

    /**
     * 终止请求
     */
    abort: function() {

      if (callback) {
        callback(undefined, true);
      }

    }

  };
});

/**
 * 数据传输对象 iframe
 */
var uid = (new Date()).valueOf(),

  // iframe 模板
  iframeTpl = [
    '<iframe title="empty" tabindex="-1" width="0" height="0" style="display:none" name="',
    '"></iframe>'
  ];

$.ajaxTransport('iframe', function(settings, userOptions, jqXHR) {

  var responseHandler;

  // 从 dataTypes 中移除iframe
  settings.dataTypes.shift();

  return {

    /**
     * 发送请求
     * @param  {Object}      _           需要携带的http头(没有什么卵用)
     * @param  {Function}    complete    请求完成回调
     */
    send: function(_, callback) {
      var iframeUid = 'iframe' + (uid++),
        body = document.body || document.documentElement,
        iframe, form;

      // 创建一个隐形的iframe 
      // 参考 http://www.paciellogroup.com/blog/?p=604.
      iframe = string2Html(iframeTpl[0] + iframeUid + iframeTpl[1]);

      form = buildForm({
          target: iframeUid,
          method: settings.type,
          action: settings.url
        },
        // innerHTML
        buildHiddenFields(settings.data)
      );

      // 插入DOM中
      // chrome中 没有设置src的iframe也会执行onload
      body.appendChild(iframe);
      body.appendChild(form);


      // post message event
      $(window).on('message', responseHandler = function(event, isAbort) {
        var responseData;

        if (event && event.originalEvent.origin !== getUriHost(settings.url)) {
          return;
        }

        // 防止IE霸气侧漏
        iframe.onload = iframe.onreadystatechange = null;

        // Remove the element
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }

        if (form.parentNode) {
          form.parentNode.removeChild(form);
        }

        iframe = form = null;

        if (!isAbort) {
          responseData = event.originalEvent.data;

          // 考虑到IE8中总是返回object类型的数据
          // 这里并不处理数据
          callback(200, "success", {
            text: responseData
          });

          $(window).off('message', responseHandler);
        }
      });

      //提交
      form.submit();
    },

    /**
     * 终止请求
     */
    abort: function() {
      if (responseHandler) {
        responseHandler(undefined, true);
      }
    }

  };
});

/**
 * 构建表单
 */
var formTpl = ['<form style="display:none;" ', '</form>'];

function buildForm(attrs, innerHTML) {
  var elemAttrs = [],
    attr;

  for (attr in attrs) {
    elemAttrs.push(attr + '="' + attrs[attr] + '"');
  }

  return string2Html(formTpl[0] + elemAttrs.join(' ') + '>' + innerHTML + formTpl[1]);
}


/**
 * 将数据转换为表单隐藏域
 */
var rWhite = (/\S+/g),

  rQueryPair = /([^=&]+)=([^&]+)?/g,

  emptyString = '';

function buildHiddenFields(data) {
  var ret, pair;

  if (!data) {
    return emptyString;
  }

  ret = [];

  while (pair = rQueryPair.exec(data)) {
    ret.push('<input type="hidden" name="' + decodeURIComponent(pair[1]) + '" value="' + decodeURIComponent(pair[2]) + '"/>');
  }

  return ret.join(emptyString);
}


/**
 * 将字符串转换为HTML
 */
function string2Html(html) {
  var div = document.createElement('div'),
    ret;

  div.innerHTML = html;

  ret = div.firstChild;

  div = null;

  return ret;
}


var rUriHost = /http(s)?:\/\/[^\/]*/;

/**
 * 获取uri中的host
 */
function getUriHost(uri) {
  return uri.match(rUriHost)[0]
}