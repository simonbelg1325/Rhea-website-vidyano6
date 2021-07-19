using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Rhea.Service;
using Vidyano.Service;
using Vidyano.Service.PostgreSQL;

namespace Rhea
{
    //@Admin!123
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }


        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddVidyanoPostgreSQL(Configuration);
            services.AddDbContext<RheaContext>(options =>
            {
                options.UseLazyLoadingProxies();
                options.UseNpgsql(Configuration.GetConnectionString("RheaContext"));
            });
            services.AddTransient<RequestScopeProvider<RheaContext>>();

            //services.Configure<CookiePolicyOptions>(options =>
            //    {
            //        options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
            //        options.OnAppendCookie = cookieContext =>
            //            CheckSameSite(cookieContext.Context, cookieContext.CookieOptions);
            //        options.OnDeleteCookie = cookieContext =>
            //            CheckSameSite(cookieContext.Context, cookieContext.CookieOptions);
            //    });

            //services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            //app.UseRouting();
            //app.UseCookiePolicy();
            //app.UseAuthentication();
            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapRazorPages();
            //});
            app.UseVidyano(env, Configuration);
            UpdateDatabase(app);
        }

        private static void UpdateDatabase(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices
                .GetRequiredService<IServiceScopeFactory>()
                .CreateScope();
            using var context = serviceScope.ServiceProvider.GetService<RheaContext>();
            context?.Database.Migrate();
        }

        //private void CheckSameSite(HttpContext httpContext, CookieOptions options)
        //{
        //    if (options.SameSite == SameSiteMode.Unspecified)
        //    {
        //        var userAgent = httpContext.Request.Headers["User-Agent"].ToString();
        //        if (MyUserAgentDetectionLib.DisallowsSameSiteNone(userAgent))
        //        {
        //            options.SameSite = SameSiteMode.None;
        //        }
        //    }
        //}

        //private static class MyUserAgentDetectionLib
        //{
        //    public static bool DisallowsSameSiteNone(string userAgent)
        //    {
        //        // Check if a null or empty string has been passed in, since this
        //        // will cause further interrogation of the useragent to fail.
        //        if (String.IsNullOrWhiteSpace(userAgent))
        //            return false;

        //        // Cover all iOS based browsers here. This includes:
        //        // - Safari on iOS 12 for iPhone, iPod Touch, iPad
        //        // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
        //        // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
        //        // All of which are broken by SameSite=None, because they use the iOS networking
        //        // stack.
        //        if (userAgent.Contains("CPU iPhone OS 12") ||
        //            userAgent.Contains("iPad; CPU OS 12"))
        //        {
        //            return true;
        //        }

        //        // Cover Mac OS X based browsers that use the Mac OS networking stack. 
        //        // This includes:
        //        // - Safari on Mac OS X.
        //        // This does not include:
        //        // - Chrome on Mac OS X
        //        // Because they do not use the Mac OS networking stack.
        //        if (userAgent.Contains("Macintosh; Intel Mac OS X 10_14") &&
        //            userAgent.Contains("Version/") && userAgent.Contains("Safari"))
        //        {
        //            return true;
        //        }

        //        // Cover Chrome 50-69, because some versions are broken by SameSite=None, 
        //        // and none in this range require it.
        //        // Note: this covers some pre-Chromium Edge versions, 
        //        // but pre-Chromium Edge does not require SameSite=None.
        //        if (userAgent.Contains("Chrome/5") || userAgent.Contains("Chrome/6"))
        //        {
        //            return true;
        //        }

        //        return false;
        //    }
        //}

    }
}
