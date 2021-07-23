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
            Maintenance.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _super.prototype.attached.call(this);
                        return [2];
                    });
                });
            };
            Maintenance = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        maintenance: {
                            type: Boolean,
                            value: true
                        }
                    }
                }, "rhea")
            ], Maintenance);
            return Maintenance;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Maintenance = Maintenance;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
