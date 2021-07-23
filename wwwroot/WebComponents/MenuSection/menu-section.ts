namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            main: {
                type: Object,
                readOnly:  true
            }
        }
    }, "rhea")

    export class MenuSection extends Vidyano.WebComponents.WebComponent {
        readonly main: Vidyano.Query; private _setMain:(value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetMenuBar");
            this._setMain(query);
        }

        private _home(value: string) {
            if (value === "HOME") {
                return true;
            }
            return false;
        }

        private _maintenance(value: string) {
            if (value === "MAINTENANCE") {
                return true;
            }
            return false;
        }

        private _legacy(value: string) {
            if (value === "LEGACY") {
                return true;
            }
            return false;
        }

        private _enhanced(value: string) {
            if (value === "ENHANCED") {
                return true;
            }
            return false;
        }

        private _references(value: string) {
            if (value === "REFERENCES") {
                return true;
            }
            return false;
        }

        private _contact(value: string) {
            if (value === "CONTACT US") {
                return true;
            }
            return false;
        }

    }
}
