const assert = require("assert");
const express = require("express");
const supertest = require("supertest");
const router = require("../router");
const app = express();
const { citiesResponse } = require("../utils/dummyData/dummyResponse");

describe("GET /cities", () => {
    app.use(router);
    it("it shoud return status code 200 to indicate cities were retrieved", done => {
        supertest(app)
            .get(`/cities`)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    assert.equal(res.status, "200");
                    assert.deepEqual(res.body, citiesResponse);
                    done();
                }
            });
    });
});
