# otrade

## Project setup
```
yarn install
```
### Tools
* Docker
* Docker-compose
* 
# Developing
## Running the development environmnet
Bring up the database
```
docker-compose up -d
```
Deploy the database schema & generate typings
```
yarn prisma-update
```
Start the development server (with autorestart on file changes)
```
yarn debug
```

## Stopping the development environment
Ctrl + c out of the development server

To stop the prisma server run
```
docker-compose down
```