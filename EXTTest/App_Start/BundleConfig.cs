using System.Web;
using System.Web.Optimization;

namespace EXTTest
{
    public class BundleConfig
    {
        // 如需統合的詳細資訊，請瀏覽 https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // 使用開發版本的 Modernizr 進行開發並學習。然後，當您
            // 準備好可進行生產時，請使用 https://modernizr.com 的建置工具，只挑選您需要的測試。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Acess/Ext/ext-4.2.1.883/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/ext4css").Include(
                      "~/Acess/Ext/ext-4.2.1.883/resources/css/ext-all.css"));

            bundles.Add(new ScriptBundle("~/bundles/extjs").Include(
                           "~/Acess/Ext/ext-4.2.1.883/ext-all-debug.js", "~/Acess/Ext/ext-4.2.1.883/ext-all"
                          ));
            bundles.Add(new ScriptBundle("~/bundles/cou").Include(
                        "~/Acess/cou/View.js", "~/Acess/cou/list.js", "~/Acess/cou/A0001Panel.js"

                      ));



        }
    }
}
