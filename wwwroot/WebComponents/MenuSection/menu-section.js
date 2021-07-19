"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var MenuSection = (function (_super) {
            __extends(MenuSection, _super);
            function MenuSection() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MenuSection.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _super.prototype.attached.call(this);
                        return [2];
                    });
                });
            };
            MenuSection = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {}
                }, "rhea")
            ], MenuSection);
            return MenuSection;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.MenuSection = MenuSection;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
