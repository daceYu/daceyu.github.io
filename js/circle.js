//浏览器宽度
var wd=document.documentElement.clientWidth;
//设置画布大小
var cv = document.getElementById("c");
cv.width=wd;
cv.height=wd;
//设置圆
var centerX=wd/2;
var centerY=wd/2;
var r=wd/2.2;
var startAngle = 0;
var endAngle = 0;
var filltxt=wd/3;
var lineLen=wd/1.5;
//默认横向剪头的时候，开始角度为0，竖箭头的时候为3PI/2;
//var defaultAngel=0;
var defaultAngel=3*Math.PI/2;
//平均等分的份数&对应的值&颜色
var n=10;
var info=["一等奖","特等奖","三等奖","四等奖","五等奖","安慰奖","谢谢参与","八等奖","九等奖","十等奖"];
var color = ["#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF"];
//画实心圆
var ctx = cv.getContext("2d");
var ctx2 = cv.getContext("2d");

drawCircle(n);
function drawCircle(n){
    for(var i=0;i<n;i++){
    		startAngle= Math.PI*(2/n)*i+defaultAngel;
    		endAngle= Math.PI*(2/n)*(i+1)+defaultAngel;
    		//保存当前绘画状态，以便我们画完这副画以后restore（）再恢复到这个状态，画另一副画。
        ctx.save();
        ctx.beginPath(); 
        ctx.moveTo(centerX, centerY);//实心圆
        ctx.fillStyle = color[i];
        ctx.arc(centerX, centerY, r, startAngle, endAngle, false);
        ctx.fill();
        ctx.restore();
		//ctx.lineWidth = r/3;//空心圆
		//ctx.arc(centerX, centerY, r, startAngle, endAngle, false);
        //ctx.strokeStyle =  color[i];
        //ctx.stroke();
    }
}
//圆上写字
createCirText(n,filltxt);
function createCirText(n,filltxt){
    ctx.textAlign='center';//文本水平对齐方式
    ctx.textBaseline='middle';//文本垂直方向，基线位置 
    ctx.fillStyle='#E5302F'; 
    var step = 2*Math.PI/n;
    for ( var i = 0; i < n; i++) {
         ctx.save();
         ctx.beginPath();
         ctx.translate(centerX,centerY);//平移到圆心
         ctx.rotate(i*step+step/2+defaultAngel);//从时钟15点处开始旋转弧度i*step+step/2
         ctx.fillText(info[i],filltxt,0);
         ctx.restore();
    }
}
//绘制圆盘指针
//initPoint();
//function initPoint(){ //直线加箭头
//  ctx2.beginPath();//开始绘制
//  ctx2.moveTo(centerX,centerY);//起始位置
//  ctx2.lineTo(lineLen,centerY+2);//终点位置
//  ctx2.lineTo(lineLen,centerY+4);
//  ctx2.lineTo(lineLen+10,centerY);//箭头的长度
//  ctx2.lineTo(lineLen,centerY-4);
//  ctx2.lineTo(lineLen,centerY-2);
//  ctx2.lineTo(centerX,centerY-2); 
//  ctx2.fillStyle = "white";
//  ctx2.fill();
//  ctx2.closePath();
//}



function doFly(){
	dofly.removeEventListener("click",doFly);
	var deg=0;
	var sp = 200 +Math.random()*10;
	var timer=null;
	timer=setInterval(flyCircle,1);

	function flyCircle(){ 
		sp=sp*0.95;
		ctx.clearRect(0, 0, wd, wd); 
		for(var i=0;i<10;i++){
	    		startAngle= Math.PI*(2/n)*i+deg*Math.PI/180+defaultAngel;
	    		endAngle= Math.PI*(2/n)*(i+1)+deg*Math.PI/180+defaultAngel;
	        ctx.save();
	        ctx.beginPath(); 
	        ctx.moveTo(centerX, centerY);
	        ctx.fillStyle = color[i];
	        ctx.arc(centerX, centerY, r, startAngle, endAngle, false);
	        ctx.fill();
	        ctx.restore();
	    }
		
		ctx.textAlign='center';
	    ctx.textBaseline='middle'; 
	    ctx.fillStyle='#E5302F'; 
	    var step = 2*Math.PI/n;
	    for ( var i = 0; i < n; i++) {
	         ctx.save();
	         ctx.beginPath();
	         ctx.translate(centerX,centerY);
	         ctx.rotate(i*step+step/2+deg*Math.PI/180+defaultAngel);
	         ctx.fillText(info[i],filltxt,0);
	         ctx.restore();
	    }
//		initPoint();
		
		deg=deg+sp;
        if(deg > 360){//如果旋转角度大于360度后，减去360
           deg =deg-360;
        }

		if(sp<0.1){
			ctx.save();
			clearInterval(timer);
			info=info.reverse();
			var pos = Math.floor(deg/360*n);//因为分成了n等分，旋转的角度除以36，可得到当前旋转的度数
            alert(info[pos]);
            console.log(info[pos]);
			timer=null;
			
			dofly.addEventListener("click",doFly);
		}
	}
}
//点击转动
var dofly=document.getElementById("dofly");
dofly.addEventListener("click",doFly);
//dofly.onclick=function(){
//	doFly();
//}