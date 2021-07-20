namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            currentRoute: Object,
            menu: {
                type: Object,
                readOnly: true
            }
        }
    }, "rhea")

    export class Wrapper extends Vidyano.WebComponents.WebComponent {
        readonly menu: Vidyano.Query; private _setMenu:(value:  Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetMenuBar");
            this._setMenu(query);
        }

        private _isRoute(currentRoute: Vidyano.WebComponents.AppRoute, where: string) {
            if (currentRoute.route === "" && where === "home")
                return true;
            else if (currentRoute.route === where)
                return true;
        }


        private _changePath(e: TapEvent) {
            const menu = e.model.menu.values;

            switch (menu.NavItem) {
            case "HOME":
                    this.app.changePath("");
                    break;
            case "MAINTENANCE":
                    this.app.changePath("maintenance");
                    break;
            case "LEGACY":
                    this.app.changePath("legacy");
                    break;
            case "ENHANCED":
                    this.app.changePath("enhanced");
                    break;
            case "REFERENCES":
                    this.app.changePath("references");
                    break;
            case "CONTACT US":
                    this.app.changePath("contact-us");
                    break;
            case "HELPDESK":
                    window.location.href = "https://helpdesk.rhea.be";
                    break;
                default:
                    this.app.changePath("");
            }
        }
    }
}
