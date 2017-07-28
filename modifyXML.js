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

//中通优选
var ztbestShareSDKAppKey = "1a19aa2fd92e0";

var ztbestWeiBoAppKey = "1979644256";
var ztbestWeiBoAppSec = "632c7c9a115dd4ecf182309189779457";

var ztbestWeChatAppId = "wx3c0af6ed7b234933";
var ztbestWeChatAppSec = "bc23ff06fc9705d187c940a63d140f51";

var ztbestQQAppId = "1105939301";
var ztbestQQAppKey = "KTu8UKktxbH9knad";

//买卖助理
var enterpriseShareSDKAppKey = "1c206fde97704";

var enterpriseWeiBoAppKey = "116976825";
var enterpriseWeiBoAppSec = "d2d318d37dfafaffc2774b9a76c63014";

var enterpriseWeChatAppId = "wx6f4e2dd22dcca5c3";
var enterpriseWeChatAppSec = "539e80e9aa8b91f51d0b65d1e0abd743";

var enterpriseQQAppId = "1106055248";
var enterpriseQQAppKey = "gEOkDYeKmZpixBhT";

//买卖助理
var mengmengShareSDKAppKey = "1c206fde97704";

var mengmengWeiBoAppKey = "116976825";
var mengmengWeiBoAppSec = "d2d318d37dfafaffc2774b9a76c63014";

var mengmengWeChatAppId = "wx4d1b59a07ea88c0e";
var mengmengWeChatAppSec = "af328a5f5274cff9144c5fec3117b250";

var mengmengQQAppId = "1106055248";
var mengmengQQAppKey = "gEOkDYeKmZpixBhT";

//若多了一个供应商或其他版本 只需再创建一份类似以上变量名 命名方式为xxShareSDKAppKey,xx为供应商代号


function modifyShareSDKXML(content,type){

	var doc = new DOMParser().parseFromString(content,"text/xml");
	//getElementsByTagName 返回一个数组
	// doc.documentElement.getElementsByTagName("ShareSDK")[0].setAttribute("AppKey",eval(type+"ShareSDKAppKey"));

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
