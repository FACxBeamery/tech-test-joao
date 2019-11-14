const assert = require("assert");
const express = require("express");
const nock = require("nock");
const supertest = require("supertest");
const router = require("../router");
const app = express();
const { jobsResponse } = require("../utils/dummyData/dummyResponse");

describe("GET /jobs", () => {
    app.use(router);
    it("it shoud return status code 200 to indicate jobs were retrieved", done => {
        nock("https://www.reed.co.uk/api/1.0")
            .get("/search")
            .query(true)
            .reply(200, jobsResponse);

        supertest(app)
            .get(`/jobs`)
            .query({ city: "london", nrresults: "100" })
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    assert.equal(res.status, "200");
                    assert.deepEqual(res.body, jobsResponse);
                    done();
                }
            });
    });
});
