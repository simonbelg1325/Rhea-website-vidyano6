namespace Rhea.WebComponents {
    @
    Vidyano.WebComponents.WebComponent.register({
        properties: {
            header: {
                type: String
            },
            titleSection: {
                type: String
            },
            topLine: {
                type: String,
                readOnly: true
            },
            headline: {
                type: String
            },
            section: {
                type: Object,
                readOnly: true,
                notify: true
            },
            info: {
                type: Object,
                readOnly: true,
                notify: true
            }
        },
        //forwardObservers:["info.items"]
    }, "rhea")

    export class Home extends Vidyano.WebComponents.WebComponent {
        header: String; private _setHeader: (value: string) => void;
        titleHome: String; private _setTitleHome: (value: string) => void;
        topLine: String; private _setTopLine: (value: string) => void;
        headline: String; private _setHeadline: (value: string) => void;
        section: Vidyano.PersistentObject; private _setSection: (value: Vidyano.PersistentObject) => void;
        info: Vidyano.Query; private _setInfo:(value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            this._setSection(await this.service.getPersistentObject(null, "PageInfo", null, false));
            const query = await this.section.getQuery("GetHomePageInfo");
            await query.search();
            await this._setInfo(query);
            console.log(this.section);

        }

        private _sizeChanged() {
            (<any>Polymer.dom(this.root).querySelector("#list")).fire("iron-resize");
        }

        private _setPageInfo(information: any) {

        }
    }
}
