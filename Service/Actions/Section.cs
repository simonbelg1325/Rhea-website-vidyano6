using System.ComponentModel.DataAnnotations;
using Vidyano.Service.Repository;

namespace Rhea.Service.Actions
{
    public class Section
    {
        [Key]
        public int Id { get; set; }
        public string SectionVideoUrl { get; set; }
        public string SectionHeader { get; set; }
        public string SectionTitle { get; set; }
        public bool LightBg { get; set; }
        public string? TopLine { get; set; }
        public string? Headline { get; set; }
        public string? Description { get; set; }
        public bool ImgStart { get; set; }
        public string? Image { get; set; }
        public string? Alt { get; set; }
        public string? VideoUrl { get; set; }
        public int Order { get; set; }
        public virtual NavSection NavSection { get; set; }


    }

    public class SectionActions : PersistentObjectActionsReference<RheaContext, Section>
    {
        public SectionActions(RheaContext context) : base(context) { }

        public override void OnSave(PersistentObject obj)
        {
            base.OnSave(obj);
        }
    }
}