function domainUrl(url) {
    var hosts = "";
    if (url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split(".");
        hosts = d_arr[d_arr.length - 2] + "." + d_arr[d_arr.length - 1]
    }
    return hosts
}
function getRefere() {
    var ref;
    ref = document.referrer;
    if (!ref) {
        getCook("ssoUfp")
    }
    return ref
}
function setCook(name, value, sec) {
    var sec = sec ? parseInt(sec) : "";
    var path = path || "/";
    var domain = domain || domainUrl(window.location.href);
    if (sec) {
        var exp = new Date();
        exp.setTime(exp.getTime() + sec * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=" + path + "; domain=" + domain
    } else {
        document.cookie = name + "=" + escape(value) + "; path=" + path + "; domain=" + domain
    }
}
function getCook(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return arr[1]
        }
    }
    return ""
}
function delCook(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1 * 1000);
    document.cookie = name + "=;expires=" + exp.toGMTString() + "; path=" + path + "; domain=" + domain
}
function encode(str) {
    var str = str || "";
    return str
}
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range))
}
function array_merge(arr1, arr2) {
    if (typeof(arr1) == "object" && typeof(arr2) == "object") {
        var replaceKey = new Array;
        replaceKey["posArea"] = "pa";
        replaceKey["posColumn"] = "pc";
        replaceKey["posOper"] = "po";
        replaceKey["posGP"] = "pGP";
        for (var k in arr2) {
            k = !! replaceKey[k] ? replaceKey[k] : k;
            arr1[k] = arr2[k]
        }
    }
    return arr1
}
function _ParseUrl (url) {
    this.options = {
        url: url,
        strictMode: true, // 'loose' parsing by default

        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"], // keys available to query 

        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },

        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        }
    }
    this.init();
}
_ParseUrl.prototype = {
    parseUri: function() {
        str = decodeURI( this.options.url );
        
        var m = this.options.parser[ this.options.strictMode ? "strict" : "loose" ].exec( str );
        var uri = {};
        var i = 14;

        while ( i-- ) {
            uri[ this.options.key[i] ] = m[i] || "";
        }

        return uri;
    },
    init: function () {
        var uri = this.parseUri();
        this.uri = uri;
    }
};
function _mergeUrl (href) {
    var hrefUri = new _ParseUrl(href);
    var currentUri = new _ParseUrl(location.href).uri;
    var url;
    if (hrefUri.uri.protocol == 'javascript') {
        return false;
    }
    if (hrefUri.uri.protocol) {
        url = href
    } else if (hrefUri.uri.directory && hrefUri.uri.directory[0] != '/' ) {
        url = location.origin + hrefUri.uri.path + (hrefUri.uri.query ? ('?' + hrefUri.uri.query) : '');
    } else if (hrefUri.uri.directory && hrefUri.uri.directory[0] == '/') {
        url = location.origin + hrefUri.uri.path + (hrefUri.uri.query ? ('?' + hrefUri.uri.query) : '');
    } else if (hrefUri.uri.directory && (hrefUri.uri.path || hrefUri.query)) {
        url = location.origin + '/' + hrefUri.uri.path + (hrefUri.uri.query ? ('?' + hrefUri.uri.query) : '');
    } else if (!hrefUri.uri.directory && (hrefUri.uri.path || hrefUri.query)) {
        url = location.origin + currentUri.directory + hrefUri.uri.path + (hrefUri.uri.query ? ('?' + hrefUri.uri.query) : '');
    } else {
        url = false;
    }
    return url;
}
function _getTag(elem, tagName) {
    if (elem == document.body) return false;
    var currentTagName = elem.tagName.toLowerCase();
    var findTagName = tagName.toLowerCase();
    if (currentTagName == findTagName) {
        return elem
    }
    elem = elem.parentNode;
    if (!elem) {
        return false;
    }
    return _getTag(elem, tagName);
}
var stat = {
    ver: "",
    url: "",
    _Sjkxy: [],
    args: "",
    url_obj: "",
    isH5Local: true,
    isCookie: true,
    pageId: "",
    channel: "",
    huodong: "",
    mkt: "",
    _stat_arr: [],
    init: function() {
        stat.genPageTabId();
        stat.eloader()
    },
    genPageTabId: function(posId) {
        var keyId = "";
        keyId = new Date().getTime() + posId + Math.round(Math.random());
        stat.pageId = keyId;
        return keyId
    },
    commonArg: function() {
        var params = [];
        if (window && window.screen) {
            params["screenH"] = window.screen.height || 0;
            params["screenW"] = window.screen.width || 0;
            params["colorD"] = window.screen.colorDepth || 0
        }
        if (navigator) {
            params["lang"] = navigator.language || ""
        }
        params = array_merge(params, stat.getJsArg());
        return params
    },
    getJsArg: function() {
        var args = "";
        var params = [];
        params["url"] = encodeURIComponent(window.location.href);
        stat._Sjkxy["jPro"] = stat._Sjkxy["jPro"] || "www";
        if (stat._Sjkxy["jPro"]) {
            params["jPro"] = stat._Sjkxy["jPro"]
        }
        if (stat._Sjkxy["jkxyVer"]) {
            params["jVer"] = stat._Sjkxy["jkxyVer"]
        }
        if (stat._Sjkxy["sig"]) {
            params["sig"] = stat._Sjkxy["sig"]
        }
        if (stat._Sjkxy["posId"]) {
            params["posId"] = stat._Sjkxy["posId"]
        }
        if (typeof(stat._Sjkxy["ic"]) != "undefined") {
            params["ic"] = stat._Sjkxy["ic"]
        }
        if (typeof(stat._Sjkxy["params"]) != "undefined") {
            if (typeof(stat._Sjkxy["params"]) == "string") {
                var replaceKey = new Array;
                replaceKey["posArea"] = "pa";
                replaceKey["posColumn"] = "pc";
                replaceKey["posOper"] = "po";
                replaceKey["posGP"] = "pGP";
                var t_p = stat._Sjkxy["params"].split("|");
                for (var i in t_p) {
                    var t = t_p[i].split(":");
                    if (typeof(t[1]) != "undefined") {
                        t[0] = !! replaceKey[t[0]] ? replaceKey[t[0]] : t[0];
                        params[t[0]] = t[1]
                    }
                }
            } else {
                if (typeof(stat._Sjkxy["params"]) == "object") {
                    params = array_merge(params, stat._Sjkxy["params"])
                }
            }
        }
        return params
    },
    handleCookArg: function() {
        var _stat_arr = stat._stat_arr || "";
        return _stat_arr
    },
    handleTag: function(tag) {
        var res = [];
        var args_arr = tag.toString().split("|");
        for (var i in args_arr) {
            if (args_arr[i].toString().indexOf(":") >= 0) {
                var t_diy_key = args_arr[i].split(":");
                res[t_diy_key[0]] = t_diy_key[1]
            }
        }
        res["pa"] = args_arr[0];
        res["pc"] = args_arr[1];
        res["po"] = args_arr[2];
        if (args_arr[3] && args_arr[3].toString().indexOf(":") < 0) {
            res["pGP"] = args_arr[3]
        }
        return res
    },
    eloader: function() {
        var args = [];
        args = stat.commonArg();
        args = array_merge(stat.handleCookArg(), args);
        args["action"] = "loader";
        stat.sendUrl(args)
    },
    eclick: function(args) {
        var args = args || [];
        args = array_merge(stat.commonArg(), args);
        args = array_merge(stat.handleCookArg(), args);
        args["action"] = "click";
        stat.sendUrl(args)
    },
    eclickUsual: function (args) {
        var args = args || [];
        args = array_merge(stat.commonArg(), args);
        args = array_merge(stat.handleCookArg(), args);
        args["action"] = "click";
        stat.sendUrl(args)
    },
    emove: function(args) {
        stat.sendUrl(args)
    },
    efunc: function(args) {
        var args_arr = [];
        var args = args || [];
        args_arr = array_merge(stat.commonArg(), args);
        args_arr = array_merge(stat.handleCookArg(), args_arr);
        args_arr["action"] = "func";
        stat.sendUrl(args_arr)
    },
    sendUrl: function(args) {
        var commonArgs = "who,uL,isL,uFP,ip,ic,action,ver,sT,pid,uuid,ssid,isOIn,channel,nT,isNU,isRU,hT,uGP,uFW,posId,pa,pc,po,pFP,pGP,jPro,jVer,mkt,url,";
        var t_args = args;
        var args_obj = [];
        for (var i in args) {
            if (args[i] != "undefined" && args[i] && args[i] != "NaN" && args[i] != "null") {
                switch (i) {
                case "url":
                    args[i] = args[i] ? args[i] : encodeURIComponent(window.location.href);
                    break;
                case "uFP":
                    args[i] = args[i] ? args[i] : encodeURIComponent(document.referrer);
                    break;
                case "mkt":
                    args[i] = decodeURIComponent(stat[i]);
                    var k = i + "=";
                    var tt = args[i].split("|");
                    for (var tti in tt) {
                        var ttt = tt[tti].split("=");
                        args[ttt[0]] = ttt[1]
                    }
                    break;
                case "channel":
                case "huodong":
                    args[i] = decodeURIComponent(stat[i]);
                    var tt = args[i].split("=");
                    args[i] = encodeURIComponent(tt[1]);
                    break;
                case "hT":
                    args[i] = (new Date().getTime()) - args["nT"];
                    break;
                case "course":
                case "qua":
                    break
                }
                if (commonArgs.indexOf(i + ",") < 0) {
                    args_obj["E" + i] = args[i]
                } else {
                    args_obj[i] = args[i]
                }
            }
        }
        args_obj["ver"] = stat.ver;
        var params = "";
        for (var k in args_obj) {
            params += "&" + k + "=" + args_obj[k]
        }
        var url = stat.url + "/log.gif?" + params;
        var img = new Image();
        img.src = url
    }
};
var initStat = {
    req: "",
    res: "",
    stime: 0,
    key_mkt: "stat_mkt",
    key_from_web_url: "stat_fromWebUrl",
    key_channel: "stat_hmsr",
    key_huodong: "stat_huodong",
    key_ssid: "stat_ssid",
    key_uuid: "stat_uuid",
    key_who: "stat_who",
    key_h_who: "stat_who_h",
    key_h_l: "stat_who_l",
    key_isnew: "stat_isNew",
    cook_Domain: "",
    var_isnew: 0,
    var_uFW: "",
    var_isOIn: 0,
    extend: {},
    init: function() {
        initStat.stime = new Date().getTime();
        initStat.var_isOIn = 0;
        return initStat.main()
    },
    main: function() {
        var log_info_l = initStat._getL();
        var log_info_m = initStat._getM();
        var extend = initStat.extend;
        var other = initStat._other(log_info_l, log_info_m, extend);
        var log_arr = initStat.reLogArr([log_info_l, log_info_m, extend, other]);
        return log_arr
    },
    reLogArr: function(log_res) {
        var log_info = [];
        for (var i in log_res) {
            if (typeof(log_res[i]) == "object") {
                for (var j in log_res[i]) {
                    log_info[j] = log_res[i][j]
                }
            }
        }
        return log_info
    },
    _getL: function() {
        var url = window.location.href;
        var url_origin = getRefere();
        var l = [];
        l["uFP"] = encodeURIComponent(url_origin);
        l["uFW"] = encodeURIComponent(getCook(initStat.key_from_web_url));
        if (!url_origin || url_origin == undefined) {
            initStat._initData(url)
        } else {
            var url_origin_domain = domainUrl(url_origin);
            var url_domain = domainUrl(url);
            if (url_origin_domain != url_domain) {
                initStat._initData(url)
            }
        }
        initStat.var_isnew = getCook(initStat.key_isnew);
        initStat.var_isnew = getCook(initStat.key_uuid) ? getCook(initStat.key_isnew) : 1;
        var c = initStat._getChannel();
        l["mkt"] = c["mkt"];
        l["channel"] = c["channel"];
        l["huodong"] = c["huodong"];
        return l
    },
    _getM: function() {
        var m = [];
        var who = getCook("uid");
        if ( !! who) {
            m["who"] = getCook("uid");
            m["uL"] = getCook("ssoUl");
            m["isL"] = 1;
            setCook(stat.key_h_who, m["who"], 86400 * 365);
            setCook(stat.key_h_l, m["uL"], 86400 * 365)
        } else {
            m["who"] = getCook(stat.key_h_who);
            m["uL"] = getCook(stat.key_h_l);
            m["isL"] = 0
        }
        m["ssid"] = initStat._genSSID();
        m["uuid"] = initStat._genUUID();
        m["ip"] = getCook("ip");
        var now = new Date().getTime();
        m["nT"] = now;
        m["hT"] = now - initStat.stime;
        m["sT"] = initStat.stime;
        return m
    },
    _other: function(l, m, e) {
        var o = [];
        o["isNU"] = parseInt(initStat.var_isnew) ? 1 : 0;
        setCook(initStat.key_isnew, o["isNU"]);
        o["isRU"] = o["isNU"] ? 0 : 1;
        o["pid"] = initStat.stime + "" + GetRandomNum(100000000, 999999999);
        o["isOIn"] = initStat.var_isOIn;
        return o
    },
    _initData: function(url) {
        var t = url.split(".");
        delCook(initStat.key_mkt);
        delCook(initStat.key_channel);
        delCook(initStat.key_huodong);
        delCook(initStat.key_from_web_url);
        initStat.var_uFW = getCook(initStat.key_from_web_url) || domainUrl(getRefere());
        setCook(initStat.key_from_web_url, initStat.var_uFW, "");
        initStat.var_isOIn = 1
    },
    _genUUID: function() {
        var key = initStat.key_uuid;
        var cook_v = getCook(key);
        if (!cook_v || cook_v == "undefined" || cook_v == undefined) {
            var time = new Date().getTime() + "" + GetRandomNum(100000000, 999999999);
            cook_v = encode(time);
            setCook(key, cook_v, 86400 * 365 * 30)
        }
        return cook_v
    },
    _genSSID: function() {
        var n_time = new Date().getTime();
        var key = initStat.key_ssid;
        var cook_v = getCook(key);
        var sjc = parseInt(n_time) - parseInt(initStat.stime) >= 7200 * 1000;
        if (!cook_v || cook_v == "undefined" || sjc || initStat.var_isOIn == 1) {
            cook_v = encode(n_time + GetRandomNum(100000000, 999999999));
            setCook(key, cook_v, 7200);
            if (getCook(initStat.key_uuid)) {
                initStat.var_isnew = 0
            }
        }
        return cook_v
    },
    _getChannel: function() {
        var url = window.location.href;
        var par = url.toString().substr(url.indexOf("?") + 1);
        var get = par.split("&");
        var c = [];
        var _mkt = [];
        var _hmsr = [];
        var _hd = [];
        if (typeof(get) == "object") {
            var i = 0;
            for (var key in get) {
                if (get[key].indexOf("mkt") >= 0) {
                    _mkt[i] = get[key];
                    i++
                } else {
                    if (get[key].indexOf("hmsr") >= 0) {
                        _hmsr[i] = get[key]
                    } else {
                        if (get[key].indexOf("huodong") >= 0) {
                            _hd[i] = get[key]
                        }
                    }
                }
            }
            c["mkt"] = _mkt.join("|");
            if (c["mkt"]) {
                setCook(initStat.key_mkt, c["mkt"], "")
            }
            c["channel"] = _hmsr.join("|");
            if (c["channel"]) {
                setCook(initStat.key_channel, c["channel"], "")
            }
            c["huodong"] = _hd.join("|");
            if (c["huodong"]) {
                setCook(initStat.key_huodong, c["huodong"], "")
            }
        }
        c["mkt"] = getCook(initStat.key_mkt);
        c["channel"] = getCook(initStat.key_channel);
        c["huodong"] = getCook(initStat.key_huodong);
        stat.channel = c["channel"];
        stat.huodong = c["huodong"];
        stat.mkt = c["mkt"];
        return c
    }
};
var videoStat = function(videoId) {
        var obj = this;
        obj.videoId = !! videoId ? videoId : "play_video";
        obj.genDrag = function() {
            return new Date().getTime() + obj.videoObj.currentTime() + GetRandomNum(10000, 99999)
        }, obj.heartbeat = {
            timing: 5000,
            act: "",
            start: function() {
                if (obj.heartbeat.act == "") {
                    var options = {
                        status: 1,
                        po: 8030
                    };
                    obj.heartbeat.act = setInterval(function() {
                        obj.send(options)
                    }, obj.heartbeat.timing)
                }
            },
            stop: function() {
                clearInterval(obj.heartbeat.act);
                obj.heartbeat.act = ""
            }
        };
        obj.send = function(options) {
            var tag = [];
            tag["aVTime"] = parseInt(obj.videoObj.currentTime());
            tag["aVStatus"] = options["status"];
            tag["po"] = options["po"];
            tag["pa"] = "9006";
            tag["aVDrag"] = obj.aVDrag;
            tag["aVTDiff"] = parseInt(obj.aVTDiff);
            tag["aVTimeL"] = parseInt(obj.aVTimeL);
            tag["aVPid"] = obj.aVPid;
            stat.eclick(tag)
        };
        obj.init = function() {
            try {
                if (!document.getElementById(obj.videoId)) {
                    return false
                }
                obj.videoObj = videojs(obj.videoId);
                obj.aVDrag = "";
                obj.aVTimeL = 0;
                obj.aVTDiff = "";
                obj.last = 0;
                obj.posId = 0;
                obj.aVPid = obj.genDrag();
                obj.videoObj.on("timeupdate", function() {
                    var now = obj.videoObj.currentTime();
                    var diff = parseInt(Math.abs(now - obj.last));
                    if (diff > 2) {
                        obj.aVDrag = obj.genDrag();
                        obj.aVTDiff = diff;
                        obj.aVTimeL = obj.last;
                        obj.send({
                            status: 4,
                            po: 8041
                        })
                    }
                    obj.last = now;
                    obj.heartbeat.start()
                });
                obj.videoObj.on("play", function() {
                    obj.send({
                        status: 1,
                        po: 8002
                    });
                    obj.heartbeat.start()
                });
                obj.videoObj.on("pause", function() {
                    obj.send({
                        status: 0,
                        po: 8003
                    });
                    obj.heartbeat.stop()
                });
                obj.videoObj.on("ended", function() {
                    obj.send({
                        status: 2,
                        po: 8023
                    })
                })
            } catch (err) {
                return false
            } finally {}
        }()
    };
