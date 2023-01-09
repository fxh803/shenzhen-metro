// 伸缩菜单
// 已禁用——图表不能自适应
function ctrlmenu() {
    var menu = document.querySelector("#menu");
    if (menu.offsetLeft == 0) {
        menu.style["margin-left"] = -250 + "px";
    } else {
        menu.style["margin-left"] = 0 + "px";
    }
}


// 确认跳转
function toszmccom() {
    var choise = confirm("前往深圳地铁官网?");
    if (choise == true) {
        window.location.href = "https://www.szmc.net/";
    }
}


// 切换页面
window.onload = function () {
    var content = document.getElementById("content");
    var menu = content.querySelectorAll("#menu a");
    var tabPanel = content.querySelectorAll("#pages .tab-panel");

    for (var i = 0; i < menu.length; i++) {
        menu[i].onclick = (function (i) {
            return function () {
                addCurClass(menu, i);
                addCurClass(tabPanel, i);
            }
        })(i);
    }
};

function addCurClass(obj, idx) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].classList.remove("cur");
    }
    obj[idx].classList.add("cur");
}

