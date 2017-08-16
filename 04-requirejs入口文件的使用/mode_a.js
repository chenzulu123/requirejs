//定义模块a的功能
//模块mode_a没有依赖任何模块
define(function () {
    //对调用者提供访问的接口，这里通过返回函数的方式
    return function () {
        console.log('我是模块a的功能');
    }
});