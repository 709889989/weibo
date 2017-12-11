data = {
    client_id : "",
    code : "",
    ec : 0,
    entry : "mweibo",
    hff : "",
    hfp : "",
    loginfrom : "",
    mainpageflag : 1,
    pagerefer : "",
    password : "m123456ASD",
    qq : "",
    r : "",
    savestate : 1,
    username : "18739966859",
    wentry : ""
};




LOGIN = "https://passport.weibo.cn/sso/login"

ajax({
    url: LOGIN,
    type: 'post',
    data: data,
    onsuccess: function (ret) {
        var result = parseJSON(ret);
        if (result.retcode == 20000000) {
            console.log('success');
            that.changeDisabled(false);
            that.addCookie(result.data);
        } else {
            that.dealLoginFail(result);
        }
    }
});

Accept	
*/*
Accept-Encoding	
gzip, deflate, br
Accept-Language	
zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Connection	
keep-alive
Content-Length	
149
Content-Type	
application/x-www-form-urlencoded
Cookie	
_T_WM=24657ee6be74d375ea2249d9…saLim_ynwX4YkA.; H5:PWA:UID=1
Host	
passport.weibo.cn
Referer	
https://passport.weibo.cn/sign…&r=http%3A%2F%2Fm.weibo.cn%2F
User-Agent	
Mozilla/5.0 (Windows NT 6.1; W…) Gecko/20100101 Firefox/58.0