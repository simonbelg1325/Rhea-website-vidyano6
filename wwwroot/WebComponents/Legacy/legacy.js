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
            Legacy = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {}
                }, "rhea")
            ], Legacy);
            return Legacy;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Legacy = Legacy;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
