namespace Rhea.WebComponents {
    @
    Vidyano.WebComponents.WebComponent.register({
        properties: {
            currentRoute: Object
}
    }, "rhea")

    export class Wrapper extends Vidyano.WebComponents.WebComponent {
         private _isRoute(currentRoute: Vidyano.WebComponents.AppRoute, where: string) {
            if (currentRoute.route === "" && where === "home")
                return true;
            else if (currentRoute.route === where)
                return true;
        }

        private _home() {
            this.app.changePath("");
        }

        private _maintenance() {
            this.app.changePath("maintenance");
        }

        private _legacy() {
            this.app.changePath("legacy");
        }

        private _enhanced() {
            this.app.changePath("enhanced");
        }

        private _references() {
            this.app.changePath("references");
        }

        private _contactUs() {
            this.app.changePath("contact-us");
        }
    }
}