var _Sjkxy = _Sjkxy || [];
var domain = domainUrl(window.location.href);
var path = "/";
var JKload = {};
JKload.ready = function(fn) {
    fn()
};
JKload.ready.promise = function(obj) {
    if (document.readyState === "complete") {
        setTimeout(JKload.ready, 1)
    } else {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
            window.addEventListener("load", JKload.ready, false)
        } else {
            document.attachEvent("onreadystatechange", DOMContentLoaded);
            // k;
            window.attachEvent("onload", JKload.ready);
            var top = false;
            try {
                top = window.frameElement == null && document.documentElement
            } catch (e) {}
            if (top && top.doScroll) {
                (function doScrollCheck() {
                    if (!JKload.isReady) {
                        try {
                            top.doScroll("left")
                        } catch (e) {
                            return setTimeout(doScrollCheck, 50)
                        }
                        JKload.ready()
                    }
                })()
            }
        }
    }
};
var DOMContentLoaded = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            JKload.ready()
        } else {
            if (document.readyState === "complete") {
                document.detachEvent("onreadystatechange", DOMContentLoaded);
                JKload.ready()
            }
        }
    };



// var img_onloadtop = new Image();
// img_onloadtop.src = "http://log.jikexueyuan.com/JK_foot.js?key=onloadtop" + new Date().getTime() + "" + Math.random();




