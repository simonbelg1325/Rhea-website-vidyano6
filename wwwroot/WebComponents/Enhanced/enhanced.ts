namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            enhanced: {
                type: Boolean,
                value: true
            },
            info: {
                type: Object,
                readOnly: true,
                notify: true
            }
        }
    }, "rhea")

    export class Enhanced extends Vidyano.WebComponents.WebComponent {
        info: Vidyano.Query; private _setInfo: (value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetEnhancedInfo");
            this._setInfo(query);
        }
    }
}
