/* 主選單 開始 */
//移除選單的箭頭按鈕
$(document).ready(function () {
    $("#s-lg-tabs-container .nav-tabs>li>a.s-lg-tab-drop").remove();
    $("#s-lg-tabs-container .nav-tabs>li>a").removeClass("s-lg-tab-top-link");
});
/* 主選單 結束 */


/* 開啓選單的按鈕 開始 */
$(document).ready(function () {
    $("body").prepend('<button type="button" class="icon_menu_open"></button>');
    $('.icon_menu_open').on('click', function () {
        $('#s-lg-tabs-container').addClass('open');
    });
});
/* 開啓選單的按鈕 結束 */


/* 關閉選單的按鈕 開始 */
$(document).ready(function () {
    $("#s-lg-tabs-container").prepend('<button type="button" class="icon_menu_close"></button>');
    $('.icon_menu_close').on('click', function () {
        $('#s-lg-tabs-container').removeClass('open');
    });
});
/* 關閉選單的按鈕 結束 */