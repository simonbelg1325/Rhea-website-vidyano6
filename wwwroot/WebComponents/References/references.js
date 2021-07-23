"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var References = (function (_super) {
            __extends(References, _super);
            function References() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            References = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        references: {
                            type: Boolean,
                            value: true
                        }
                    }
                }, "rhea")
            ], References);
            return References;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.References = References;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
