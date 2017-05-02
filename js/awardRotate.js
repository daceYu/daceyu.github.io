(function($) {
var supportedCSS,styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");
for (var a=0;a<tocheck.length;a++) if="" (styles[tocheck[a]]="" !="=" undefined)="" supportedcss="toCheck[a];" bad="" eval="" to="" preven="" google="" closure="" remove="" it="" from="" code="" o_o="" after="" compresion="" replace="" back="" var="" ie="v" =="\v" jquery.fn.extend({="" rotate:function(parameters)="" {="" (this.length="==0||typeof" parameters="="undefined")" return;="" (typeof="" returned="[];" for="" (var="" i="0,i0=this.length;i<i0;i++)" element="this.get(i);" (!element.wilq32="" ||="" !element.wilq32.photoeffect)="" paramclone="$.extend(true," {},="" parameters);="" newrotobject="new" wilq32.photoeffect(element,paramclone)._rootobj;="" returned.push($(newrotobject));="" }="" else="" element.wilq32.photoeffect._handlerotation(parameters);="" return="" returned;="" },="" getrotateangle:="" function(){="" ret="[];" (element.wilq32="" &&="" element.wilq32.photoeffect)="" ret[i]="element.Wilq32.PhotoEffect._angle;" ret;="" stoprotate:="" cleartimeout(element.wilq32.photoeffect._timer);="" });="" library="" agnostic="" interface="" wilq32="window.Wilq32||{};" wilq32.photoeffect="(function(){" (supportedcss)="" function(img,parameters){="" img.wilq32="{" photoeffect:="" this="" };="" this._img="this._rootObj" this._eventobj="img;" this._handlerotation(parameters);="" function(img,parameters)="" make="" sure="" that="" class="" and="" id="" are="" also="" copied="" -="" just="" in="" case="" you="" would="" like="" refeer="" an="" newly="" created="" object="" this._rootobj="document.createElement('span');" this._rootobj.style.display="inline-block" ;="" this._rootobj.wilq32="{" img.parentnode.insertbefore(this._rootobj,img);="" (img.complete)="" this._loader(parameters);="" self="this;" todo:="" jquery="" dependency="" jquery(this._img).bind("load",="" function()="" self._loader(parameters);="" })();="" wilq32.photoeffect.prototype="{" _setupparameters="" :="" function="" (parameters){="" this._parameters="this._parameters" {};="" this._angle="" "number")="" parameters.angle="=="number")" this._parameters.animateto="(typeof" parameters.animateto="=="number")" ?="" (parameters.animateto)="" (this._angle);="" this._parameters.step="parameters.step" null;="" this._parameters.easing="parameters.easing" (x,="" t,="" b,="" c,="" d)="" -c="" *="" ((t="t/d-1)*t*t*t" 1)="" +="" b;="" this._parameters.duration="parameters.duration" 1000;="" this._parameters.callback="parameters.callback" function(){};="" (parameters.bind="" parameters.bind="" this._bindevents(parameters.bind);="" _handlerotation="" function(parameters){="" this._setupparameters(parameters);="" (this._angle="=this._parameters.animateTo)" this._rotate(this._angle);="" this._animatestart();="" _bindevents:function(events){="" (events="" this._eventobj)="" unbinding="" previous="" events="" (this._parameters.bind){="" oldevents="this._parameters.bind;" a="" oldevents)="" (oldevents.hasownproperty(a))="" jquery(this._eventobj).unbind(a,oldevents[a]);="" this._parameters.bind="events;" events)="" (events.hasownproperty(a))="" jquery(this._eventobj).bind(a,events[a]);="" _loader:(function()="" (ie)="" function(parameters)="" width="this._img.width;" height="this._img.height;" this._img.parentnode.removechild(this._img);="" this._vimage="this.createVMLNode('image');" this._vimage.src="this._img.src;" this._vimage.style.height="height+"px";" this._vimage.style.width="width+"px";" this._vimage.style.position="absolute" fixes="" problem="" its="" only="" rendered="" on="" absolute="" position!="" this._vimage.style.top="0px" this._vimage.style.left="0px" group="" minifying="" small="" 1px="" precision="" when="" rotating="" this._container="this.createVMLNode('group');" this._container.style.width="width;" this._container.style.height="height;" this._container.style.position="absolute" this._container.setattribute('coordsize',width-1+','+(height-1));="" -1,="" -1="" trying="" fix="" ugly="" with="" displacement="" this._container.appendchild(this._vimage);="" this._rootobj.appendchild(this._container);="" this._rootobj.style.position="relative" this._rootobj.style.width="width+"px";" this._rootobj.style.height="height+"px";" this._rootobj.setattribute('id',this._img.getattribute('id'));="" this._rootobj.classname="this._img.className;" (parameters)="" this._width="this._img.width;" this._height="this._img.height;" this._widthhalf="this._width/2;" used="" optimisation="" this._heighthalf="this._height/2;//" _widthmax="Math.sqrt((this._height)*(this._height)" (this._width)="" (this._width));="" this._widthadd="_widthMax" this._width;="" this._heightadd="_widthMax" this._height;="" widthmax="" because="" maxwidth="maxHeight" this._widthaddhalf="this._widthAdd/2;" this._heightaddhalf="this._heightAdd/2;//" this._aspectw="((parseInt(this._img.style.width,10))" this._width)="" this._img.width;="" this._aspecth="((parseInt(this._img.style.height,10))" this._height)="" this._img.height;="" this._canvas="document.createElement('canvas');" this._canvas.setattribute('width',this._width);="" this._canvas.style.position="relative" this._canvas.style.left="-this._widthAddHalf" "px";="" this._canvas.style.top="-this._heightAddHalf" this._canvas.wilq32="this._rootObj.Wilq32;" this._rootobj.appendchild(this._canvas);="" this._cnv="this._canvas.getContext('2d');" })(),="" _animatestart:function()="" (this._timer)="" cleartimeout(this._timer);="" this._animatestarttime="+new" date;="" this._animatestartangle="this._angle;" this._animate();="" _animate:function()="" actualtime="+new" checkend="actualTime"> this._parameters.duration;

         // TODO: Bug for animatedGif for static rotation ? (to test)
         if (checkEnd && !this._parameters.animatedGif) 
         {
             clearTimeout(this._timer);
         }
         else 
         {
             if (this._canvas||this._vimage||this._img) {
                 var angle = this._parameters.easing(0, actualTime - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                 this._rotate((~~(angle*10))/10);
             }
             if (this._parameters.step) {
                this._parameters.step(this._angle);
             }
             var self = this;
             this._timer = setTimeout(function()
                     {
                     self._animate.call(self);
                     }, 10);
         }

         // To fix Bug that prevents using recursive function in callback I moved this function to back
         if (this._parameters.callback && checkEnd){
             this._angle = this._parameters.animateTo;
             this._rotate(this._angle);
             this._parameters.callback.call(this._rootObj);
         }
     },

	_rotate : (function()
	{
		var rad = Math.PI/180;
		if (IE)
		return function(angle)
		{
            this._angle = angle;
			this._container.style.rotation=(angle%360)+"deg";
		}
		else if (supportedCSS)
		return function(angle){
            this._angle = angle;
			this._img.style[supportedCSS]="rotate("+(angle%360)+"deg)";
		}
		else 
		return function(angle)
		{
            this._angle = angle;
			angle=(angle%360)* rad;
			// clear canvas	
			this._canvas.width = this._width+this._widthAdd;
			this._canvas.height = this._height+this._heightAdd;
						
			// REMEMBER: all drawings are read from backwards.. so first function is translate, then rotate, then translate, translate..
			this._cnv.translate(this._widthAddHalf,this._heightAddHalf);	// at least center image on screen
			this._cnv.translate(this._widthHalf,this._heightHalf);			// we move image back to its orginal 
			this._cnv.rotate(angle);										// rotate image
			this._cnv.translate(-this._widthHalf,-this._heightHalf);		// move image to its center, so we can rotate around its center
			this._cnv.scale(this._aspectW,this._aspectH); // SCALE - if needed ;)
			this._cnv.drawImage(this._img, 0, 0);							// First - we draw image
		}

	})()
}

if (IE)
{
Wilq32.PhotoEffect.prototype.createVMLNode=(function(){
document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
		try {
			!document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
			return function (tagName) {
				return document.createElement('<rvml:' +="" tagname="" '="" class="rvml">');
			};
		} catch (e) {
			return function (tagName) {
				return document.createElement('<' +="" tagname="" '="" xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
			};
		}		
})();
}
})(jQuery);
</'></rvml:'></tocheck.length;a++)>