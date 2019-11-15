# Job Search Genie 

## Overview

Find relevant jobs in a UK city of your preference.

<a href="https://ibb.co/kH6hYLW"><img src="https://i.ibb.co/HFprmck/Screenshot-2019-11-15-at-09-52-03.png" alt="Screenshot-2019-11-15-at-09-52-03" border="0"></a>


## Technical Overview

This is a full stack app that uses `React.JS` on the client-side and `Express.JS` to build the server, on the backend, which will listen for requests coming from the frontend.

`DOCKER` was used to define and run this multi-container application: 
  - please see `Dockerfile-dev` in both `client` and `server` folders. Each of these files ensure the node dependencies are installed and necessary `npm` scripts are run
  - `docker-compose.yml` file creates and runs client and server containers.

### Testing
Client side with `react-testing-library` and `jest`.
Server side with `supertest`, `nock`, and `mocha`.

## 3rd Party API - reed.co.uk JobSeeker API

Find Documentation [here](https://www.reed.co.uk/developers/Jobseeker)

criteria used for the `GET` request: `locationName` and `resultsToTake`

> Minimum results retrieved by the API are 100 results. 


## Scripts

### `BEFORE YOU RUN ANY OTHER SCRIPT`

Please follow this [link](https://www.reed.co.uk/developers/Jobseeker) and click on the blue button `Sign up for a reed.co.uk API Key` in order to get a personal API KEY.

Once you have that key, please create a file called `.env` in `/server` folder with the following content:

```
API_KEY=YOURAPIKEY
```



### `To run locally`
  `npm i` in both `/server` and `/client`
  
  `docker-compose -f docker-compose.yml up --build` on root folder to run both services. 
  
  `npm run test` on both `/server` and `/client` to run respective test files

  




