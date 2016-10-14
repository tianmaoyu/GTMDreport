//判断是否包含
String.prototype.contains = function (value) {
    if (!value)
        return false;
    return this.toLowerCase().indexOf(value.toLowerCase()) != -1;
}
//判断起始匹配
String.prototype.startsWith = function (value) {
    if (!value)
        return false;
    return new RegExp("^" + value.toLowerCase()).test(this.toLowerCase());
}
//判断结束匹配
String.prototype.endsWith = function (value) {
    if (!value)
        return false;
    return new RegExp(value.toLowerCase() + "$").test(this.toLowerCase());
}
//从起始位置开始截断
String.prototype.trimStart = function (value) {
    value = ("(" + value + ")");
    return this.replace(new RegExp("^" + value + "*", "g"), "");
};
//时间格式化
Date.prototype.format = function (format) {
    if (!format) {
        format = "yyyy-MM-dd hh:mm:ss";
    }

    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "h+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds() // millisecond
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }

    return format;
};

if (!Array.prototype.filter) {
    ///	<summary>
    ///	把符合条件的元素放到一个新数组中返回。
    ///	</summary>
    Array.prototype.filter = function (fun /*, thisp*/) {
        var len = this.length;
        if (typeof fun != "function")
            throw new TypeError();
        var res = new Array();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this) {
                var val = this[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, this))
                    res.push(val);
            }
        }
        return res;
    };
}
if (!Array.prototype.map) {
    ///	<summary>
    ///	让数组中的每一个元素调用给定的函数，然后把得到的结果放到新数组中返回。
    ///	</summary>
    Array.prototype.map = function (fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i = 0, j = this.length; i < j; ++i) {
            a.push(fn.call(scope, this[i], i, this));
        }
        return a;
    };
}
if (!Array.prototype.forEach) {
    ///	<summary>
    ///	让数组中的每一个元素调用给定的函数，然后把得到的结果放到新数组中返回。
    ///	</summary>
    Array.prototype.forEach = function (fn, thisObj) {
        var scope = thisObj || window;
        for (var i = 0, j = this.length; i < j; ++i) {
            fn.call(scope, this[i], i, this);
        }
    };
}
Array.prototype.contains = function (item) {
    ///	<summary>
    ///	数组是否包含指定元素。
    ///	</summary>
    return $.inArray(item, this) != -1;
}
Array.prototype.unique = function () {
    ///	<summary>
    ///	移除数组重复值。
    ///	</summary>
    var res = [], hash = {};
    for (var i = 0, elem; (elem = this[i]) != null; i++) {
        if (!hash[elem]) {
            res.push(elem);
            hash[elem] = true;
        }
    }
    return res;
}
Array.prototype.remove = function (item) {
    ///	<summary>
    ///	移除数组指定元素。
    ///	</summary>
    var index = $.inArray(item, this);
    if (index == -1)
        return;
    this.splice(index, 1);
    return this;
}

var xt = {
    debug: false,
    ajax: function (url, data, args) {
        var context = this;
        if (context.debug) {
            if ($.isFunction(args.success)) {
                return args.success($.parseJSON("{\"success\":true}", data));
            }
        }
        if (!args) args = {};
        $.ajax({
            url: url,
            type: args.type || "post",
            datatype: args.datatype || "json",
            //contentType: "application/json;charset=utf-8",
            data: data || {},
            cache: false,
            async: false,
            beforeSend: function (xhr) {
                if ($.isFunction(args.beforeSend)) {
                    return args.beforeSend();
                } else {
                    $.easyui.showLoading();
                }
            },
            success: function (json) {
                if ($.isFunction(args.success)) {
                    return args.success(json, data);
                }
            },
            complete: function (httpRequest, textStatus) {
                if ($.isFunction(args.complete)) {
                    return args.complete(httpRequest, textStatus);
                } else {
                    $.easyui.removeLoading();
                }
            },
            error: function (httpRequest, textStatus, errorThrown) {
                return context._error(httpRequest, textStatus, errorThrown, args.error);
            }
        });
    },
    _error: function (httpRequest, textStatus, errorThrown, callback) {
        var context = this,
            options;
        if (textStatus === "error") {
            var response,
                msg = "未知的请求错误";
            switch (httpRequest.status) {
                case 500:
                case 501:
                    if ($.isJson(httpRequest.responseText)) {
                        response = $.parseJSON(httpRequest.responseText);
                        options = { msg: response.message, top: !!response.url, url: response.url };
                    }
                    break;
                case 503:
                    msg = "服务器正在升级中，请稍后再试";
                    break;
                case 404:
                    msg = "您访问的页面不存在";
                    break;
            }
            if ($.isFunction(callback)) {
                return callback(msg);
            } else {
                context.alert(options || { msg: msg });
            }
        }
    },
    alert: $.noop,
    _sizes: ['Bytes', 'KB', 'MB', 'GB', 'TB'],
    bytesToSize: function (bytes, toFixed) {
        if (bytes == 0) return 0;
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if (toFixed) {
            return (bytes / Math.pow(1024, i)).toFixed(toFixed) + ' ' + this._sizes[i];
        }
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + this._sizes[i];
    },
    log: function (msg) {
        if (window.console && window.console.log)
            window.console.log('[info]' + msg);
        else if (window.opera && window.opera.postError)
            window.opera.postError('[info]' + msg);
    }
};

