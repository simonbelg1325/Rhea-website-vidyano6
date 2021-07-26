namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            footer: {
                type: Object,
                readOnly: true,
                notify: true
            }
        }
    }, "rhea")

    export class Footer extends Vidyano.WebComponents.WebComponent {
        footer: Vidyano.Query; private _setFooter: (value: Vidyano.Query) => void;

        async attached() {
            super.attached();
            await this.app.initialize;
            const query = await this.service.getQuery("GetMenuBar");
            this._setFooter(query);
        }

        private _changePage(e: TapEvent) {
            const footer = e.model.footer.values;

            switch (footer.NavItem) {
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
