!function(){if(window.WEB_SOCKET_FORCE_FLASH);else{if(window.WebSocket)return;if(window.MozWebSocket)return void(window.WebSocket=window.MozWebSocket)}var e;return e=window.WEB_SOCKET_LOGGER?WEB_SOCKET_LOGGER:window.console&&window.console.log&&window.console.error?window.console:{log:function(){},error:function(){}},swfobject.getFlashPlayerVersion().major<10?void e.error("flash="" player="">= 10.0.0 is required."):("file:"==location.protocol&&e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),window.WebSocket=function(e,t,o,n,i){var s=this;s.__id=WebSocket.__nextId++,WebSocket.__instances[s.__id]=s,s.readyState=WebSocket.CONNECTING,s.bufferedAmount=0,s.__events={},t?"string"==typeof t&&(t=[t]):t=[],s.__createTask=setTimeout(function(){WebSocket.__addTask(function(){s.__createTask=null,WebSocket.__flash.create(s.__id,e,t,o||null,n||0,i||null)})},0)},WebSocket.prototype.send=function(e){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var t=WebSocket.__flash.send(this.__id,encodeURIComponent(e));return 0>t?!0:(this.bufferedAmount+=t,!1)},WebSocket.prototype.close=function(){return this.__createTask?(clearTimeout(this.__createTask),this.__createTask=null,void(this.readyState=WebSocket.CLOSED)):void(this.readyState!=WebSocket.CLOSED&&this.readyState!=WebSocket.CLOSING&&(this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id)))},WebSocket.prototype.addEventListener=function(e,t){e in this.__events||(this.__events[e]=[]),this.__events[e].push(t)},WebSocket.prototype.removeEventListener=function(e,t){if(e in this.__events)for(var o=this.__events[e],n=o.length-1;n>=0;--n)if(o[n]===t){o.splice(n,1);break}},WebSocket.prototype.dispatchEvent=function(e){for(var t=this.__events[e.type]||[],o=0;o</10?void>