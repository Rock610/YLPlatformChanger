
var callfile = require('child_process'); 
var exec = require('child_process').exec; 
var pathReq = require('path');
function chmodX(){
	exec('chmod +x '+PACK_SCRIPT_DEBUG);
	exec('chmod +x '+PACK_SCRIPT_RELEASE);
}

var assembleType;

function pack(type){
	var path = "";
	var result = "";


	switch (type){
		case 1:
			path = PACK_SCRIPT_DEBUG;//"/Users/rock/Desktop/assemble/newAssembleDebug.sh";
			assembleType = "Beta";
			break;
		case 2:
			path = PACK_SCRIPT_RELEASE;//"/Users/rock/Desktop/assemble/newAssembleRelease.sh";
			assembleType = "Release";
			break;
	}


	modifyAssembleByType(path);
	
	// alert("打包完成");
}

function assemble(path){
	var x = document.getElementById('result');
	x.innerHTML = "开始打包...";

	var call = callfile.execFile(path);

	call.stdout.on("data",function(data){
		result += data+"\n";
		if(data.indexOf("FAILED") >= 0){
			result += "打包失败\n";
		}
		x.innerHTML = result;
		
	})
}

var assembleScript;

function modifyAssembleByType(path){
	assembleScript = "";
	readLineByPath(path,readAssembleScript,endRealAssembleScript);
}

function readAssembleScript(data){
	
	// alert("choosedType==>"+choosedType);
	var str = data.toString();
	var theChoosedType = choosedType?choosedType : "";
	var warnElement = document.getElementById('warn');
	warnElement.innerHTML = "";
	
	if(!choosedType){
		warnElement.innerHTML = "警告: 未选择平台类型!打包将仍然继续!";
	}

	if(str.indexOf("[flavor]") > -1){
		str = "./gradlew -Pmarket=config/market.txt clean apk"+theChoosedType+assembleType;
	}
	str += "\n";

	assembleScript += str;
}

function endRealAssembleScript(){

	if(!existsSync("./script")){
		mkdir("./script");
	}
	try{
		rmdirSync("./script/script.sh");
	}catch(e){

	}
	

	writeFileSync("./script/script.sh",assembleScript);

	var abs = pathReq.resolve("./script/script.sh");

	exec('chmod +x '+abs,(error, stdout, stderr) => {

		assemble("./script/script.sh");
  	});

	
}

function patch(){
	var x = document.getElementById('result');

	fileList(OLD_APK_PATH+"/",(err,files)=>{

		if(files.length > 0){

			for (var i = 0;i< files.length; i++) {
				var file = files[i];
				if(file.indexOf(".apk") > -1){
					var apkName = file;
					var cmd = 'java -jar '
						+ BUILD_SDK_PATH+'/tinker-patch-cli-1.7.6.jar '
						+ '-old '+OLD_APK_PATH+'/'+apkName+" "
						+ '-new '+NEW_APK_PATH+'/'+apkName+" "
						+'-config '+BUILD_SDK_PATH+'/tinker_config.xml '
						+'-out '+PATCH_OUT;
					x.innerHTML = apkName + "\n" + cmd;
					exec(cmd);
					break;
				}

			};
		}
	});
	
}

function copyToOld(){

	fileList(NEW_APK_PATH+"/",(err,files)=>{
		if(files.length > 0){
			var file = files[0];
			rename(NEW_APK_PATH+"/"+file,OLD_APK_PATH+"/"+file);
		}

	});
}








