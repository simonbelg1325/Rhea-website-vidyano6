"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var PageSection = (function (_super) {
            __extends(PageSection, _super);
            function PageSection() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PageSection.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _super.prototype.attached.call(this);
                        return [2];
                    });
                });
            };
            PageSection = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {}
                }, "rhea")
            ], PageSection);
            return PageSection;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.PageSection = PageSection;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
