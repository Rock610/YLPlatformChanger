
var choosedType;
var gradlePropertiesContent;
var lastPackageName;

function wxActivityModifier(activityPath,newPackageName){

	this.activityPath = activityPath;
	this.newPackageName = newPackageName;

	this.wxEntryActivityData = "";
	
}

wxActivityModifier.prototype = {

	startWx:function(){
		var _this = this;

		this.wxEntryActivityData = "";
		readLineByPath(this.activityPath,this.readLine,this.readLineEnd, _this);
		
	},
	readLine:function(data, context){
		var _this = context || this;

		var content = data.toString();
		
		if(content.indexOf("package com") > -1){
			content = "package "+ _this.newPackageName + ".wxapi;";
		}
		_this.wxEntryActivityData += content+"\n";
	},

	readLineEnd:function(context){
		var _this = context || this;
		writeFile(_this.activityPath,_this.wxEntryActivityData);
	}
}

function transferLogo(type){

	var partOfPlatform = type+"_LOGO";

	var xxhdpiSrc = imgPathSrc+"/"+partOfPlatform+"/xxhdpi/app_logo.png";
	var xhdpiSrc = imgPathSrc+"/"+partOfPlatform+"/xhdpi/app_logo.png";


	var xxhdpiDst = drawablePath+"/drawable-xxhdpi/app_logo.png";
	var xhdpiDst = drawablePath+"/drawable-xhdpi/app_logo.png";

	copy(xxhdpiSrc,xxhdpiDst);
	copy(xhdpiSrc,xhdpiDst);

}

function transferAppIcon(type){
	var partOfPlatform = type+"_LOGO";

	var xxhdpiSrc = imgPathSrc+"/"+partOfPlatform+"/xxhdpi/yl_launcher.png";
	var xhdpiSrc = imgPathSrc+"/"+partOfPlatform+"/xhdpi/yl_launcher.png";


	var xxhdpiDst = drawablePath+"/drawable-xxhdpi/yl_launcher.png";
	var xhdpiDst = drawablePath+"/drawable-xhdpi/yl_launcher.png";

	copy(xxhdpiSrc,xxhdpiDst);
	copy(xhdpiSrc,xhdpiDst);
}


//在modifyPackage之后调用
function transferWXFiles(type){
	var typePart;
	var lastType = getLastType();
	
	var oldPath;
	var newPath;

	oldPath = switchType(lastType);
	newPath = switchType(type);

	oldPath += "/wxapi";
	newPath += "/wxapi";
	
	// var statsNew = fsStat(newPath);
	try{

		rename(oldPath,newPath);
		
		//结束后修改包名
		
		var modify1 = new wxActivityModifier(newPath+"/"+"WXEntryActivity.java",getPackageName());
		modify1.startWx();

		var modify2 = new wxActivityModifier(newPath+"/"+"WXPayEntryActivity.java",getPackageName());
		modify2.startWx();
		
	}catch(e){
		alert("移动微信activitys出错==>"+e);
	}
}



function modifyPackage(){

	gradlePropertiesContent = "";
	readGradlePropertiesLine(getReadLine,endRealLine);
}

function getReadLine(data) {
  // alert(data);
  var str = data.toString();
  if(str.indexOf("APPLICATION_ID") > -1){
  	
  	
  	lastPackageName = str.replace("APPLICATION_ID = ","");

  	str = "APPLICATION_ID = "+getPackageName();

  }
  str += "\n";

  gradlePropertiesContent += str;
}

function getPackageName(){
	var packageName;
  	switch(choosedType){
  		case "yl":
  			packageName = "com.wdwd.wfx";
  			break;
  		case "bn":
  			packageName = "com.wdwd.bainiang";
  			break;
  		case "fxzs":
  			packageName = "com.wdwd.entdemo";
  			break;
  	}

  	return packageName;
}

function endRealLine(){

	writeFile(gradleProperties,gradlePropertiesContent);
	afterModifyPackage();
}

//得到当前平台版本
//在modifyPackage之后调用
function getLastType(){
	if(lastPackageName.indexOf("wfx") > -1){
		return "yl";
	}else if(lastPackageName.indexOf("bainiang") > -1){
		return "bn";
	}else if(lastPackageName.indexOf("entdemo") > -1){
		return "fxzs";
	}
}


//获得微信回调文件路径
function switchType(type){
	switch(type){
		case "yl":
			path = packagePath+"/wfx";
			break;
		case "bn":
			path = packagePath+"/bainiang";
			break;
		case "fxzs":
			path = packagePath+"/entdemo";
			break;
		default:
			path = packagePath+"/wfx";
			break;
	}

	return path;
}

function modifyXML(type){

	modifyShareSDKXML(getShareSDKXML(),type);
	// alert(getAndroidManifestXML());
	modifyManifestXML(getAndroidManifestXML(),type);

}

function afterModifyPackage(){
	
	modifyXML(choosedType);
	transferLogo(choosedType);
	transferWXFiles(choosedType);
	transferAppIcon(choosedType);

	// writeFile("./lastType.txt",type);

	var x = document.getElementById('result');
	x.innerHTML = "类型"+choosedType+"--->完成！";
	// alert("成功");
}

function start(type){

	choosedType = type;
	modifyPackage();
	// afterModifyPackage(type);
}