function dClick(e) {
    

    // if ($(e).parent(".card-transform").index() == 1) {
    //  var img_click = new Image();
    //  img_click.src = "http://log.jikexueyuan.com/JK_foot.js?key=dclicklishunwang" + new Date().getTime() + "" + Math.random()
    // }
    

    var obj = e;
    var tag = obj.getAttribute("jktag");
    if ( !! tag) {
        var args = [];
        if (tag.indexOf("&posOper") < 0) {
            args = stat.handleTag(tag)
        } else {
            var t_arr_tag = tag.split("&");
            var replaceKey = new Array;
            replaceKey["posArea"] = "pa";
            replaceKey["posColumn"] = "pc";
            replaceKey["posOper"] = "po";
            replaceKey["posGP"] = "pGP";
            for (var i in t_arr_tag) {
                var temp = t_arr_tag[i].split("=");
                if (temp[0]) {
                    temp[0] = !! replaceKey[temp[0]] ? replaceKey[temp[0]] : temp[0];
                    args[temp[0]] = temp[1]
                }
            }
        }
        var href = obj.getAttribute("href");
        var toUrl = href ? _mergeUrl(href) : false;
        args["uGP"] = toUrl ? encodeURIComponent(toUrl) : ""
        stat.eclick(args)
    }
}

