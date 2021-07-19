using Vidyano.Service.Repository;

namespace Rhea.Service.Actions
{
    public abstract class PageInfo
    {
    }

    public class PageInfoActions : PersistentObjectActionsReference<RheaContext, PageInfo>
    {
        public PageInfoActions(RheaContext context) : base(context) { }



        public override void OnSave(PersistentObject obj)
        {
            obj.QueueQueryRefresh("GetHomePageInfo");
        }
    }
}
