using System.ComponentModel.DataAnnotations;

namespace Rhea.Service.Actions
{
    public class OurService
    {
        [Key] public int Id { get; set; }

        public string Header { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public string Image { get; set; }
        public int Order { get; set; }
        public virtual NavSection NavSection { get; set; }

        public class OurServiceActions : PersistentObjectActionsReference<RheaContext, OurService>
        {
            public OurServiceActions(RheaContext context) : base(context)
            {
            }

        }
    }
}
