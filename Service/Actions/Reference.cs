using System.ComponentModel.DataAnnotations;

namespace Rhea.Service.Actions
{
    public class Reference
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }
        public string Image { get; set; }
        public int Order { get; set; }
        public virtual NavSection NavSection { get; set; }


        public class ReferenceActions : PersistentObjectActionsReference<RheaContext, ReferenceActions>
        {
            public ReferenceActions(RheaContext context) : base(context) { }
        }

    }
}
