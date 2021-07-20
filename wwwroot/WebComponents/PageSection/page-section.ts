namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {}
    }, "rhea")

    export class PageSection extends Vidyano.WebComponents.WebComponent {
        async attached() {
            super.attached();
        }

        private _check(val: string, nav: string) {
            if (val === nav) return;
        }
    }
}
