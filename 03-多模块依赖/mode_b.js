//模块mode_b依赖了mode_a
define(["./mode_a.js"], function(mode_a) {
    return function(){
        console.log('我是模块mode_b的功能');
        //这里需要使用模块mode_a的功能
        //调用模块mode_b的功能
        mode_a();
    }
});