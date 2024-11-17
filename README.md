Setting up the project:

The GraphQL server is using the PostgreSQL database with prisma ORM

Make sure that Postgres is installed - https://www.postgresql.org/download/

Optionally you can install pgAdmin, or other UI tools for managing the DB - https://www.pgadmin.org/download/

1) Clone the repository
```git clone https://github.com/Refren86/renshuu-app.git```
2) Enter the root directory and run ```npm i```
3) Install server modules - ```cd server && npm i```
4) Create .env file inside server directory and copy the content from .env.example, make sure that data is changed inside angle brackets
Next create a db and populate it with mock data
-h = host; -p = port; -U = user
5) Create DB - ```createdb -h localhost -p 5432 -U postgres renshuu-app```
6) Initialize backup dump - ```pg_restore --verbose --clean --no-acl --no-owner -h localhost -U postgres -d renshuu-app ./db/renshuu-db.dump```
7) Run both server and client ```cd ../ && npm run go```
