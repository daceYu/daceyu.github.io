var turnplate={
	restaraunts:[],				//大转盘奖品名称
	colors:[],					//大转盘奖品区块对应背景颜色
	outsideRadius:192,			//大转盘外圆的半径
	textRadius:155,				//大转盘奖品位置距离圆心的距离
	insideRadius:68,			    //大转盘内圆的半径
	startAngle:0,				//开始角度
	bRotate:false				//false:停止;ture:旋转
};

$(document).ready(function(){
	//动态添加大转盘的奖品与奖品区域背景颜色  ps:圆盘根据奖品个数等分
	turnplate.restaraunts=["满30减10","谢谢参与","麻辣烤肉拌饭","继续加油","250ml冰糖雪梨一瓶","谢谢参与","鱼香肉丝盖浇饭","继续加油","香辣螺蛳","谢谢参与"];
	turnplate.colors = ["#ff6815", "#fdf1d1", "#ff6815", "#fdf1d1","#ff6815", "#fdf1d1", "#ff6815", "#fdf1d1","#ff6815", "#fdf1d1"];
	
	var rotateTimeOut = function (){
		$('#wheelcanvas').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};

	//旋转转盘 item:奖品位置; txt：提示语;
	var rotateFn = function (item, txt){
		var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
		if(angles<270){ 2="" 211="" angles="270" -="" angles;="" }else{="" +="" 270;="" }="" $('#wheelcanvas').stoprotate();="" $('#wheelcanvas').rotate({="" angle:0,="" animateto:angles+1800,="" duration:8000,="" callback:function="" (){="" alert(txt);="" turnplate.brotate="!turnplate.bRotate;" });="" };="" $('.pointer').click(function="" if(turnplate.brotate)return;="" 获取随机数(奖品个数范围内)="" var="" n="turnplate.restaraunts.length;" item="Math.floor(Math.random()*n);" if(item="=0){" rotatefn(item,="" turnplate.restaraunts[item-1]);="" 页面所有元素加载完毕后执行drawroulettewheel()方法对转盘进行渲染="" window.onload="function(){" drawroulettewheel();="" function="" drawroulettewheel()="" {="" canvas="document.getElementById("wheelcanvas");" if="" (canvas.getcontext)="" 根据奖品个数计算圆周角度="" arc="Math.PI" (turnplate.restaraunts.length="" 2);="" ctx="canvas.getContext("2d");" 在给定矩形内清空一个矩形="" ctx.clearrect(0,0,422,422);="" strokestyle="" 属性设置或返回用于笔触的颜色、渐变或模式="" ctx.strokestyle="#FFBE04" ;="" font="" 属性设置或返回画布上文本内容的当前字体属性="" ctx.font="20px Microsoft YaHei" for(var="" i="0;" <="" turnplate.restaraunts.length;="" i++)="" angle="turnplate.startAngle" *="" arc;="" ctx.fillstyle="turnplate.colors[i];" ctx.beginpath();="" arc(x,y,r,起始角,结束角,绘制方向)="" 方法创建弧="" 曲线（用于创建圆或部分圆）="" ctx.arc(211,="" 211,="" turnplate.outsideradius,="" angle,="" arc,="" false);="" turnplate.insideradius,="" true);="" ctx.stroke();="" ctx.fill();="" 锁画布(为了保存之前的画布状态)="" ctx.save();="" if(i%2="=0){" ----绘制奖品开始----="" text="turnplate.restaraunts[i];" line_height="22;" translate方法重新映射画布上的="" (0,0)="" 位置="" ctx.translate(211="" math.cos(angle="" 2)="" turnplate.textradius,="" math.sin(angle="" turnplate.textradius);="" rotate方法旋转当前的绘图="" ctx.rotate(angle="" math.pi="" **="" 根据奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变)="" 竖着显示="" if(text.length="">4){//奖品名称长度超过一定范围 
		  // 	  var l=text.length;
		  // 	  var a="";
		  // 	  for(var j=0;j<=l;j++){ a="a+text.substring(j,j+1)+"||";" console.log(a);="" }="" var="" texts="a.split("||");" else{="" ctx.filltext(text,="" -ctx.measuretext(text).width="" 2,="" 0);="" 横着显示="" if(text.length="">4){//奖品名称长度超过一定范围 
		  	  if(text.length>8){
		  	  	 if(text.length>12){
		  	  	 	text = text.substring(0,12);
		  	  	 }
		  	  	 text = text.substring(0,4)+"||"+text.substring(4,8)+"||"+text.substring(8);
			 	 var texts = text.split("||");
		  	  }else{
			 	 text = text.substring(0,4)+"||"+text.substring(4);
			 	 var texts = text.split("||");
		  	  }
			  for(var j = 0; j</=l;j++){></270){>