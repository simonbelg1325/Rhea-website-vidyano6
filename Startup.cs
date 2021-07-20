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

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
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
    }
}
