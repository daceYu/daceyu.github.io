! function() {
    var gallery = {
        x: 600,
        y: 1000,
        z: 1000,
        picUrl: 'http://gw.alicdn.com/mt/LB1zYNIOVXXXXa7XVXXXXXXXXXX-4000-1600.jpg',
        init: function() {
            var faces, localTransform = [];
            // ==== init script ====
            var screen = ge1doot.screen.init("screen", null, true);
            var pointer = screen.pointer.init({
                move: function() {
                    if (pointer.drag.y > 270) pointer.drag.y = 270;
                    if (pointer.drag.y < -270) pointer.drag.y = -270;
                }
            });
            faces = document.getElementById("scene").children;
            // ==== Easing ====
            function Ease(speed, val) {
                this.speed = speed;
                this.target = val;
                this.value = val;
            }
            Ease.prototype.ease = function(target) {
                    this.value += (target - this.value) * this.speed;
                }
                // ==== camera ====
            var camera = {
                    angle: {
                        x: 0,
                        y: 0,
                        ease: {
                            x: 0,
                            y: 0
                        }
                    },
                    pos: {
                        x: 0,
                        z: 0
                    },
                    vel: {
                        x: 0.1,
                        z: 0.2
                    },
                    fov: new Ease(0.01, 300),
                    move: function() {
                        this.angle.y = -(this.angle.ease.y += (pointer.drag.x - this.angle.ease.y) * 0.06) / 3;
                        this.angle.x = (this.angle.ease.x += (pointer.drag.y - this.angle.ease.x) * 0.06) / 3;
                        this.fov.ease(pointer.active ? 300 : 500);
                        var a = this.angle.y * Math.PI / 180;
                        var x = -Math.sin(a) * this.vel.x;
                        var z = Math.cos(a) * this.vel.z;
                        this.pos.x += x;
                        this.pos.z += z;
                        if (pointer.active) {
                            if ((this.pos.x > 190 && x > 0) || (this.pos.x < -190 && x < 0)) this.vel.x *= 0.9;
                            else {
                                if (this.vel.x < 0.1) this.vel.x = 1;
                                if (this.vel.x < 5) this.vel.x *= 1.1;
                            }
                            if ((this.pos.z > 190 && z > 0) || (this.pos.z < -190 && z < 0)) this.vel.z *= 0.9;
                            else {
                                if (this.vel.z < 0.1) this.vel.z = 1;
                                if (this.vel.z < 5) this.vel.z *= 1.1;
                            }
                        } else {
                            this.vel.x *= 0.9;
                            this.vel.z *= 0.9;
                        }
                        a = Math.cos(this.angle.x * Math.PI / 180);
                        var mx = -(1 * Math.cos((this.angle.y - 90) * Math.PI / 180) * a) * (500 - this.fov.value * 0.5);
                        var mz = -(1 * Math.sin((this.angle.y - 90) * Math.PI / 180) * a) * (500 - this.fov.value * 0.5);
                        var my = Math.sin(this.angle.x * Math.PI / 180) * 200;
                        return "perspective(" + this.fov.value + "px) rotateX(" + this.angle.x + "deg) " + "rotateY(" + this.angle.y + "deg) translateX(" + (this.pos.x + mx) + "px) translateY(" + my + "px) translateZ(" + (this.pos.z + mz) + "px)";
                    }
                }
                // ==== init faces ====
            for (var i = 0, n = faces.length; i < n; i++) {
                var elem = faces[i];
                var s = elem.getAttribute("data-transform");
                elem.style.transform = s;
                elem.style.webkitTransform = s;
                elem.style.visibility = "visible";
                localTransform.push(s);
            }
            // ==== main loop ====
            function run() {
                requestAnimationFrame(run);
                var globalcamera = camera.move();
                // ==== anim faces ====
                for (var i = 0, elem; elem = faces[i]; i++) {
                    var s = globalcamera + localTransform[i];
                    elem.style.transform = s;
                    elem.style.webkitTransform = s;
                }
            }
            // ==== start animation ====
            requestAnimationFrame(run);
        }
    }


    function createElement(tagName, style, attr) {
        var element = document.createElement(tagName);
        for (var key in style) {
            element['style'][key] = style[key];
        }
        for (var key in attr) {
            element.setAttribute(key, attr[key]);
        }
        document.querySelector('#scene').appendChild(element);
    }

    function createWall() {
        var x = gallery.x;
        var y = gallery.y;
        var z = gallery.z;
        var picUrl = gallery.picUrl;
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 4; j++) {
                if (i !== 0) {
                    // createElement('div', {
                    //     'width': '1000px',
                    //     'height': '600px',
                    //     'backgroundImage': 'url(' + picUrl + ')',
                    //     'backgroundPosition': j * x + ' 1000px ',
                    // }, {
                    //     'data-transform': 'rotateY(' + 90 * j + 'deg) translateZ(-500px)'
                    // });
                } else {
                    if (j < 2) {
                       // createElement('div', {
                       //      'width': '1000px',
                       //      'height': '1000px',
                       //      'backgroundImage': 'url(' + picUrl + ')',
                       //      'backgroundPosition': j * x + ' 0',
                       //  }, {
                       //      'data-transform': 'rotateX(' + (j === 0 ? '-' : '') + '90deg) translateZ(-' + z / 2 + 'px)',
                       //      'class': 'f'
                       //  });
                    }
                    
                }

            }
        }
    }

    createWall();

    document.addEventListener('DOMContentLoaded', gallery.init, false);
}();
