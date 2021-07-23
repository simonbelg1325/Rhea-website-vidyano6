namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            maintenance: {
                type: Boolean,
                value: true
            }
        }
    }, "rhea")

    export class Maintenance extends Vidyano.WebComponents.WebComponent {

        async attached() {
            super.attached();
        }
    }
}