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
            var info = this.Sections.Where(x => x.NavSection.NavItem == "HOME").Select(x => x);

            return info.AsQueryable();
        }

        public IQueryable<Section> GetMaintenanceInfo(CustomQueryArgs e)
        {
            var info = this.Sections.Where(x => x.NavSection.NavItem == "MAINTENANCE").Select(x => x);

            return info.AsQueryable();
        }

        public IQueryable<Section> GetLegacyInfo(CustomQueryArgs e)
        {
            var info = this.Sections.Where(x => x.NavSection.NavItem == "LEGACY").Select(x => x);

            return info.AsQueryable();
        }

        public IQueryable<Section> GetEnhancedInfo(CustomQueryArgs e)
        {
            var info = this.Sections.Where(x => x.NavSection.NavItem == "ENHANCED").Select(x => x);

            return info.AsQueryable();
        }

        public IQueryable<Reference> GetReferencesInfo(CustomQueryArgs e)
        {
            var info = this.References.Select(x => x);

            return info.AsQueryable();
        }

        public IQueryable<Section> GetMenuItems(CustomQueryArgs e)
        {
            var navItems = this.Sections.Select(x => x);

            return navItems.AsQueryable();
        }
    }
}