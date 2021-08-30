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
                    var query;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _a.sent();
                                return [4, this.service.getQuery("GetLegacyInfo")];
                            case 2:
                                query = _a.sent();
                                this._setInfo(query);
                                this._setIsBusy(false);
                                return [2];
                        }
                    });
                });
            };
            Legacy = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        legacy: {
                            type: Boolean,
                            value: true
                        },
                        info: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        },
                        isBusy: {
                            type: Boolean,
                            readOnly: true,
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
