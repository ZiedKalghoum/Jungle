using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class SwaggerServiceExtensions
    {
        public static IServiceCollection AddSwaggerDocumetation (this IServiceCollection services) {
            services.AddSwaggerGen (c => {
                c.SwaggerDoc ("v1", new OpenApiInfo { Title = "Jungle API", Version = "v1" });
            });
            return services;
        }
        public static IApplicationBuilder  UseSwaggerDocumentation(this IApplicationBuilder app){
            app.UseSwagger ();
            app.UseSwaggerUI (c => {
                c
                    .SwaggerEndpoint ("/swagger/v1/swagger.json", "Jungle API v1");
            });
            return app;
        }
    }
}