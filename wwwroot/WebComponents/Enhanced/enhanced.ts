namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            enhanced: {
                type: Boolean,
                value: true
            }
        }
    }, "rhea")

    export class Enhanced extends Vidyano.WebComponents.WebComponent {
        async attached() {
            super.attached();
        }
    }
}
