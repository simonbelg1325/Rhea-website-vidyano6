namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            currentRoute: Object,
            menu: {
                type: Object,
                readOnly: true
            }
        },
        mediaQueryAttributes: true
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
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
            case "MAINTENANCE":
                    this.app.changePath("maintenance");
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
            case "LEGACY":
                    this.app.changePath("legacy");
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
            case "ENHANCED":
                    this.app.changePath("enhanced");
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
            case "REFERENCES":
                    this.app.changePath("references");
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
            case "CONTACT US":
                    this.app.changePath("contact-us");
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
            case "HELPDESK":
                    window.location.href = "https://helpdesk.rhea.be";
                    this.querySelector(".sidebar-container").classList.toggle("open");
                    this.querySelector(".nav-icon").classList.toggle("open");
                    break;
                default:
                    this.app.changePath("");
            }
        }

        private _toggle(e: TapEvent) {
            this.querySelector(".nav-icon").classList.toggle("open");
            this.querySelector(".sidebar-container").classList.toggle("open");
        }
    }
}
