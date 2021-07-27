"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var Home = (function (_super) {
            __extends(Home, _super);
            function Home() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Home.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var query, servicesQuery;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _a.sent();
                                return [4, this.service.getQuery("GetHomePageInfo")];
                            case 2:
                                query = _a.sent();
                                return [4, this.service.getQuery("GetServices")];
                            case 3:
                                servicesQuery = _a.sent();
                                this._setInfo(query);
                                this._setServices(servicesQuery);
                                return [2];
                        }
                    });
                });
            };
            Home = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        section: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        },
                        info: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        },
                        home: {
                            type: Boolean,
                            value: true
                        },
                        services: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        }
                    }
                }, "rhea")
            ], Home);
            return Home;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Home = Home;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
