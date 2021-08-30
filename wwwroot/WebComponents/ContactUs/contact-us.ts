namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
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

    export class ContactUs extends Vidyano.WebComponents.WebComponent {
        contactInfo: Vidyano.Query; private _setContactInfo: (value: Vidyano.Query) => void;
        isBusy: boolean; private _setIsBusy:(isBusy: boolean) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetContactInfo");
            this._setContactInfo(query);

            this._setIsBusy(false);
        }
    }
}