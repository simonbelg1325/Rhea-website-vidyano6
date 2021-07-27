using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Vidyano.Service.Repository;

namespace Rhea.Service.Actions
{
    public class Reference
    {
        [Key]
        public int Id { get; set; }
        public string Image { get; set; }
        public int Order { get; set; }
        public virtual NavSection NavSection { get; set; }


        public class ReferenceActions : PersistentObjectActionsReference<RheaContext, Reference>
        {
            public ReferenceActions(RheaContext context) : base(context) { }

            public override void OnNew(PersistentObject obj, PersistentObject? parent, Query? query, Dictionary<string, string>? parameters)
            {
                base.OnNew(obj, parent, query, parameters);
            }

            public override void OnSave(PersistentObject obj)
            {
                base.OnSave(obj);
            }
        }

    }
}
