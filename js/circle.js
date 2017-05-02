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
    for(var i=0;i<n;i++){ 2="" startangle="Math.PI*(2/n)*i+defaultAngel;" endangle="Math.PI*(2/n)*(i+1)+defaultAngel;" 保存当前绘画状态，以便我们画完这副画以后restore（）再恢复到这个状态，画另一副画。="" ctx.save();="" ctx.beginpath();="" ctx.moveto(centerx,="" centery);="" 实心圆="" ctx.fillstyle="color[i];" ctx.arc(centerx,="" centery,="" r,="" startangle,="" endangle,="" false);="" ctx.fill();="" ctx.restore();="" ctx.linewidth="r/3;//空心圆" ctx.strokestyle="color[i];" ctx.stroke();="" }="" 圆上写字="" createcirtext(n,filltxt);="" function="" createcirtext(n,filltxt){="" ctx.textalign="center" ;="" 文本水平对齐方式="" ctx.textbaseline="middle" 文本垂直方向，基线位置="" var="" step="2*Math.PI/n;" for="" (="" i="0;" <="" n;="" i++)="" {="" ctx.translate(centerx,centery);="" 平移到圆心="" ctx.rotate(i*step+step="" 2+defaultangel);="" 从时钟15点处开始旋转弧度i*step+step="" ctx.filltext(info[i],filltxt,0);="" 绘制圆盘指针="" initpoint();="" initpoint(){="" 直线加箭头="" ctx2.beginpath();="" 开始绘制="" ctx2.moveto(centerx,centery);="" 起始位置="" ctx2.lineto(linelen,centery+2);="" 终点位置="" ctx2.lineto(linelen,centery+4);="" ctx2.lineto(linelen+10,centery);="" 箭头的长度="" ctx2.lineto(linelen,centery-4);="" ctx2.lineto(linelen,centery-2);="" ctx2.lineto(centerx,centery-2);="" ctx2.fillstyle="white" ctx2.fill();="" ctx2.closepath();="" dofly(){="" dofly.removeeventlistener("click",dofly);="" deg="0;" sp="200" +math.random()*10;="" timer="null;" flycircle(){="" ctx.clearrect(0,="" 0,="" wd,="" wd);="" for(var="" 2+deg*math.pi="" 180+defaultangel);="" if(deg=""> 360){//如果旋转角度大于360度后，减去360
           deg =deg-360;
        }

		if(sp</n;i++){>