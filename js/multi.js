//判断访问源
function IsPC(){
	var system ={};  
	var p = navigator.platform;       
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;  
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
	if(system.win||system.mac||system.xll){
	    document.write("作者比较懒，没有做样式适配，请在手机端打开...");
	}
}
function imagePreview(input){
	var files = input.files;
	var preview =document.getElementById("yg_multi");
	var l=$(".choosedImg div").length;
	if(files.length+l>9){
		$("textarea").val("您选的图片大于9张，请重新选择");
		return false;
	}
	for (var i = 0;i