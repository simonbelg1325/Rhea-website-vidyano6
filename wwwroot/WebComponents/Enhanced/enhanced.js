"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var Enhanced = (function (_super) {
            __extends(Enhanced, _super);
            function Enhanced() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Enhanced.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _super.prototype.attached.call(this);
                        return [2];
                    });
                });
            };
            Enhanced = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        enhanced: {
                            type: Boolean,
                            value: true
                        }
                    }
                }, "rhea")
            ], Enhanced);
            return Enhanced;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Enhanced = Enhanced;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
