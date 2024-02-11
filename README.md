# Jungle
# generate migration 
1- dotnet ef migrations add InitialDatabase -p Infrastructure -s API
2- dotnet ef database update --project API
# identity Migration 
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
# Install certificat
-- excecute ssl certif in folder ssl
# Database
https://postgresapp.com/
https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.15/macos/

# gitignore
git rm --cached your_file_name

