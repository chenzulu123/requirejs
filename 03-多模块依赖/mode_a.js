//定义模块a的功能
//模块mode_a没有依赖任何模块
define(function () {
    return function () {
        console.log('我是模块a的功能');
    }
});