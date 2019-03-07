## venturus-sports-backend

## Project setup
```
npm install
npm install -g knex
```

## Create and seed the SQLite database
```
knex migrate:latest
knex seed:run user
```

## Run the server
```
npm run dev
```
