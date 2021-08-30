namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            legacy: {
                type: Boolean,
                value: true
            },
            info: {
                type: Object,
                readOnly: true,
                notify: true
            },
            isBusy: {
                type: Boolean,
                readOnly: true,
                value: true
            }
        }
    }, "rhea")

    export class Legacy extends Vidyano.WebComponents.WebComponent {
        info: Vidyano.Query; private _setInfo: (value: Vidyano.Query) => void;
        isBusy: boolean; private _setIsBusy:(isBusy: boolean) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetLegacyInfo");
            this._setInfo(query);
            this._setIsBusy(false);
        }
    }
}
