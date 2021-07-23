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
                    var _a, query;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _b.sent();
                                _a = this._setSection;
                                return [4, this.service.getPersistentObject(null, "PageInfo", null, false)];
                            case 2:
                                _a.apply(this, [_b.sent()]);
                                return [4, this.section.getQuery("GetHomePageInfo")];
                            case 3:
                                query = _b.sent();
                                return [4, query.search()];
                            case 4:
                                _b.sent();
                                return [4, this._setInfo(query)];
                            case 5:
                                _b.sent();
                                return [2];
                        }
                    });
                });
            };
            Home.prototype._sizeChanged = function () {
                Polymer.dom(this.root).querySelector("#list").fire("iron-resize");
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
                        }
                    }
                }, "rhea")
            ], Home);
            return Home;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Home = Home;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
