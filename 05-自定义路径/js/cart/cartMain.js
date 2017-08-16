//cartMain模块定义
define(["./cart/cartAdd"], function (cartAdd) {
    return function () {
        console.log('这是购物车的主模块！');
        //使用cartAdd模块
        cartAdd();
    }
});