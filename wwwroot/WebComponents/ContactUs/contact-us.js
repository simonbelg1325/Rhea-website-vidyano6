"use strict";
var Rhea;
(function (Rhea) {
    var WebComponents;
    (function (WebComponents) {
        var ContactUs = (function (_super) {
            __extends(ContactUs, _super);
            function ContactUs() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContactUs.prototype.attached = function () {
                _super.prototype.attached.call(this);
            };
            ContactUs = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        contact: {
                            type: Boolean,
                            value: true
                        }
                    }
                }, "rhea")
            ], ContactUs);
            return ContactUs;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.ContactUs = ContactUs;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
