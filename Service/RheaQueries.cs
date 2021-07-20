using Rhea.Service.Actions;
using System.Linq;
using Vidyano.Service.Repository;

namespace Rhea.Service
{
    partial class RheaContext
    {
        // NOTE: Contains the custom queries that can be used inside the application

        public IQueryable<Section> GetHomePageInfo(CustomQueryArgs e)
        {
            //var info = this.Sections.Where(x => x.NavSection.NavItem == "Home").Select(x => x);

            //return info.AsQueryable();

            var navItems = this.Sections.Select(x => x);

            return navItems.AsQueryable();
        }

        public IQueryable<Section> GetMenuItems(CustomQueryArgs e)
        {
            var navItems = this.Sections.Select(x => x);

            return navItems.AsQueryable();
        }
    }
}