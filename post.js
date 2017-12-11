var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify(data);
var data = {
    client_id: "",
    code: "",
    ec: 0,
    entry: "mweibo",
    hff: "",
    hfp: "",
    loginfrom: "",
    mainpageflag: 1,
    pagerefer: "",
    password: "m123456ASD",
    qq: "",
    r: "",
    savestate: 1,
    username: "18739966859",
    wentry: ""
};
var options = {
    host: 'www.passport.weibo.cn/sso/login',
    // path: '/sso/login',
    method: 'POST',
    headers: {
        'Accept': '*/*',
        'Accept-Encoding':'gzip, deflate, br',
        'Accept-Language':'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
        'Connection':'keep-alive',
        'Content-Type':'application/x-www-form-urlencoded',
        // 'Cookie':" _T_WM=24657ee6be74d375ea2249d96c6dc3cf; SUB=_2AkMteHa1dcPxrAFVmf8TyGPrbo1H-jyerR9DAn7oJhMyPRh87ko3qSdutBF-XLlb13ihvpBX77fULQ9e6AOEy8AH; SUHB=0d4_NGBU7aAQRr; SCF=AuLE0fO9LzueFksehPNncl0gqaIlJooPGCpoL_O1hmlFpDr9QtJdHnJloY2AOvZ718muImmDksaLim_ynwX4YkA.; H5:PWA:UID=1",
        'Host':'passport.weibo.cn',
        'Referer':'https://passport.weibo.cn/sign…&r=http%3A%2F%2Fm.weibo.cn%2F',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; W…) Gecko/20100101 Firefox/58.0',
        'Content-Length': contents.length
    }
}

var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log("data:", data); //一段html代码
    });
});

req.write(contents);
req.end;