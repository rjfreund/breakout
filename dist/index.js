var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("Drawable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Duck", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Duck = /** @class */ (function () {
        function Duck() {
        }
        Duck.prototype.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            ctx.stroke();
        };
        return Duck;
    }());
    exports.Duck = Duck;
});
define("Layer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layer = /** @class */ (function () {
        function Layer() {
            this.contents = new Array();
        }
        Layer.prototype.push = function (drawable) {
            this.contents.push(drawable);
        };
        return Layer;
    }());
    exports.Layer = Layer;
});
define("Stage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Stage = /** @class */ (function () {
        function Stage() {
            var _this = this;
            this.layers = new Array();
            this.canvas = document.querySelector('canvas');
            this.context = this.canvas.getContext("2d");
            window.addEventListener('resize', function () { return _this.resizeCanvas(); });
            this.resizeCanvas();
        }
        Stage.prototype.draw = function () {
            for (var i = 0; i < this.layers.length; i++) {
                var layer = this.layers[i];
                for (var k = 0; k < layer.contents.length; k++) {
                    layer.contents[k].draw(this.context);
                }
            }
        };
        Stage.prototype.resizeCanvas = function () {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.draw();
        };
        return Stage;
    }());
    exports.default = Stage;
});
define("index", ["require", "exports", "Duck", "Stage", "Layer"], function (require, exports, Duck_1, Stage_1, Layer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Stage_1 = __importDefault(Stage_1);
    (function () {
        var stage = new Stage_1.default();
        var layer1 = new Layer_1.Layer();
        layer1.push(new Duck_1.Duck());
        stage.layers.push(layer1);
        stage.draw();
    })();
});
