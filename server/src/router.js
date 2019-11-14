const express = require("express");

const router = express();

const getJobs = require("./handlers/getJobs");
const getCities = require("./handlers/getCities");

router.get("/jobs", getJobs);
router.get("/cities", getCities);

module.exports = router;
