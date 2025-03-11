Setting up the project:

The GraphQL server is using the PostgreSQL database with prisma ORM

Make sure that Postgres is installed - https://www.postgresql.org/download/

Optionally you can install pgAdmin, or other UI tools for managing the DB - https://www.pgadmin.org/download/

# Local set-up guide 
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


-- Other helpful stuff (my personal notes)
# Testing the dump file from docker:
1) Generate dump 
```pg_dump -U postgres -h localhost -p 5432 -d renshuu-app -F c -f renshuu-app.dump```

2) Enter Password

3) Start a PostgreSQL container
```docker run --name pg-test -e POSTGRES_PASSWORD=<password> -d postgres```

4) Restore the Dump File 
```docker cp renshuu-app.dump pg-test:/tmp/renshuu-app.dump```

5) Enter docker container terminal 
```docker exec -it pg-test bash```

6) Restore the dump 
```pg_restore -U postgres -d postgres /tmp/renshuu-app.dump```

7) Run PostgreSQL cli from container
```docker exec -it pg-test psql -U postgres```

8) Run some basic query
```SELECT * FROM "Flashcards";```

9) Do the cleanup
```
docker stop pg-test
docker rm pg-test
```

# Applying new dump
To apply a new dump V1:
1) Stop containers and remove volumes
```docker compose down -v```

2) Start containers again (this will apply the new dump)
```docker compose up```

To apply a new dump V2 (while container is running):
1) Copy the new dump file into the container
```docker cp ./server/db/renshuu-db.dump <db-container-name>:/tmp/```

2) Restore the database (dropping existing data)
```docker exec -it <db-container-name> pg_restore -U postgres -d renshuu-app -c -v /tmp/renshuu-db.dump```

# Compose up specific file:
```docker compose -f docker-compose.prod.yml up -d```