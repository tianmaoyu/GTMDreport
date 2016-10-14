//tabs中显示菜单
$(document).ready(function () {
    $(".list-group .list-group-item").on("click", function () {
        var title = $(this).text()
        var id = $(this).attr("id");
        var href = $(this).attr("url")
        var tab = $("#tabs").tabs('getTab', title);
        if (tab == undefined) {
            $("#tabs").tabs('add', {
                closable: true,
                title: title,
                //需要修改Index,'User/UserList'
                href: href,
            })
        }
        else {
            $("#tabs").tabs('select', title);
        }
    });
    //tooltip
    //$('#dd').tooltip({ position: 'bottom',hideDelay:200000, content: '<span style="color:#fff">This is the tooltip message.</span>', onShow: function () { $(this).tooltip('tip').css({ backgroundColor: '#666', borderColor: '#666' }); } });
});