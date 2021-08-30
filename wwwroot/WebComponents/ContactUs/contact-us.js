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
                return __awaiter(this, void 0, void 0, function () {
                    var query;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                return [4, this.app.initialize];
                            case 1:
                                _a.sent();
                                return [4, this.service.getQuery("GetContactInfo")];
                            case 2:
                                query = _a.sent();
                                this._setContactInfo(query);
                                this._setIsBusy(false);
                                return [2];
                        }
                    });
                });
            };
            ContactUs = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        contact: {
                            type: Boolean,
                            value: true
                        },
                        contactInfo: {
                            type: Object,
                            readOnly: true,
                            notify: true
                        },
                        isBusy: {
                            type: Boolean,
                            readOnly: true,
                            value: true
                        }
                    },
                    mediaQueryAttributes: true
                }, "rhea")
            ], ContactUs);
            return ContactUs;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.ContactUs = ContactUs;
    })(WebComponents = Rhea.WebComponents || (Rhea.WebComponents = {}));
})(Rhea || (Rhea = {}));
