namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            legacy: {
                type: Boolean,
                value: true
            }
        }
    }, "rhea")

    export class Legacy extends Vidyano.WebComponents.WebComponent {
        async attached() {
            super.attached();
        }
    }
}
