namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            maintenance: {
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

    export class Maintenance extends Vidyano.WebComponents.WebComponent {
        info: Vidyano.Query; private _setInfo:(value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetMaintenanceInfo");
            this._setInfo(query);
        }
    }
}