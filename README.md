# Project URL:
https://renshuu-919923031785.us-central1.run.app

# Local set-up guide
1) Clone the repository
```git clone https://github.com/Refren86/renshuu-app.git```
2) Get .env files from me
3) Enter the root directory and run ```docker compose -f docker-compose.dev.yml up -d```
4) Go to http://localhost:3000

## The rest are my personal notes for developing and deploying

# Testing the dump file from docker:
1) Generate dump 
```pg_dump -U postgres -h localhost -p 5432 -d renshuu-app --no-owner --no-acl -F c -f ./server/db/renshuu-db.dump```

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
```pg-test psql -U postgres```

8) Run some basic query
```SELECT * FROM "Flashcards";```

9) Do the cleanup
```
docker stop pg-test
docker rm pg-test
```

# Applying new dump
To apply a new dump (while container is running):
1) Copy the new dump file into the container
```docker cp ./server/db/renshuu-db.dump <db-container-name>:/tmp/```

2) Restore the database (dropping existing data)
```docker exec -it <db-container-name> pg_restore -U postgres -d renshuu-app -c -v /tmp/renshuu-db.dump```

# Compose up specific file:
```docker compose -f docker-compose.prod.yml up -d```

# Rebuild project
```docker compose -f docker-compose.dev.yml down```
```docker compose -f docker-compose.dev.yml up --build -d```

# Adding access for docker commands for google cloud dev
```gcloud auth configure-docker us-central1-docker.pkg.dev```

# Tagging and pushing docker images to the google cloud repo
```docker tag renshuu-web us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/renshuu-web```
```docker push us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/renshuu-web```

```docker tag renshuu-backend us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/renshuu-backend```
```docker push us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/renshuu-backend```

```docker tag postgres:17-alpine us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/postgres:17-alpine```
```docker push us-central1-docker.pkg.dev/renshuu-457316/renshuu-repo/postgres:17-alpine```