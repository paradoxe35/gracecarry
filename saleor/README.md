## How to run it?

1. We are using shared folders to enable live code reloading. Without this, Docker Compose will not start:

   - Windows/MacOS: Add the cloned `saleor-platform` directory to Docker shared directories (Preferences -> Resources -> File sharing).
   - Windows/MacOS: Make sure that in Docker preferences you have dedicated at least 5 GB of memory (Preferences -> Resources -> Advanced).
   - Linux: No action is required, sharing is already enabled and memory for the Docker engine is not limited.

2. Go to the cloned directory:

```shell
cd saleor-platform
```

3. Apply Django migrations:

```shell
docker compose run --rm api python3 manage.py migrate
```

4. Populate the database with example data and create the admin user:

```shell
docker compose run --rm api python3 manage.py populatedb --createsuperuser
```

_Note that `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`._

5. Run the application:

```shell
docker compose up
```

## Where is the application running?

- Saleor Core (API) - http://localhost:8000
- Saleor Dashboard - http://localhost:9000
- Jaeger UI (APM) - http://localhost:16686
- Mailpit (Test email interface) - http://localhost:8025

# Troubleshooting

- [How to solve issues with lack of available space or build errors after an update](#how-to-solve-issues-with-lack-of-available-space-or-build-errors-after-an-update)
- [How to run application parts?](#how-to-run-application-parts)

## How to solve issues with lack of available space or build errors after an update

Most of the time both issues can be solved by cleaning up space taken by old containers. After that, we build again whole platform.

1. Make sure docker stack is not running

```shell
docker compose stop
```

2. Remove existing volumes

**Warning!** Proceeding will remove also your database container! If you need existing data, please remove only services that cause problems! https://docs.docker.com/compose/reference/rm/

```shell
docker compose rm
```

3. Build fresh containers

```shell
docker compose build
```

4. Now you can run a fresh environment using commands from `How to run it?` section. Done!

```shell
docker compose down --volumes db
```

</p>
</details>
   
## How to run application parts?
  - `docker compose up api worker` for backend services only
  - `docker compose up` for backend and frontend services
