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
            Wrapper.prototype._isRoute = function (currentRoute, where) {
                if (currentRoute.route === "" && where === "home")
                    return true;
                else if (currentRoute.route === where)
                    return true;
            };
            Wrapper.prototype._home = function () {
                this.app.changePath("");
            };
            Wrapper.prototype._maintenance = function () {
                this.app.changePath("maintenance");
            };
            Wrapper.prototype._legacy = function () {
                this.app.changePath("legacy");
            };
            Wrapper.prototype._enhanced = function () {
                this.app.changePath("enhanced");
            };
            Wrapper.prototype._references = function () {
                this.app.changePath("references");
            };
            Wrapper.prototype._contactUs = function () {
                this.app.changePath("contact-us");
            };
            Wrapper = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        currentRoute: Object
                    }
                }, "rhea")
            ], Wrapper);
            return Wrapper;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Wrapper = Wrapper;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
