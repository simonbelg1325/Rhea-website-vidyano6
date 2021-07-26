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
                    var query;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _a.sent();
                                return [4, this.service.getQuery("GetMaintenanceInfo")];
                            case 2:
                                query = _a.sent();
                                this._setInfo(query);
                                return [2];
                        }
                    });
                });
            };
            Maintenance = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        maintenance: {
                            type: Boolean,
                            value: true
                        },
                        info: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        }
                    }
                }, "rhea")
            ], Maintenance);
            return Maintenance;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Maintenance = Maintenance;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
