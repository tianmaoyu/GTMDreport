(function ($) {
    //折叠布局面板时显示标题
    $.extend($.fn.layout.paneldefaults, {
        onBeforeCollapse: function () {
            var $this = $(this);
            var panel = $this.panel('options');
            var region = panel.region;
            var title = getTitle();
            var layoutExpand = $('.layout-button-' + convert(region)).closest('.layout-expand');
            if (region == "east" || region == "west") {
                title = !title ? '' : title;
                title = title.split('').join('<br/>');
                format(layoutExpand.find('.panel-body').html(title));
            } else {
                format(layoutExpand.find('.panel-title').html(title));
            }

            //转换区域
            function convert(r) {
                switch (r) {
                    case 'north':
                        return 'down';
                    case 'south':
                        return 'up';
                    case 'east':
                        return 'left';
                    case 'west':
                        return 'right';
                }
                return false;
            }

            //获取折叠标题
            function getTitle() {
                var result = $this.attr("CollapseTitle");
                if (result)
                    return result;
                return panel.title;
            }

            //格式化
            function format(node) {
                node.css({
                    textAlign: getPosition(),
                    lineHeight: '18px',
                    fontWeight: 'bold'
                });
            }

            //获取折叠标题位置
            function getPosition() {
                var result = $this.attr("CollapseTitlePosition");
                if (result)
                    return result;
                return 'center';
            }
        }
    });

    $.extend($.fn.validatebox.defaults.rules, {
        //扩展最小长度验证
        minLength: {
            validator: function (value, param) {
                return value.length >= param[0];
            },
            message: '该项的最小长度为{0}位'
        },
        //扩展最大长度验证
        maxLength: {
            validator: function (value, param) {
                return value.length <= param[0];
            },
            message: '该项的最大长度为{0}位'
        },
        //扩展相等验证
        equalTo: {
            validator: function (value, param) {
                if (param[1])
                    $.fn.validatebox.defaults.rules.equalTo.message = param[1];
                return value == $("#" + param[0]).val();
            },
            message: "您的两次输入不一致"
        },
        //扩展最大值验证
        max: {
            validator: function (value, param) {
                if (param[1])
                    $.fn.validatebox.defaults.rules.max.message = param[1];
                return $.toNumber(value) <= $.toNumber(param[0]);
            },
            message: "该项不能超过{0}"
        },
        //扩展最小值验证
        min: {
            validator: function (value, param) {
                if (param[1])
                    $.fn.validatebox.defaults.rules.min.message = param[1];
                return $.toNumber(value) >= $.toNumber(param[0]);
            },
            message: "该项不能小于{0}"
        },
        //扩展数值范围验证
        range: {
            validator: function (value, param) {
                if (param[2])
                    $.fn.validatebox.defaults.rules.range.message = param[2];
                return $.toNumber(value) >= $.toNumber(param[0]) && $.toNumber(value) <= $.toNumber(param[1]);
            },
            message: "请输入{0}-{1}之间的数值"
        },
        //扩展下拉框选中值验证
        selectValueRequired: {
            validator: function (value, param) {
                return value > 0 || value.indexOf('请选择') == -1;
            },
            message: "该下拉框必须填写"
        },
        mobilePhone: {
            validator: function (value, param) {
                var pattern = /^1[3|4|5|7|8|][0-9]{9}$/;
                return pattern.test(value);
            },
            message: "请输入有效的手机号"
        },
        md: {
            validator: function (value, param) {
                var startTime = $(param[0]).datetimebox('getValue');
                return value >= startTime;
            },
            message: '结束时间要大于开始时间'
        }
    });

    //扩展远程验证,解决自定义消息的问题
    $.extend($.fn.validatebox.defaults.rules.remote, {
        validator: function (value, param) {
            var data = {};
            data[param[1]] = value;
            xt.ajax(param[0], data, {
                type: "get",
                success: function (json) {
                    if(!json.success) $.fn.validatebox.defaults.rules.remote.message = json.message;
                    return json.success;
                }
            });
        }
    });

    $.fn.datebox.defaults.buttons.push({
        text: '清空',
        handler: function (target) {
            $(target).datebox("clear");
        }
    });

    /*easyui datebox 日期格式化处理*/
    $.fn.datebox.defaults.formatter = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
    };
    $.fn.datebox.defaults.parser = function (s) {
        if (!s) return new Date();
        var ss;
        if (s.indexOf("-") > -1) {
            ss = s.split('-');
        } else {
            ss = s.split('/');
        }
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        } else {
            return new Date();
        }
    };

    $.fn.datagrid.defaults.onLoadError = function () {
        xt._error(arguments[0], arguments[1], arguments[2]);
    }

    $.fn.panel.defaults.onLoadError = function () {
        xt._error(arguments[0], arguments[1], arguments[2]);
    }

    $.fn.layout.paneldefaults.onLoadError = function () {
        xt._error(arguments[0], arguments[1], arguments[2]);
    }

    /**
     * add by cgh  
     * 针对panel window dialog三个组件调整大小时会超出父级元素的修正  
     * 如果父级元素的overflow属性为hidden，则修复上下左右个方向  
     * 如果父级元素的overflow属性为非hidden，则只修复上左两个方向  
     * @param width  
     * @param height  
     * @returns  
     */
    var easyuiPanelOnResize = function (width, height) {
        if (!$.data(this, 'window') && !$.data(this, 'dialog'))
            return;

        if (browser.ie && browser.version === 8) {
            var data = $.data(this, "window") || $.data(this, "dialog");
            if (data.pmask) {
                var masks = data.window.nextAll('.window-proxy-mask');
                if (masks.length > 1) {
                    $(masks[1]).remove();
                    masks[1] = null;
                }
            }
        }
        if ($(this).panel('options').maximized == true) {
            $(this).panel('options').fit = false;
        }
        $(this).panel('options').reSizing = true;
        if (!$(this).panel('options').reSizeNum) {
            $(this).panel('options').reSizeNum = 1;
        } else {
            $(this).panel('options').reSizeNum++;
        }
        var parentObj = $(this).panel('panel').parent();
        var left = $(this).panel('panel').position().left;
        var top = $(this).panel('panel').position().top;

        if ($(this).panel('panel').offset().left < 0) {
            $(this).panel('move', {
                left: 0
            });
        }
        if ($(this).panel('panel').offset().top < 0) {
            $(this).panel('move', {
                top: 0
            });
        }

        if (left < 0) {
            $(this).panel('move', {
                left: 0
            }).panel('resize', {
                width: width + left
            });
        }
        if (top < 0) {
            $(this).panel('move', {
                top: 0
            }).panel('resize', {
                height: height + top
            });
        }
        if (parentObj.css("overflow") == "hidden") {
            var inline = $.data(this, "window").options.inline;
            if (inline == false) {
                parentObj = $(window);
            }

            if ((width + left > parentObj.width())
                    && $(this).panel('options').reSizeNum > 1) {
                $(this).panel('resize', {
                    width: parentObj.width() - left
                });
            }

            if ((height + top > parentObj.height())
                    && $(this).panel('options').reSizeNum > 1) {
                $(this).panel('resize', {
                    height: parentObj.height() - top
                });
            }
        }
        $(this).panel('options').reSizing = false;
    };
    /**
     * add by cgh  
     * 针对panel window dialog三个组件拖动时会超出父级元素的修正  
     * 如果父级元素的overflow属性为hidden，则修复上下左右个方向  
     * 如果父级元素的overflow属性为非hidden，则只修复上左两个方向  
     * @param left  
     * @param top  
     * @returns  
     */
    var easyuiPanelOnMove = function (left, top) {
        if ($(this).panel('options').reSizing)
            return;
        var parentObj = $(this).panel('panel').parent();
        var width = $(this).panel('options').width;
        var height = $(this).panel('options').height;
        var right = left + width;
        var buttom = top + height;
        var parentWidth = parentObj.width();
        var parentHeight = parentObj.height();

        if (left < 0) {
            $(this).panel('move', {
                left: 0
            });
        }
        if (top < 0) {
            $(this).panel('move', {
                top: 0
            });
        }

        if (parentObj.css("overflow") == "hidden") {
            var inline = $.data(this, "window").options.inline;
            if (inline == false) {
                parentObj = $(window);
            }
            if (left > parentObj.width() - width) {
                $(this).panel('move', {
                    "left": parentObj.width() - width
                });
            }
            if (top > parentObj.height() - height) {
                $(this).panel('move', {
                    "top": parentObj.height() - height
                });
            }
        }
    };

    $.fn.window.defaults.onResize = easyuiPanelOnResize;
    $.fn.dialog.defaults.onResize = easyuiPanelOnResize;
    $.fn.window.defaults.onMove = easyuiPanelOnMove;
    $.fn.dialog.defaults.onMove = easyuiPanelOnMove;
})(jQuery);

