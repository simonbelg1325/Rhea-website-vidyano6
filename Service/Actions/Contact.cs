using System.ComponentModel.DataAnnotations;

namespace Rhea.Service.Actions
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        public string Address { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; }
        public string MapImage { get; set; }
        public virtual NavSection NavSection { get; set; }
    }

    public class ContactActions : PersistentObjectActionsReference<RheaContext, Contact>
    {
        public ContactActions(RheaContext context) : base(context) { }
    }
}
