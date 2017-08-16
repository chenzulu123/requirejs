//定义模块
define(function (deps) {
    var prodectCount = 1000;
    //定义的模块提供接口
    return {
        getCount: function () {
            return prodectCount;
        }
    }
});