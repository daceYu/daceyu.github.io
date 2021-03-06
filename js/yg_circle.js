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
	turnplate.restaraunts=["一等奖","特等奖","三等奖","四等奖","五等奖","安慰奖","谢谢参与","八等奖","九等奖","十等奖"];
	turnplate.colors = ["#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF"];
	
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
		if(angles<270){ 2="" 211="" angles="270" -="" angles;="" }else{="" +="" 270;="" }="" $('#wheelcanvas').stoprotate();="" $('#wheelcanvas').rotate({="" angle:0,="" animateto:angles+1800,="" duration:8000,="" callback:function="" (){="" alert(txt);="" turnplate.brotate="!turnplate.bRotate;" });="" };="" $('.pointer').click(function="" if(turnplate.brotate)return;="" 获取随机数(奖品个数范围内)="" var="" n="turnplate.restaraunts.length;" item="Math.floor(Math.random()*n);" rotatefn(item,="" turnplate.restaraunts[item-1]);="" console.log(item);="" 页面所有元素加载完毕后执行drawroulettewheel()方法对转盘进行渲染="" window.onload="function(){" drawroulettewheel();="" function="" drawroulettewheel()="" {="" canvas="document.getElementById("wheelcanvas");" if="" (canvas.getcontext)="" 根据奖品个数计算圆周角度="" arc="Math.PI" (turnplate.restaraunts.length="" 2);="" ctx="canvas.getContext("2d");" 在给定矩形内清空一个矩形="" ctx.clearrect(0,0,422,422);="" strokestyle="" 属性设置或返回用于笔触的颜色、渐变或模式="" ctx.strokestyle="#FFBE04" ;="" font="" 属性设置或返回画布上文本内容的当前字体属性="" ctx.font="16px Microsoft YaHei" for(var="" i="0;" <="" turnplate.restaraunts.length;="" i++)="" angle="turnplate.startAngle" *="" arc;="" ctx.fillstyle="turnplate.colors[i];" ctx.beginpath();="" arc(x,y,r,起始角,结束角,绘制方向)="" 方法创建弧="" 曲线（用于创建圆或部分圆）="" ctx.arc(211,="" 211,="" turnplate.outsideradius,="" angle,="" arc,="" false);="" turnplate.insideradius,="" true);="" ctx.stroke();="" ctx.fill();="" 锁画布(为了保存之前的画布状态)="" ctx.save();="" ----绘制奖品开始----="" text="turnplate.restaraunts[i];" line_height="17;" translate方法重新映射画布上的="" (0,0)="" 位置="" ctx.translate(211="" math.cos(angle="" 2)="" turnplate.textradius,="" math.sin(angle="" turnplate.textradius);="" rotate方法旋转当前的绘图="" ctx.rotate(angle="" math.pi="" **="" 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变)="" if(text.indexof("m")="">0){//流量包
			  var texts = text.split("M");
			  for(var j = 0; j<texts.length; j++){="" ctx.font="j" =="0?'bold" 20px="" microsoft="" yahei':'16px="" yahei';="" if(j="=" 0){="" ctx.filltext(texts[j]+"m",="" -ctx.measuretext(texts[j]+"m").width="" 2,="" j="" *="" line_height);="" }else{="" ctx.filltext(texts[j],="" -ctx.measuretext(texts[j]).width="" }="" }else="" if(text.indexof("m")="=" -1="" &&="" text.length="">6){//奖品名称长度超过一定范围 
			  text = text.substring(0,6)+"||"+text.substring(6);
			  var texts = text.split("||");
			  for(var j = 0; j<texts.length; j++){="" ctx.filltext(texts[j],="" -ctx.measuretext(texts[j]).width="" 2,="" j="" *="" line_height);="" }="" }else{="" 在画布上绘制填色的文本。文本的默认颜色是黑色="" measuretext()方法返回包含一个对象，该对象包含以像素计的指定字体宽度="" ctx.filltext(text,="" -ctx.measuretext(text).width="" 0);="" 添加对应图标="" if(text.indexof("等奖")="">0){
			  var img= document.getElementById("shan-img");
			  img.onload=function(){  
				  ctx.drawImage(img,-15,10);      
			  }; 
			  ctx.drawImage(img,-15,10);  
		  }else if(text.indexOf("谢谢参与")>=0){
			  var img= document.getElementById("sorry-img");
			  img.onload=function(){  
				  ctx.drawImage(img,-15,10);      
			  };  
			  ctx.drawImage(img,-15,10);  
		  }
		  //把当前画布返回（调整）到上一个save()状态之前 
		  ctx.restore();
		  //----绘制奖品结束----
	  }     
  } 
}</texts.length;></texts.length;></270){>