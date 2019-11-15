# Job Search Genie 

## Overview
Find relevant jobs in a UK city of your preference.

## Technical Overview
This is a full stack app that uses `React.JS` on the client-side and `Express.JS` on the backend to listen for requests coming from the front end.


## 3rd Party API - reed.co.uk JobSeeker API

Find Documentation [here](https://www.reed.co.uk/developers/Jobseeker)

criteria used for the `GET` request: `locationName` and `resultsToTake`


## Scripts

### `BEFORE YOU RUN ANY OTHER SCRIPT`

Please follow this [link](https://www.reed.co.uk/developers/Jobseeker) and click on the blue button `Sign up for a reed.co.uk API Key` in order to get a personal API KEY
Once you have that key, please create a file called `.env` in `/server` folder with the following content:

```
API_KEY=YOURAPIKEY
```



### `To run locally`
  `npm i` in both `/server` and `/client`
  `docker-compose -f docker-compose.yml up --build` on root folder to run both services. 
  `npm run test` on both `/server` and `/client` to run respective test files
  




