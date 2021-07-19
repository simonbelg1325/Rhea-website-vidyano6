"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var Maintenance = (function (_super) {
            __extends(Maintenance, _super);
            function Maintenance() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Maintenance = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {}
                }, "rhea")
            ], Maintenance);
            return Maintenance;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Maintenance = Maintenance;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
