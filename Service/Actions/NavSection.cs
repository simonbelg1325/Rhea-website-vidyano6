using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Vidyano.Service.Repository;

namespace Rhea.Service.Actions
{
    public class NavSection
    {
        [Key] public int Id { get; set; }

        public string NavItem { get; set; }
        public string? NavSectionHeader { get; set; }
        public string? NavSectionTitle { get; set; }
        public string? NavSectionVideo { get; set; }
        public int Order { get; set; }



        public class NavSectionActions : PersistentObjectActionsReference<RheaContext, NavSection>
        {
            public NavSectionActions(RheaContext context) : base(context)
            {
            }

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

