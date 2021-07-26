"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var Footer = (function (_super) {
            __extends(Footer, _super);
            function Footer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Footer.prototype.attached = function () {
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
                                this._setFooter(query);
                                return [2];
                        }
                    });
                });
            };
            Footer.prototype._changePage = function (e) {
                var footer = e.model.footer.values;
                switch (footer.NavItem) {
                    case "HOME":
                        this.app.changePath("");
                        break;
                    case "MAINTENANCE":
                        this.app.changePath("maintenance");
                        break;
                    case "LEGACY":
                        this.app.changePath("legacy");
                        break;
                    case "ENHANCED":
                        this.app.changePath("enhanced");
                        break;
                    case "REFERENCES":
                        this.app.changePath("references");
                        break;
                    case "CONTACT US":
                        this.app.changePath("contact-us");
                        break;
                    case "HELPDESK":
                        window.location.href = "https://helpdesk.rhea.be";
                        break;
                    default:
                        this.app.changePath("");
                }
            };
            Footer = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        footer: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        }
                    }
                }, "rhea")
            ], Footer);
            return Footer;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Footer = Footer;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