var browser = function () {
    var agent = navigator.userAgent.toLowerCase(),
        isIE = !!window.ActiveXObject,
        opera = window.opera,
        browser = {
            /**
             * @property {boolean} ie 检测当前浏览器是否为IE
             * @example
             * ```javascript
             * if ( UE.browser.ie ) {
             *     console.log( '当前浏览器是IE' );
             * }
             * ```
             */
            ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent),

            /**
             * @property {boolean} opera 检测当前浏览器是否为Opera
             * @example
             * ```javascript
             * if ( UE.browser.opera ) {
             *     console.log( '当前浏览器是Opera' );
             * }
             * ```
             */
            opera: (!!opera && opera.version),

            /**
             * @property {boolean} webkit 检测当前浏览器是否是webkit内核的浏览器
             * @example
             * ```javascript
             * if ( UE.browser.webkit ) {
             *     console.log( '当前浏览器是webkit内核浏览器' );
             * }
             * ```
             */
            webkit: (agent.indexOf(' applewebkit/') > -1),

            /**
             * @property {boolean} mac 检测当前浏览器是否是运行在mac平台下
             * @example
             * ```javascript
             * if ( UE.browser.mac ) {
             *     console.log( '当前浏览器运行在mac平台下' );
             * }
             * ```
             */
            mac: (agent.indexOf('macintosh') > -1),

            /**
             * @property {boolean} quirks 检测当前浏览器是否处于“怪异模式”下
             * @example
             * ```javascript
             * if ( UE.browser.quirks ) {
             *     console.log( '当前浏览器运行处于“怪异模式”' );
             * }
             * ```
             */
            quirks: (document.compatMode == 'BackCompat')
        };

    /**
    * @property {boolean} gecko 检测当前浏览器内核是否是gecko内核
    * @example
    * ```javascript
    * if ( UE.browser.gecko ) {
    *     console.log( '当前浏览器内核是gecko内核' );
    * }
    * ```
    */
    browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

    var version = 0;

    // Internet Explorer 6.0+
    if (browser.ie) {

        var v1 = agent.match(/(?:msie\s([\w.]+))/);
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
        if (v1 && v2 && v1[1] && v2[1]) {
            version = Math.max(v1[1] * 1, v2[1] * 1);
        } else if (v1 && v1[1]) {
            version = v1[1] * 1;
        } else if (v2 && v2[1]) {
            version = v2[1] * 1;
        } else {
            version = 0;
        }

        browser.ie11Compat = document.documentMode == 11;
        /**
         * @property { boolean } ie9Compat 检测浏览器模式是否为 IE9 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie9Compat ) {
         *     console.log( '当前浏览器运行在IE9兼容模式下' );
         * }
         * ```
         */
        browser.ie9Compat = document.documentMode == 9;

        /**
         * @property { boolean } ie8 检测浏览器是否是IE8浏览器
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie8 ) {
         *     console.log( '当前浏览器是IE8浏览器' );
         * }
         * ```
         */
        browser.ie8 = !!document.documentMode;

        /**
         * @property { boolean } ie8Compat 检测浏览器模式是否为 IE8 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie8Compat ) {
         *     console.log( '当前浏览器运行在IE8兼容模式下' );
         * }
         * ```
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * @property { boolean } ie7Compat 检测浏览器模式是否为 IE7 兼容模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie7Compat ) {
         *     console.log( '当前浏览器运行在IE7兼容模式下' );
         * }
         * ```
         */
        browser.ie7Compat = ((version == 7 && !document.documentMode)
                || document.documentMode == 7);

        /**
         * @property { boolean } ie6Compat 检测浏览器模式是否为 IE6 模式 或者怪异模式
         * @warning 如果浏览器不是IE， 则该值为undefined
         * @example
         * ```javascript
         * if ( UE.browser.ie6Compat ) {
         *     console.log( '当前浏览器运行在IE6模式或者怪异模式下' );
         * }
         * ```
         */
        browser.ie6Compat = (version < 7 || browser.quirks);

        browser.ie9above = version > 8;

        browser.ie9below = version < 9;

        browser.ie11above = version > 10;

        browser.ie11below = version < 11;

    }

    // Gecko.
    if (browser.gecko) {
        var geckoRelease = agent.match(/rv:([\d\.]+)/);
        if (geckoRelease) {
            geckoRelease = geckoRelease[1].split('.');
            version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
        }
    }

    /**
     * @property { Number } chrome 检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号
     * @warning 如果浏览器不是chrome， 则该值为undefined
     * @example
     * ```javascript
     * if ( UE.browser.chrome ) {
     *     console.log( '当前浏览器是Chrome' );
     * }
     * ```
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = +RegExp['\x241'];
    }

    /**
     * @property { Number } safari 检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号
     * @warning 如果浏览器不是safari， 则该值为undefined
     * @example
     * ```javascript
     * if ( UE.browser.safari ) {
     *     console.log( '当前浏览器是Safari' );
     * }
     * ```
     */
    if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
        browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if (browser.opera)
        version = parseFloat(opera.version());

    // WebKit 522+ (Safari 3+)
    if (browser.webkit)
        version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);

    /**
     * @property { Number } version 检测当前浏览器版本号
     * @remind
     * <ul>
     *     <li>IE系列返回值为5,6,7,8,9,10等</li>
     *     <li>gecko系列会返回10900，158900等</li>
     *     <li>webkit系列会返回其build号 (如 522等)</li>
     * </ul>
     * @example
     * ```javascript
     * console.log( '当前浏览器版本号是： ' + UE.browser.version );
     * ```
     */
    browser.version = version;

    /**
     * @property { boolean } isCompatible 检测当前浏览器是否能够与UEditor良好兼容
     * @example
     * ```javascript
     * if ( UE.browser.isCompatible ) {
     *     console.log( '浏览器与UEditor能够良好兼容' );
     * }
     * ```
     */
    browser.isCompatible =
        !browser.mobile && (
        (browser.ie && version >= 6) ||
        (browser.gecko && version >= 10801) ||
        (browser.opera && version >= 9.5) ||
        (browser.air && version >= 1) ||
        (browser.webkit && version >= 522) ||
        false);
    return browser;
}();

