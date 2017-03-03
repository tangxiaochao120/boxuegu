define([],{

    //获取指定字符串
    getQueryString: function (key) {
        //去掉首字母 ？
        var search = location.search.slice(1);
        //使用&符号得到每一个key=val
        var searchArr = search.split('&');
        var tempArr = null;
        var searchObj = {};
        //遍历数组中的每一个key=val字符串，使用=号劈开
        //然后以key为名，val为值，添加到searchObj对象中

        for (var i = 0,len=searchArr.length;i<len;i++){
            tempArr = searchArr[i].split('=');
            searchObj[tempArr[0]]=tempArr[1];
        };
        //有参数就返回指定的值，没有参数就返回全部的值
        return arguments.length?searchObj[key]:searchObj;
    }


})