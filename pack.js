
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