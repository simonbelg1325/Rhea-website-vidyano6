using Microsoft.EntityFrameworkCore;
using Rhea.Service.Actions;
using Vidyano.Service;

namespace Rhea.Service
{
    public partial class RheaContext : TargetDbContext
    {
        public RheaContext(DbContextOptions<RheaContext> options)
            : base(options)
        { }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Reference> References { get; set; }
        public DbSet<OurService> OurServices { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<NavSection> NavSections { get; set; }
    }

}
