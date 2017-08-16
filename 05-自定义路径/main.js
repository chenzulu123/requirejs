require.config({
    baseUrl: "./js",//以后找模块的时候都会拿在js文件目录下去寻找模块
    paths: {
        //可以指定特定js的路径和文件夹的路径
        cartMain: "./cart/cartMain",//cartMain的文件路径是baswUrl+paths的路径
        //即./js/cart/cartMain
        //在使用paths配置路径的时候，需要谨慎的使用，不是所有的都需要配置paths路径
        // 需要根据使用场景进行配置，否则会带来副作用
    }
});
require(["cartMain"], function (cartMain) {
    cartMain();
})