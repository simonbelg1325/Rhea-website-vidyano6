namespace Rhea.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            contact: {
                type: Boolean,
                value: true
            }
        }
    }, "rhea")

    export class ContactUs extends Vidyano.WebComponents.WebComponent {
        attached() {
            super.attached();
        }
    }
}