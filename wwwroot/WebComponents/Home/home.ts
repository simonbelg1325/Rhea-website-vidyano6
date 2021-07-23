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
            }
        }
    }, "rhea")

    export class Home extends Vidyano.WebComponents.WebComponent {
        section: Vidyano.PersistentObject; private _setSection: (value: Vidyano.PersistentObject) => void;
        info: Vidyano.Query; private _setInfo: (value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            this._setSection(await this.service.getPersistentObject(null, "PageInfo", null, false));
            const query = await this.section.getQuery("GetHomePageInfo");
            await query.search();
            await this._setInfo(query);

        }

        private _sizeChanged() {
            (<any>Polymer.dom(this.root).querySelector("#list")).fire("iron-resize");
        }

    }
}
