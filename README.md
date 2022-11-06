# Jungle
# generate migration 
1- dotnet ef migrations add InitialDatabase -p Infrastructure -s API
2- dotnet ef database update
-- identity migration
dotnet ef migrations add IdentityInitial -p Infrastructure -s API -c AppIdentityDbContext -o Identity/Migrations
# run API
dotnet run --project API
# run cli
1- run redis server: redis-server
2- run redis cli : redis-cli
3- ping
4- stop redis : shutdown
# Client Side
1- ng g m moduleName-routing --flat
2- ng g c componentName --flat --skip-tests
# Identity Connection JWT
1- install packages:
a- Microsoft.aspnetCore.Identity.EntityFramework ==> core project
b- Microsoft.aspnetCore.Identity ==> infrastructure project 
c- Microsoft.identityModels.Tokens ==> infrastructure project
d- System.IdentityModel.Tokens.Jwt ==> infrastructure project  
e- Microsoft.AspNetCore.Authentication.JwtBearer ==> API project


