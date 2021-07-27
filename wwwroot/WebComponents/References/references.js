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
            References.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var query;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _a.sent();
                                return [4, this.service.getQuery("GetReferencesInfo")];
                            case 2:
                                query = _a.sent();
                                this._setInfo(query);
                                console.log(query);
                                return [2];
                        }
                    });
                });
            };
            References = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        references: {
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
            ], References);
            return References;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.References = References;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
