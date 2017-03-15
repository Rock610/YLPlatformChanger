
var callfile = require('child_process'); 
var exec = require('child_process').exec; 
function chmodX(){
	exec('chmod +x '+PACK_SCRIPT_DEBUG);
	exec('chmod +x '+PACK_SCRIPT_RELEASE);
}

function pack(type){
	var path = "";
	var result = "";
	switch (type){
		case 1:
			path = PACK_SCRIPT_DEBUG;//"/Users/rock/Desktop/assemble/newAssembleDebug.sh";
			
			break;
		case 2:
			path = PACK_SCRIPT_RELEASE;//"/Users/rock/Desktop/assemble/newAssembleRelease.sh";
			break;
	}

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
	
	// alert("打包完成");
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