//全局捕获Ajax异常信息
$.ajaxSetup({
    error: function (httpRequest, textStatus, errorThrown) {
        xt._error(httpRequest, textStatus, errorThrown);
    }
});

(function ($) {
    //获取Url中的路径部分
    $.getUrlPath = function (url) {
        return url.trimStart(window.location.protocol + "//" + window.location.host);
    }
    $.joinUrl = function (url, param) {
        ///	<summary>
        ///	连接url与参数
        ///	</summary>
        ///	<param name="url" type="String">
        ///	 Url
        ///	</param>
        ///	<param name="param" type="String">
        ///	 参数
        ///	</param>
        ///	<returns type="String" />
        if (url) {
            if (url.contains("?"))
                return url + "&" + param;
            return url + "?" + param;
        }
    }
    $.newGuid = function (separator) {
        ///	<summary>
        ///	生成Guid
        ///	</summary>
        ///	<param name="separator" type="Object">
        ///	 分隔符，默认为"-"
        ///	</param>
        ///	<returns type="String" />
        if (separator === undefined)
            separator = "-";
        if (separator == null)
            separator = "";
        var section = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (section() + section() + separator + section() + separator + section() + separator + section() + separator + section() + section() + section()).toString();
    }
    $.toNumber = function (value, precision, isTruncate) {
        ///	<summary>
        ///	数值转换
        ///	</summary>
        ///	<param name="value" type="Object">
        ///	 输入值，一般为字符串
        ///	</param>
        ///	<param name="precision" type="int">
        ///	 数值精度，即小数位数，可选值为0-20
        ///	</param>
        ///	<param name="isTruncate" type="bool">
        ///	 是否截断，传入true，则按精度截断，否则四舍五入
        ///	</param>
        ///	<returns type="Number" />
        if (!$.isNumeric(value))
            return 0;
        if (!isTruncate && (precision === undefined || precision === null))
            return parseFloat(value);
        var result;
        if (isTruncate === true) {
            result = value.substring(0, value.indexOf(".") + parseInt(precision) + 1);
            return parseFloat(result);
        }
        return parseFloat(parseFloat(value).toFixed(precision));
    }
    $.isNumber = function (value) {
        ///	<summary>
        ///	判断是否Number类型
        ///	</summary>
        ///	<param name="value" type="Object">
        ///	 数值
        ///	</param>
        ///	<returns type="bool" />
        return typeof value === "number";
    }
    $.isObject = function (value) {
        ///	<summary>
        ///	判断是否对象类型
        ///	</summary>
        return typeof value === "object";
    }
    $.toJsonObject = function (data) {
        ///	<summary>
        ///	将字符串转换为Json对象
        ///	</summary>
        try {
            if ($.type(data) !== 'string')
                return data;
            return eval('(' + data + ')');
        } catch (e) {
            return {};
        }
    }
    $.isEmptyArray = function (value) {
        ///	<summary>
        ///	判断是否为空数组[]
        ///	</summary>
        ///	<param name="value" type="Object">
        ///	 数组
        ///	</param>
        ///	<returns type="bool" />
        return $.isArray(value) && value.length === 0;
    }
    $.formatDate = function (str) {
        ///	<summary>
        ///	格式化日期成 yyyy-MM-dd
        ///	</summary>
        ///	<param name="str" type="String">
        ///	 日期
        ///	</param>
        if (str) {
            return (new Date(parseInt(str.substring(str.indexOf('(') + 1, str.indexOf(')'))))).format("yyyy-MM-dd");
        } else {
            return "";
        }
    },
    $.formatDateTime = function (str) {
        ///	<summary>
        ///	格式化日期成 yyyy-MM-dd hh:mm:ss
        ///	</summary>
        ///	<param name="str" type="String">
        ///	 日期
        ///	</param>
        if (str) {
            return (new Date(parseInt(str.substring(str.indexOf('(') + 1, str.indexOf(')'))))).format("yyyy-MM-dd hh:mm:ss");
        } else {
            return "";
        }
    },
    $.fn.serializeJson = function () {
        ///	<summary>
        ///	将表单序列化为json
        ///	</summary>
        var result = {};
        var array = this.serializeArray();
        $(array).each(function () {
            if (result[this.name]) {
                if ($.isArray(result[this.name])) {
                    result[this.name].push(this.value);
                } else {
                    result[this.name] = [result[this.name], this.value];
                }
            } else {
                result[this.name] = this.value;
            }
        });
        return result;
    }
    $.convertStringToJson = function (option) {
        ///	<summary>
        ///	将形如 id:1,name:'test' 转化为 json 对象。
        ///	</summary>
        ///	<param name="option" type="String">
        ///	 id:1,name:'test'
        ///	</param>
        ///	<returns type="object" />
        var dataOptions = $.trim(option);
        if (dataOptions) {
            if (dataOptions.substring(0, 1) != '{') {
                dataOptions = '{' + dataOptions + '}';
            }
            return (new Function('return' + dataOptions))();
        }
        return dataOptions;
    }
    $.isJson = function (value) {
        return value && value.indexOf("{") > -1 && value.lastIndexOf("}") > -1;
    }
    $.formatString = function () {
        ///	<summary>
        ///	格式化字符串，像C# format 一样，formatString('Hello {0}','World') = 'Hello World'。
        ///	</summary>
        if (arguments.length < 1) {
            return null;
        }

        var str = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            var placeHolder = '{' + (i - 1) + '}';
            str = str.replace(placeHolder, arguments[i]);
        }

        return str;
    };
    $.cutString = function (str, len) {
        ///	<summary>
        ///	根据长度截取先使用字符串，超长部分追加…
        ///	</summary>
        ///	<param name="str" type="String">对象字符串</param>
        ///	<param name="len" type="Object">目标字节长度</param>

        //length属性读出来的汉字长度为1
        if (str.length * 2 <= len) {
            return str;
        }
        var strlen = 0;
        var s = "";
        for (var i = 0; i < str.length; i++) {
            s = s + str.charAt(i);
            if (str.charCodeAt(i) > 128) {
                strlen = strlen + 2;
                if (strlen >= len) {
                    return s.substring(0, s.length - 1) + "...";
                }
            } else {
                strlen = strlen + 1;
                if (strlen >= len) {
                    return s.substring(0, s.length - 2) + "...";
                }
            }
        }
        return s;
    };
    $.removeTag = function (str) {
        ///	<summary>
        ///	移除 html 标签
        ///	</summary>
        ///	<param name="str" type="String">字符串</param>
        if (str) str.replace(/<[^>].*?>/g, "");
    };
    $.getUrlParam = function (name) {
	///	<summary>
        ///	获取 Url 参数
        ///	</summary>
        ///	<param name="str" type="String">参数键</param>
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };
    $.getQueryParameters = function () {
	///	<summary>
        ///	获取 Url 参数
        ///	</summary>
        var url = window.location.search;
        var parameters = new Object();
        if (url.indexOf("?") != -1) {
            var query = url.substr(1);
            var ary = query.split("&");
            for (var i = 0; i < ary.length; i++) {
                 var keyValuePair = ary[i].split("=");
                 parameters[keyValuePair[0]] = unescape(keyValuePair[1]);
            }
        }
        return parameters;
    };
})(jQuery);