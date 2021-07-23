"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var Legacy = (function (_super) {
            __extends(Legacy, _super);
            function Legacy() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Legacy.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _super.prototype.attached.call(this);
                        return [2];
                    });
                });
            };
            Legacy = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        legacy: {
                            type: Boolean,
                            value: true
                        }
                    }
                }, "rhea")
            ], Legacy);
            return Legacy;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Legacy = Legacy;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
