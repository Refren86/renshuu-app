#!/bin/bash
set -e

# Wait for the PostgreSQL server to be ready
until pg_isready -U postgres; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Restore the dump
pg_restore -U postgres -d renshuu-docker-db -v /docker-entrypoint-initdb.d/renshuu-db.dump

echo "Database restore completed!"