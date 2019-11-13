const assert = require("assert");
const express = require("express");
const supertest = require("supertest");
const router = require("../router");
const app = express();
const bodyParser = require("body-parser");
const dummyResponse = require("../utils/dummyData/dummyResponse");

describe("GET /jobs", () => {
  app.use(bodyParser());
  app.use(router);
  it("it shoud return status code 200 to indicate jobs were retrieved", async () => {
    try {
      return supertest(app)
        .get("/jobs")
        .send({ city: "london", resultsToTake: "100" })
        .expect("Content-Type", /json/)
        .then(response => {
          console.log(response);

          assert.equal(200, response.statusCode);
        });
    } catch (err) {
      console.log(err);
    }
  });
});