function aClick (obj) {
    var args = [];

    var href = obj.getAttribute("href");
    var toUrl = href ? _mergeUrl(href) : false;
    if (!toUrl) {
        return;
    }
    args["uGP"] = toUrl ? encodeURIComponent(toUrl) : ""
    stat.eclickUsual(args);
}
function liveATag () {
    node = document.body;
    var type = 'click';
    if (document.addEventListener) {
        node.addEventListener(type, function(e) {
            aTag = _getTag(e.target, 'a');
            if (aTag) {
                if (aTag.getAttribute("jktag")) {
                    dClick(aTag);
                } else {
                    aClick(aTag);
                }
            }
        })
    } else {
        if (document.attachEvent) {
            node.attachEvent("on" + type, function(e) {
                aTag = _getTag(e.target, 'a');
                if (aTag) {
                    if (aTag.getAttribute("jktag")) {
                        dClick(aTag);
                    } else {
                        aClick(aTag);
                    }
                }
            })
        } else {
            node["on" + type] = function(e) {
                aTag = _getTag(e.target, 'a');
                if (aTag) {
                    if (aTag.getAttribute("jktag")) {
                        dClick(aTag);
                    } else {
                        aClick(aTag);
                    }
                }
            }
        }
    }
}
var oldonload = window.onload;

if (typeof window.onload != "function") {
    window.onload = function() {
        liveATag();
    }
} else {
    window.onload = function() {
        oldonload();
        liveATag();
    }
}
JKload.ready(function() {
    try {


        // var img_onloadfoot = new Image();
        // img_onloadfoot.src = "http://log.jikexueyuan.com/JK_foot.js?key=onloadfoot" + new Date().getTime() + "" + Math.random();
        


        setCook("statIc", "1");
        _Sjkxy["ic"] = getCook("statIc") ? "1" : "0";
        delCook("statIc");
        stat.url = "http://log.jikexueyuan.com/";
        stat.ver = "5.0.0.0";
        stat._Sjkxy = _Sjkxy;
        stat.cook_Domain = "." + domain;
        stat._stat_arr = initStat.init();
        stat.genPageTabId(_Sjkxy["posId"]);
        stat.init();
        if (document.getElementsByTagName("video").length > 0 && typeof(videojs) == "function") {
            var videoDoms = document.getElementsByTagName("video");
            for (var i = 0; i < videoDoms.length; i++) {
                if ( !! videoDoms[i]) {
                    new videoStat(videoDoms[i].getAttribute("id"))
                }
            }
        }
    } catch (err) {}
});