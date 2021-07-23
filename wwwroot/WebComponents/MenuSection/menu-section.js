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
                    var query;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _a.sent();
                                return [4, this.service.getQuery("GetMenuBar")];
                            case 2:
                                query = _a.sent();
                                this._setMain(query);
                                return [2];
                        }
                    });
                });
            };
            MenuSection.prototype._home = function (value) {
                if (value === "HOME") {
                    return true;
                }
                return false;
            };
            MenuSection.prototype._maintenance = function (value) {
                if (value === "MAINTENANCE") {
                    return true;
                }
                return false;
            };
            MenuSection.prototype._legacy = function (value) {
                if (value === "LEGACY") {
                    return true;
                }
                return false;
            };
            MenuSection.prototype._enhanced = function (value) {
                if (value === "ENHANCED") {
                    return true;
                }
                return false;
            };
            MenuSection.prototype._references = function (value) {
                if (value === "REFERENCES") {
                    return true;
                }
                return false;
            };
            MenuSection.prototype._contact = function (value) {
                if (value === "CONTACT US") {
                    return true;
                }
                return false;
            };
            MenuSection = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        main: {
                            type: Object,
                            readOnly: true
                        }
                    }
                }, "rhea")
            ], MenuSection);
            return MenuSection;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.MenuSection = MenuSection;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
