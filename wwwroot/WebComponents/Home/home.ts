namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
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
            },
            isBusy: {
                type: Boolean,
                readOnly: true,
                value: true
            }
        }
    }, "rhea")

    export class Home extends Vidyano.WebComponents.WebComponent {
        section: Vidyano.PersistentObject; private _setSection: (value: Vidyano.PersistentObject) => void;
        info: Vidyano.Query; private _setInfo: (value: Vidyano.Query) => void;
        services: Vidyano.Query; private _setServices: (value: Vidyano.Query) => void;
        isBusy: boolean; private _setIsBusy:(isBusy: boolean) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetHomePageInfo");
            const servicesQuery = await this.service.getQuery("GetServices");
            this._setInfo(query);
            this._setServices(servicesQuery);
            this._setIsBusy(false);

        }
    }
}
