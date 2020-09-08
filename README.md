# Real Time Voting Project

[DEMO](https://real-time-voting-project.vercel.app/)

#### Overview

Real Time Voting project. See live voting entertainment franchise results.

#### Setup

* Clone the repo, `git clone git@github.com:braxtonb/real-time-voting-project.git`
* Start the project, `docker-compose up`

#### Technologies and Tools

*Frontend*
- React.js
- Next.js
- GraphQL
- Apollo Client
- Typescript

*Backend*
- Apollo Server
- Primsa
- Typescript

*Database*
- Postgres
- pgAdmin

*Hosting*
- Docker compose | frontend, backend, database, pgAdmin | local
- Vercel | frontend | production
- Heroku | backend, database (heroku add-on) | production

*Recommended*

I strongly recommend commenting out the site service in docker-compose.yml when actively developing.

The Next.js startup and hot reloading without docker is faster than with docker. To startup the site locally without docker, from the `real-time-voting` directory run `npm install && npm run dev`

Also, if you do not need to view your database with a GUI admin tool, I recommend commenting out the pgAdmin service in docker-compose.yml.

#### Deployment

*Frontend*

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fbraxtonb%2Freal-time-voting-project&env=API_GRAPHQL_PROD,API_GRAPHQL_WS_PROD&envDescription=The%20API_GRAPHQL_PROD%20and%20API_GRAPHQL_WS_PROD%20are%20used%20to%20connect%20to%20your%20production%20Apollo%20Server's%20https%20and%20websocket%20(wss)%20endpoints)

After clicking the deploy button, select the `real-time-voting` directory.

It is important to set the `API_GRAPHQL_PROD` and `API_GRAPHQL_WS_PROD` environment variables for any hosting solution you choose. The `API_GRAPHQL_PROD` and `API_GRAPHQL_WS_PROD` are used to connect to your production Apollo Server's https and websocket (wss) endpoints

*Backend*

- Create an app in Heroku and connect your github repository version of this application to it.
- Add your Heroku app's git URL (found on the settings tab in the Heroku dashboard) to your git remotes, `git remote add heroku <heroku-git-url>`
- Considering this a monorepo, rather than deploying through the Heroku dashboard, run `./deploy-api-heroku.sh`. The deploy script will handle deploying the `real-time-voting-api` sub directory to Heroku

*Database*

- On the Heroku dashboard's "Resources" tab, search for `Heroku Postgres` in the Add-ons search
- Follow the instructions to provision a FREE hobby dev level Postgres DB. This will automatically configure a required `DATABASE_URL` variable that allows the backend's Prisma client to properly generate models reflecting the state of the Postgres DB.
- With your method of choice, create `Franchise` and `Vote` tables in the Heroku Postgres DB. For table structure and seeding guidance, use the sql statements in the [real-time-voting-db/postgres/init](https://github.com/braxtonb/real-time-voting-project/blob/master/real-time-voting-db/postgres/init/10-franchise.sql) directory. Note, seeding and creating the tables is handled by these sql files automatically when locally developing with docker-compose. For more information, checkout the "Initialization Scripts" section here - https://hub.docker.com/_/postgres.