# Notes
## Running the project
After you placed `.env` file in the root directory, you can run the application with following:

```
docker compose up -d --build
```

To be able to run tests, docker container must be up

```
docker compose up -d --build && cd backend && npm run test
```