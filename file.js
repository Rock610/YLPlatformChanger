var fs = require('fs');

//"/Users/rock/Documents/ROCK/WORKSPACE/weifenxiao/wenfenxiao/weifenxiao/src/com/wdwd";


//读取gradle.properties文件 用来修改包名
function readGradlePropertiesLine(funcData,funcEnd){
	readLineByPath(gradleProperties,funcData,funcEnd);
}

//读取gradle.properties文件 用来修改包名
function readLineByPath(path,funcData,funcEnd, context){
	
	var _this = context || this;


	var input = fs.createReadStream(path);
	var remaining = '';
	input.on('data',function(data){
		remaining += data;
		var index = remaining.indexOf('\n');
		while (index > -1) {
	      	var line = remaining.substring(0, index);
	      	remaining = remaining.substring(index + 1);
	      	funcData(line , _this);
	      	index = remaining.indexOf('\n');
    	}
	});

	input.on('end', function() {
		funcEnd(_this);
  });
}


function delFile(path){

	// alert("hello");
	fs.unlink(path,function(err){
		if(err != null){
			alert(err);
		}else{
			alert('删除成功');
		}
	});
}

function mkdir(path){
	fs.mkdirSync(path);
}

function rename(oldPath,newPath){
	fs.renameSync(oldPath,newPath);
}

function rmdirSync(path){
	fs.rmdirSync(path);
}

function existsSync(path){
	return fs.existsSync(path);
}

function fsStat(path){
	return fs.statSync(path)
}

function writeFile(path,content){
	// alert("write");

	fs.writeFile(path,content,(err) => {
  		if (err) throw err;
	});
}


function writeFileSync(path,content){

	fs.writeFile(path,content);
}

function readFile(path){
	return fs.readFileSync(path,"utf-8");
}


function getShareSDKXML(){
	return readFile(shareSDKPath);
}

function getAndroidManifestXML(){
	return readFile(manifestPath);
}

function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function fileList(folder,callback){
	fs.readdir(folder, (err, files) => {
  		callback(err,files);
	})
}



