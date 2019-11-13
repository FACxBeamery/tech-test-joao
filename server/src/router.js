const express = require("express");

const router = express();

const getJobs = require("./handlers/getJobs");

router.get("/jobs", getJobs);

module.exports = router;
