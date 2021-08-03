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
            }
        }
    }, "rhea")

    export class ContactUs extends Vidyano.WebComponents.WebComponent {
        contactInfo: Vidyano.Query; private _setContactInfo: (value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetContactInfo");
            this._setContactInfo(query);
        }
    }
}