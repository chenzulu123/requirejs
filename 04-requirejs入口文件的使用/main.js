//入口文件的定义
require(['./mode_b.js'], function (mode_b) {
    document.querySelector('input').onclick = function () {
        //mode_b模块返回的是一个函数，所以这边执行的是一个函数
        mode_b();
    }
});