"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var Wrapper = (function (_super) {
            __extends(Wrapper, _super);
            function Wrapper() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Wrapper.prototype.attached = function () {
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
                                this._setMenu(query);
                                return [2];
                        }
                    });
                });
            };
            Wrapper.prototype._isRoute = function (currentRoute, where) {
                if (currentRoute.route === "" && where === "home")
                    return true;
                else if (currentRoute.route === where)
                    return true;
            };
            Wrapper.prototype._changePath = function (e) {
                var menu = e.model.menu.values;
                switch (menu.NavItem) {
                    case "HOME":
                        this.app.changePath("");
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    case "MAINTENANCE":
                        this.app.changePath("maintenance");
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    case "LEGACY":
                        this.app.changePath("legacy");
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    case "ENHANCED":
                        this.app.changePath("enhanced");
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    case "REFERENCES":
                        this.app.changePath("references");
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    case "CONTACT US":
                        this.app.changePath("contact-us");
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    case "HELPDESK":
                        window.location.href = "https://helpdesk.rhea.be";
                        this.querySelector(".sidebar-container").classList.toggle("open");
                        this.querySelector(".nav-icon").classList.toggle("open");
                        break;
                    default:
                        this.app.changePath("");
                }
            };
            Wrapper.prototype._toggle = function (e) {
                this.querySelector(".nav-icon").classList.toggle("open");
                this.querySelector(".sidebar-container").classList.toggle("open");
            };
            Wrapper = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        currentRoute: Object,
                        menu: {
                            type: Object,
                            readOnly: true
                        }
                    },
                    mediaQueryAttributes: true
                }, "rhea")
            ], Wrapper);
            return Wrapper;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Wrapper = Wrapper;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
