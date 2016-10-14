(function ($) {
    //显示表单消息
    $.easyui.showFormMessage = function (json, successCallback) {
        if (json.success) {
            $.easyui.topShow(json.message || "操作成功");
            $.isFunction(successCallback) && successCallback();
        } else {
            $.easyui.info(json.message);
        }
    };
    $.easyui.refresh = function (formId, gridId) {
        ///	<summary>
        ///	刷新
        ///	</summary>
        ///	<param name="formId" type="String">
        ///	查询表单Id
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        $.easyui.clearForm($.easyui.getQueryForm(formId));
        $.easyui.query(formId, gridId);
    };
    $.easyui.clearForm = function (formId) {
        ///	<summary>
        ///	清空表单
        ///	</summary>
        ///	<param name="formId" type="String">
        ///	表单Id
        ///	</param>
        if (!$.isObject(formId))
            formId = $('#' + formId);
        formId.form("reset");
    };
    $.easyui.query = function (formId, gridId) {
        ///	<summary>
        ///	查询
        ///	</summary>
        ///	<param name="formId" type="String">
        ///	查询表单Id
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        $.easyui.getGrid(gridId).datagrid({
            pageNumber: 1,
            queryParams: $.easyui.getQueryForm(formId).serializeJson()
        });
    };
    $.easyui.submit = function (fnBefore, fnSuccess, formId) {
        ///	<summary>
        ///	提交更新表单
        ///	</summary>
        ///	<param name="fnBefore" type="Function">
        ///	提交前操作
        ///	</param>
        ///	<param name="fnSuccess" type="Function">
        ///	成功操作
        ///	</param>
        ///	<param name="formId" type="String">
        ///	表单Id
        ///	</param>
        var form = $.easyui.getForm(formId);
        if (!validate())
            return;
        if (!submitBefore())
            return;
        ajaxSubmit();

        //验证表单
        function validate() {
            return form.form('validate');
        }

        //提交前操作
        function submitBefore() {
            if (!fnBefore)
                return true;
            return fnBefore(form);
        }

        //提交
        function ajaxSubmit() {
            var message = form.attr("confirm");
            if (message)
                $.easyui.confirm(message, ajax);
            else
                ajax();
        }

        //发送请求
        function ajax() {
            xt.ajax(form.attr("action"), form.serialize(), {
                success: function (json) {
                    $.easyui.showFormMessage(json, function () {
                        if ($.isFunction(fnSuccess)) {
                            fnSuccess(json, getGridId(), form);
                        } else {
                            var grid = $.easyui.getById(getGridId());
                            grid.length && grid.datagrid('reload');
                        }
                        $.easyui.closeDialog();
                    });
                }
            });
        };

        //获取表格编号
        function getGridId() {
            return form.attr("gridId") || $.easyui.gridId;
        }
    };
    $.easyui.submitByDetail = function (fnBefore, fnSuccess, formId) {
        ///	<summary>
        ///	提交表格行展开的更新表单
        ///	</summary>
        ///	<param name="fnBefore" type="Function">
        ///	提交前操作
        ///	</param>
        ///	<param name="fnSuccess" type="Function">
        ///	成功操作
        ///	</param>
        ///	<param name="formId" type="String">
        ///	表单Id
        ///	</param>
        fnSuccess = fnSuccess || submitSuccess;
        $.easyui.submit(fnBefore, fnSuccess, formId);

        //成功回调函数
        function submitSuccess(result, gridId) {
            $.easyui.getGrid(gridId).datagrid('reload');
        }
    };
    $.easyui.submitByTree = function (fnBefore, fnSuccess, formId, treeId) {
        ///	<summary>
        ///	提交更新表单-树操作，成功刷新树
        ///	</summary>
        ///	<param name="fnBefore" type="Function">
        ///	提交前操作
        ///	</param>
        ///	<param name="fnSuccess" type="Function">
        ///	成功操作
        ///	</param>
        ///	<param name="formId" type="String">
        ///	表单Id
        ///	</param>
        ///	<param name="treeId" type="String">
        ///	树Id
        ///	</param>
        $.easyui.submit(fnBefore, submitSuccess, formId);

        //成功回调函数
        function submitSuccess(result) {
            treeId = treeId || $.easyui.treeId;
            $.easyui.getById(treeId).tree("reload");
            fnSuccess(result);
            $.easyui.closeDialog();
        }
    };
    $.easyui.submitByTreeGrid = function (fnBefore, fnSuccess, formId, gridId) {
        ///	<summary>
        ///	提交更新表单-树表格操作，成功刷新树表格
        ///	</summary>
        ///	<param name="fnBefore" type="Function">
        ///	提交前操作
        ///	</param>
        ///	<param name="fnSuccess" type="Function">
        ///	成功操作
        ///	</param>
        ///	<param name="formId" type="String">
        ///	表单Id
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	树表格Id
        ///	</param>
        $.easyui.submit(fnBefore, submitSuccess, formId);

        //成功回调函数
        function submitSuccess(result) {
            $.isFunction(fnSuccess) && fnSuccess(result);
            $.easyui.getById(gridId || $.easyui.gridId).treegrid("reload");
            $.easyui.closeDialog();
        }
    };
    $.easyui.deleteByUrl = function (url, callback, gridId) {
        ///	<summary>
        ///	删除记录
        ///	</summary>
        ///	<param name="url" type="String">
        ///	删除对应的后台url
        ///	</param>
        ///	<param name="callback" type="Function">
        ///	成功回调函数
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        $.easyui.confirmSubmit(url || $.easyui.deleteUrl, callback, gridId, $.easyui.deleteConfirmMessage);
    };
    $.easyui.submitByUrl = function (url, callback, gridId) {
        ///	<summary>
        ///	执行某个操作
        ///	</summary>
        ///	<param name="url" type="String">
        ///	操作对应的后台url
        ///	</param>
        ///	<param name="callback" type="Function">
        ///	成功回调函数
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        $.easyui.confirmSubmit(url, callback, gridId, null);
    };
    $.easyui.confirmSubmit = function (url, callback, gridId, msg) {
        ///	<summary>
        ///	确认操作
        ///	</summary>
        ///	<param name="url" type="String">
        ///	操作对应的后台url
        ///	</param>
        ///	<param name="callback" type="Function">
        ///	成功回调函数
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        ///	<param name="msg" type="String">
        ///	确认消息
        ///	</param>
        if (!url) {
            $.easyui.info("操作Url未设置，请联系管理员");
            return;
        }
        var grid = $.easyui.getGrid(gridId);
        //获取待操作的记录
        var rows = $.easyui.getRows(grid);
        if ($.isEmptyArray(rows)) {
            $.easyui.info("请选择待操作的记录");
            return;
        }
        if (msg) {
            $.easyui.confirm(msg, ajaxHandler);
        } else {
            ajaxHandler();
        }

        //发送删除请求
        function ajaxHandler() {
            xt.ajax(url, { idList: $.easyui.rowConvert(rows) }, {
                success: function (json) {
                    $.easyui.showFormMessage(json, function () {
                        $.isFunction(callback) && callback(json);
                        grid.datagrid("reload");
                    });
                }
            });
        }
    };
    $.easyui.rowConvert = function (rows, callback) {
        ///	<summary>
        ///	根据行数据，组装成适合向 Mvc 传递的数组参数。
        ///	</summary>
        ///	<param name="rows" type="Object">
        ///	行
        ///	</param>
        ///	<param name="callback" type="Function">
        ///	回调方法
        ///	</param>
        if (!rows)
            return [];
        //var idList = [];
        //$(rows).each(function (i, row) {
        //    idList[i] = row.Id;
        //});
        //return idList;
        return $.map(rows, function (row) {
            if ($.isFunction(callback)) {
                return callback(row);
            } else {
                return row.Id;
            }
        });
    };
    $.easyui.getRows = function (grid) {
        ///	<summary>
        ///	获取选中后的行，当启用复选框则是多个，否则取单个
        ///	</summary>
        ///	<param name="grid" type="String">
        ///	表格编号
        ///	</param>
        var result = grid.datagrid("getChecked");
        if (!$.isEmptyArray(result))
            return result;
        var row = grid.datagrid('getSelected');
        if (!row)
            return result;
        result.push(row);
        return result;
    };
    $.easyui.getSelectedRows = function (grid) {
        ///	<summary>
        ///	获取选中后的行（多个）
        ///	</summary>
        ///	<param name="grid" type="String">
        ///	表格编号
        ///	</param>
        return grid.datagrid('getSelections');
    };
    $.easyui.initDialog = function (options, msg, id) {
        ///	<summary>
        ///	初始化弹出窗口
        ///	</summary>
        ///	<param name="options" type="Object">
        ///	选项
        ///	</param>
        ///	<param name="msg" type="String">
        ///	消息
        ///	</param>
        ///	<param name="id" type="String">
        ///	业务编号
        ///	</param>
        if (!id) {
            $.easyui.info(msg || $.easyui.editNotSelectedMessage);
            return false;
        }
        options.url = $.joinUrl(options.url, "id=" + id);
        return true;
    };
    $.easyui.initDialogByGrid = function (options, msg, gridId) {
        ///	<summary>
        ///	初始化弹出窗口-表格
        ///	</summary>
        ///	<param name="options" type="Object">
        ///	选项
        ///	</param>
        ///	<param name="msg" type="String">
        ///	消息
        ///	</param>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        var row = $.easyui.getGrid(gridId).datagrid('getSelected');
        return $.easyui.initDialog(options, msg, row && row.Id);
    };
    $.easyui.initDialogByTree = function (options, treeId) {
        ///	<summary>
        ///	初始化弹出窗口-树
        ///	</summary>
        ///	<param name="options" type="Object">
        ///	选项
        ///	</param>
        ///	<param name="treeId" type="String">
        ///	树Id
        ///	</param>
        var node = $.easyui.getTree(treeId).tree('getSelected');
        return $.easyui.initDialog(options, $.easyui.editTreeNotSelectedMessage, node && node.id);
    };
    $.easyui.gridRowsToHidden = function (gridId, form, hiddenName) {
        ///	<summary>
        ///	将表格所有行转成JSON字符串，并保存到表单的隐藏域中
        ///	</summary>
        ///	<param name="gridId" type="String">
        ///	表格Id
        ///	</param>
        ///	<param name="form" type="jQuery对象">
        ///	表单jQuery对象
        ///	</param>
        ///	<param name="hiddenName" type="String">
        ///	隐藏域的name
        ///	</param>
        if (!$.easyui.grid.validate(gridId))
            return false;
        var hidden = form.find(":hidden[name='" + hiddenName + "']");
        hidden.val($.easyui.grid.getRowsJson(gridId));
        return true;
    };
    $.easyui.refreshPanel = function (panelId, url) {
        ///	<summary>
        ///	刷新面板
        ///	</summary>
        ///	<param name="panelId" type="String">
        ///	面板Id
        ///	</param>
        $.easyui.getById(panelId).panel("refresh", url);
    };
})(jQuery);

