require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.API_KEY;

const getJobs = async (req, res) => {
  try {
    const { query } = req;
    const { city, resultsToTake } = query;

    const url = `https://www.reed.co.uk/api/1.0/search?locationName=${city}&resultsToTake=${resultsToTake}&distancefromlocation=5`;

    const response = await axios({
      method: "get",
      url,
      auth: {
        username: API_KEY
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .send(
        "There seems to be some issues with our server. Please wait while we try to fix it"
      );
  }
};

module.exports = getJobs;

/** FOR REFERENCE: RESULTS ETC
 * 
 * {
            "jobId": 39356924,
            "employerId": 618588,
            "employerName": "The People Collection",
            "employerProfileId": null,
            "employerProfileName": null,
            "jobTitle": "Junior Revenue Accountant",
            "locationName": "West London",
            "minimumSalary": 25000,
            "maximumSalary": 30000,
            "currency": "GBP",
            "expirationDate": "25/12/2019",
            "date": "13/11/2019",
            "jobDescription": " Accurately reconcile daily sales across all channels to funds received and manage timely and accurate reporting to the stakeholders. Review and reconcile daily reports to check for discrepancies and verify adherence to procedural guidelines. Initiate corrective  action, generate and maintain various logs for management review to ensure adherence to best practice. Provide outstanding customer service and work together with key areas including... ",
            "applications": 2,
            "jobUrl": "https://www.reed.co.uk/jobs/junior-revenue-accountant/39356924"
        }
    ],
    "ambiguousLocations": [],
    "totalResults": 10259
 */
