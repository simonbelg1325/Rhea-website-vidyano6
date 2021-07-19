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
            Enhanced = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {}
                }, "rhea")
            ], Enhanced);
            return Enhanced;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Enhanced = Enhanced;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
