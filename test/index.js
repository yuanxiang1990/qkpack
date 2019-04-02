/**
 * Created by yuanx on 2016/5/13.
 */
var Emitter = require("fe-common/utopia-emitter@0.0.1");
var Captchable = require('fe-platform/utopia-fe-captcha@0.0.3');
var loading = require('fe-common/utopia-loading@0.0.1');
var cookie = require('fe-common/utopia-cookie@0.0.1');
var referStatistics = require('fe-common/utopia-refer-statistics@0.0.2');


// 模板
var loginabletpl = require('./quicklogin.tmpl');

// 样式
require('./index.less');

// JQuery 扩展
require('./crossdomain');

var QuickLogin = Emitter.extend({

  element: undefined,

  mobile: undefined,

  mode: 0,

  classPrefix: "employ-dialog",

  tpl: loginabletpl,

  radioPrefix: "employ-radio",
  
  loginAsync:true,

  /**
   * 组件初始化
   */
  init: function (options) {
    var me = this;

    options = options || {};

    $.extend(me, options);

    me.parent();

    me.element = $(me.element);

    me.parseElement();

    /**
     * 初始化一些参数
     */

    this.root = this.element;
    me.verifyBtn = this.element.find("[data-role='verify-sender']");
    me.phone = this.element.find("input[name='phone']");
    me.modifyphone = this.element.find("input[name='modifyphone']");
    me.yzm = this.element.find("input[name='modifyphone-yzm']");
    me.csrfInput = this.element.find('input[name="zbj_csrf_token"]');
    me.radioname = me.radioPrefix+"_exists_phone";
    me._refreshToken();
    me.initEvent();
  },
  
  /**
   * 异步刷新token，解决部分界面下token缓存不刷新的问题。。。。。
   * @private
   */
  _refreshToken: function () {
    var me = this;

    $.ajax({
      type: 'GET',
      url: getLoginUrl("/ajax/refreshtoken"),
      dataType: 'jsonp',
      jsonp: 'jsonpcallback'
    }).done(function (json) {
      me.emit("getcsrftoken",[json]);
      if (json.success) {
        var token = json.data;
        if (token) {
          me.csrfInput.val(token);
        }
      }
    })
  },

  /**
   * 重写parseElement方法，以支持已在界面上写好html的情况
   */
  parseElement: function () {
    var me = this;
    /**
     * tpl为false时则是已经写好了html的情况,其他情况则使用百度模板
     */
    if (!this.tpl === false) {
      this.html = me.tpl({
        classPrefix: me.classPrefix,
        mobile: me.mobile,
        radioPrefix:me.radioPrefix
      });
      me.element.html(this.html);
    }
  },

  /**
   * 初始化事件绑定
   */
  initEvent: function () {
    var me = this;
    var inputPhone = me.modifyphone;
    var inputYzm = me.yzm;
    me.verifyBtn.on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("disabled")) {
        return;
      }
      me._sendCode();
    });
    $("input[name="+me.radioname+"]").on("click", function () {
      me._modifyPhoneToggleShow($(this).val());
    });

    inputPhone.on("keyup input", function () {
      checkInputPhone(1);
    });

    inputPhone.on("blur", function () {
      checkInputPhone(2);
    });

    inputYzm.on("keyup blur input propertychange", function () {
      me.emit("captchachange", [$(this).val()]);
    });

    /**
     *
     * @param type 1：keyup事件 2：其他事件
     * @returns {*}
     */
    function checkInputPhone (type) {
      var inputPhoneVal = inputPhone.val();
      var isValid;
      if (!/^1\d{10}$/.test(inputPhoneVal)) {
        if (isNaN(inputPhoneVal) || (type == 1 && inputPhoneVal.length >= 11) || type == 2) {
          me.showError('phone');
        }
        me.verifyBtn.addClass('disabled');
        isValid = 0;
      } else {
        me.hideError('phone');
        if (!loading.isBusy(me.verifyBtn)) {
          me.verifyBtn.removeClass('disabled');
        }
        isValid = 1;
      }
      me.emit("mobilevalid", isValid, inputPhoneVal);
      return isValid;
    }
  },

  /**
   *其他号码显示隐藏
   * @param val 点击的checkbox值
   * @private
   */
  _modifyPhoneToggleShow: function (val) {
    $("." + this.classPrefix + "-modifyphone")[val == 0 ? 'show' : 'hide']();
  },

  /**
   * 发送手机号码
   * @private
   */
  _sendCode: function () {
    var me = this;
    this._hideAllError();
    if (!this._validPhone()) {
      return;
    }
    /**
    * 当检测到有极验组件在的时候，
     * 就需要验证及验证验证码
    * */
    if(me.captchable) {
         me.captchable.verify();
    }else{
        var data = {
          umobile:me.modifyphone.val(),
          ltype:me.mode,
          zbj_csrf_token:me.csrfInput.val()
        };
        me.send(data)
    }
  },

  /**
   * 发送手机验证码
   * @param mobile 手机号码
   * @param mode  当mode为 0 时，如果该手机号码关联了账号则直接登录，不存在关联的账号信息则会注册一个猪八戒账号并登录。
   当mode为 1 时，如果不存在账号信息则不会注册猪八戒账号。
   * @returns {*}
   * 在未登录情况下返回register=1,时展示请同意用户协议文案
   */
  send: function (data) {
    var dtd = $.Deferred(); // 生成Deferred对象
    var me = this;
    var sendUrl;
    if (cookie.get('userid')) {
      sendUrl = getLoginUrl("/quickreg/SendPhoneCode?fr=1")
    } else {
      sendUrl = getLoginUrl("/quickreg/SendGCode?fr=1");
    }
    me.emit("beforesend");
    $.ajax({
      dataType: "crossdomain",
      url: sendUrl,
      type: "post",
      xhrFields: {
        withCredentials: true
      },
      data: data,
      success: function (json) {
        me.emit("sendcomplete", [json]);
        if (json.success) {
          loading.start(me.verifyBtn, {
            countingdown: 1
          });
          me.csrfInput.val(json.qr_token);
          me.element.find('input[name="vid"]').val(json.vid);
          //如果返回的register=1,需要提示用户协议,这句话不能省。。
          json.register==1 && me.showError('agreement', json.msg);
          dtd.resolve();
        } else if (json.code == -4) { //需要校验图片验证码
           if (!me.captchable) {
                me.initCaptchable();
           } else {
             me.showError('phone', json.msg);
             //验证失败重置极验
             setTimeout(function () {
               me.captchable.reset();
             },2000)
          }
          dtd.reject();
          me.emit("sendfailure", [json.msg]);
        } else {
          if(me.captchable){
            setTimeout(function () {
              me.captchable.reset();
            },2000)
          }
          me.showError('phone', json.msg);
          dtd.reject();
          me.emit("sendfailure", [json.msg]);
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        // 通常 textStatus 和 errorThrown 之中
        // 只有一个会包含信息

      }
    });
    return dtd;
  },
  /**
  * 初始化极验验证码
  * */
  initCaptchable:function(){
    /**
     * 减少请求量，当且仅当页面没有极验验证码，并且code为-4
     * 初始化极验验证码并且给出极验一次验证成功和失败的回调方法
     * */
    var me = this;
    me.captchable = new Captchable({
      product: "bind",
      gt_type: 'quickreg'
    });
    me.captchable.on("ready",function(captchaObj){
      /**
       * 验证码错误，trigger一下重新获取验证码，
       * 并验证极验验证码
       * */
      me.verifyBtn.trigger('click');
    });
    //极验一次验证成功的回调方法
    me.captchable.on('success',function(captchaObj){
      var data = me.captchable.getValidateData();
      data.umobile = me.modifyphone.val();
      data.ltype = me.mode;
      data.zbj_csrf_token = me.csrfInput.val();
      data.gt_type = "quickreg";
      me.send(data);
      me.emit('jySuccess',[me.captchable.validateObj]);
    });
    //极验一次验证失败的回调方法
    me.captchable.on('error',function(obj){
      me.emit("invalid", "cap", "获取图片验证码接口错误");
      me.showError('phone', obj.msg);
    });
  },
  /**
   * 隐藏所有错误提示信息
   * @private
   */
  _hideAllError: function () {
    this.hideError('phone');
    this.hideError('verify');
    this.hideError('agreement');
  },

  /**
   * 其他号码表单验证
   * @returns {boolean} 验证结果 true：验证通过 false：验证失败
   */
  valid: function () {
    var me = this;
    var selectedPhone = this.element.find("input[name="+me.radioname+"]:checked").val();
    if (selectedPhone == 0 || this.element.find("input[name="+me.radioname+"]").size() == 0) {
      if (!this._validPhone()) {
        return false;
      } else if (!this._validYzm()) {
        return false;
      } 
    }
    return true;
  },

  /**
   * 验证手机号码输入框
   * @returns {boolean}验证结果 true：验证通过 false：验证失败
   * @private
   */
  _validPhone: function () {
    var mobile_reg = /^1\d{10}$/;
    var phone = this.element.find("input[name='modifyphone']");
    if (!mobile_reg.test(phone.val())) {
      this.emit("invalid", ["phone", "请输入正确的手机号"]);
      this.showError("phone", "请输入正确的手机号");
      return false;
    }
    return true;
  },

  /**
   * 验证手机验证码输入框
   * @returns {boolean}验证结果 true：验证通过 false：验证失败
   * @private
   */
  _validYzm: function () {
    var yzm = this.yzm = this.element.find("input[name='modifyphone-yzm']");
    if (yzm.val().length == 0) {
      this.emit("invalid", ["verify", "请输入验证码"]);
      this.showError("verify", "请输入验证码");
      return false;
    }
    return true;
  },
  /**
   * 快速登录
   * @param cb 回调函数
   */
  login: function (cb) {
    var url;
    var phoneInput = this.element.find('input[name="modifyphone"]');
    var me = this;
    var mode = me.mode;
    var check_phone = me.element.find("input[name="+me.radioname+"]:checked");
    this._hideAllError();
    if (check_phone.val() == 0 || me.element.find("input[name="+me.radioname+"]").size() == 0) { //选择的是使用其他号码
      if (!me.valid()) {
        return;
      }
    } else { //如果选择的是业务方传的已绑定的号码
      me.phone.val(check_phone.val());
      cb && cb();
      return;
    }
    var loginParam = {};
    if (cookie.get('userid')) {
      url = getLoginUrl("/quickreg/VerifyPhoneVCode?fr=1"); //校验手机号
      //接口参数
      loginParam = {
        umobile: me.modifyphone.val(),
        ltype: mode,
        zbj_csrf_token: me.csrfInput.val(),
        vcode: me.yzm.val(),
        vid: me.element.find('input[name="vid"]').val()
      }
    } else {
      url = getLoginUrl("/quickreg/LoginVerify?fr=1"); //快速登录
      //手机号码
      var mobile = phoneInput.val().replace(/^\s*|\s$/, '');

      var staticData = referStatistics.getStatisticsData('Obj');

      //统计数据
      var unionData  = "pmcode="+staticData.pmcode + "&" +
          "first_page=" + encodeURIComponent(staticData.first_page) + "&" +
          "referer=" + encodeURIComponent(staticData.referer) + "&" +
          "pub_page=" + encodeURIComponent(window.location.href);

      //雇主or服务商
      var intention = this.root.find('input[name="user_intention"]');
      //当前来源
      var wayType = this.root.find('input[name="way_type"]');
      //当前页面地址
      var urlInput = this.root.find('input[name="url"]');
      /**
      * 接口参数
       * @param souceId:用于统计从哪个登录注册成功的标识
      * */
      loginParam = {
        umobile: me.modifyphone.val(),
        ltype: mode,
        zbj_csrf_token: me.csrfInput.val(),
        vcode: me.yzm.val(),
        mobile: mobile,
        union: unionData,
        sourceId:1,
        url: me.url || urlInput && urlInput.val() || window.location.href,
        user_intention: me.userIntention || intention && intention.val() || '',
        way_type: me.wayType || wayType && wayType.val() || ''
      };
      /**
      * way_type为必传字段，需要找产品申请@yiweia
      * */
      if(loginParam.way_type.length == 0){
        this.showError("phone", "way_type不能为空！");
        return;
      };
    }

    me.emit("beforelogin");
    /**
     * 进行快速登录或注册,已登录用户只进行手机校验
     */
    $.ajax({
      dataType: "crossdomain",
      url: url,
      type: "post",
      xhrFields: {
        withCredentials: true
      },
      async:me.loginAsync,
      data: loginParam,
      success: function (json) {
        me.emit("logincomplete", [json]);
        if (json.success) {
          
          /*修复发布流程第二步短信验证失效的问题
           * */
          if(isPubStep2()){
            var existsphone = $('#exists_phone_input');
            var myphone = $("input[name=modifyphone]").val();
            $(".j-exists-phone-span").html(myphone);
            existsphone.val(myphone);
            $("input[name=phone]").val(myphone);
            me.element.find(".unstyled").show();
            existsphone.trigger("click");
          }

          me.phone.val(phoneInput.val());
          cb && cb(json);
        } else {
          if(me.captchable){
            setTimeout(function () {
              me.captchable.reset();
            },2000);
          };
          me.emit("loginfailure", [json.msg]);
          me.showError('verify', json.msg);
        }
      }
    })

  },

  /**
   * 显示错误
   * @param type 错误类型 phone:手机号码 verify:手机验证码
   * @param msg 错误信息
   */
  showError: function (type, msg) {
    var root = this.element;
    if (type == 'phone') {
      !msg && (msg = '请输入正确的手机号');
    }
    root
      .find('.j-' + type + '-error')
      .show()
      .find('.j-error-tip')
      .html(msg);

    this.emit('error', msg);
  },

  /**
   * 隐藏错误
   * @param type 错误类型 phone:手机号码 verify:手机验证码
   */
  hideError: function (type) {
    var root = this.element;
    root
      .find('.j-' + type + '-error')
      .hide();
  }
});

function getLoginUrl (path) {
  return  "https://login." + ZBJInfo.baseURI + path;
}
/**
   * 是否发布流程第二步
   */
function isPubStep2() {
    var locationHref=window.location.href;
    if(locationHref.indexOf("/pub/step2-category-")!=-1){
        return true;
    }else{
        return false;
    }
}
module.exports = QuickLogin;