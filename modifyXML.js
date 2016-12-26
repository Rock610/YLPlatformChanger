var DOMParser = require('./node_modules/xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;

var type;

var ylShareSDKAppKey = "e8fd61e1b2a0";

var ylWeiBoAppKey = "3076553655";
var ylWeiBoAppSec = "13343f4914a52d692fc36788fd281a8b";

var ylWeChatAppId = "wx772dbef604cbd3c7";
var ylWeChatAppSec = "7c471ac666d3529628993759872b506e";

var ylQQAppId = "1104728890";
var ylQQAppKey = "ptI1dUncGODdHIaj";



var bnShareSDKAppKey = "e8fe6c99e254";

var bnWeiBoAppKey = "2130178839";
var bnWeiBoAppSec = "64c188a4bcd49d65251aed088c647e98";

var bnWeChatAppId = "wx66f7f33f0dd7fb33";
var bnWeChatAppSec = "1e5be69f58af5d4afa872085cb782737";

var bnQQAppId = "1105201266";
var bnQQAppKey = "7xRCRLklVFUl27e5";


var fxzsShareSDKAppKey = "e8fd61e1b2a0";

var fxzsWeiBoAppKey = "3076553655";
var fxzsWeiBoAppSec = "13343f4914a52d692fc36788fd281a8b";

var fxzsWeChatAppId = "wx6f4e2dd22dcca5c3";
var fxzsWeChatAppSec = "2a16942bdb36cb88936d7a722b42e180";

var fxzsQQAppId = "1104728890";
var fxzsQQAppKey = "ptI1dUncGODdHIaj";

var ztbestShareSDKAppKey = "1a19aa2fd92e0";

var ztbestWeiBoAppKey = "3076553655";
var ztbestWeiBoAppSec = "13343f4914a52d692fc36788fd281a8b";

var ztbestWeChatAppId = "wx8bc55314f1ac9c97";
var ztbestWeChatAppSec = "b505936c3fad3c4bda0368a5797492bb";

var ztbestQQAppId = "1104728890";
var ztbestQQAppKey = "ptI1dUncGODdHIaj";

//若多了一个供应商或其他版本 只需再创建一份类似以上变量名 命名方式为xxShareSDKAppKey,xx为供应商代号


function modifyShareSDKXML(content,type){

	var doc = new DOMParser().parseFromString(content,"text/xml");
	//getElementsByTagName 返回一个数组
	doc.documentElement.getElementsByTagName("ShareSDK")[0].setAttribute("AppKey",eval(type+"ShareSDKAppKey"));

	doc.documentElement.getElementsByTagName("SinaWeibo")[0].setAttribute("AppKey",eval(type+"WeiBoAppKey"));
	doc.documentElement.getElementsByTagName("SinaWeibo")[0].setAttribute("AppSecret",eval(type+"WeiBoAppSec"));

	//微信三件套用的一样的id 和 secret
	doc.documentElement.getElementsByTagName("Wechat")[0].setAttribute("AppId",eval(type+"WeChatAppId"));
	doc.documentElement.getElementsByTagName("Wechat")[0].setAttribute("AppSecret",eval(type+"WeChatAppSec"));

	doc.documentElement.getElementsByTagName("WechatMoments")[0].setAttribute("AppId",eval(type+"WeChatAppId"));
	doc.documentElement.getElementsByTagName("WechatMoments")[0].setAttribute("AppSecret",eval(type+"WeChatAppSec"));

	doc.documentElement.getElementsByTagName("WechatFavorite")[0].setAttribute("AppId",eval(type+"WeChatAppId"));
	doc.documentElement.getElementsByTagName("WechatFavorite")[0].setAttribute("AppSecret",eval(type+"WeChatAppSec"));

	//qq三件套用的一样的id 和 key
	doc.documentElement.getElementsByTagName("QQ")[0].setAttribute("AppId",eval(type+"QQAppId"));
	doc.documentElement.getElementsByTagName("QQ")[0].setAttribute("AppKey",eval(type+"QQAppKey"));

	doc.documentElement.getElementsByTagName("TencentWeibo")[0].setAttribute("AppKey",eval(type+"QQAppId"));
	doc.documentElement.getElementsByTagName("TencentWeibo")[0].setAttribute("AppSecret",eval(type+"QQAppKey"));

	doc.documentElement.getElementsByTagName("QZone")[0].setAttribute("AppId",eval(type+"QQAppId"));
	doc.documentElement.getElementsByTagName("QZone")[0].setAttribute("AppKey",eval(type+"QQAppKey"));

    
    writeFile(shareSDKPath,doc);
    // alert("modifyShareSDKXML end")
	
}

function modifyManifestXML(content,type){

	// var doc = new DOMParser().parseFromString(content,"text/xml");
	// var name;
	// if(type == "yl"){
	// 	name = "@drawable/yl_new_launcher";
	// }else if(type == "bn"){
	// 	name = "@drawable/yl_ent_launcher";
	// }

	// doc.documentElement.getElementsByTagName("application")[0].setAttribute("android:icon",name);

	// writeFile(manifestPath,doc);
	
}

function getShareSDKObj(){

}
