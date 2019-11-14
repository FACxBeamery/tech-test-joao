import React from "react";
import withContext from "../Consumer";
import styles from "./JobList.module.css";
import SubHeader from "../SubHeader";

function decodeEntities(encodedString) {
  //https://stackoverflow.com/a/44195856
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">"
  };
  return encodedString
    .replace(translate_re, function(match, entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
}
const JobCard = ({
  jobTitle,
  employerName,
  jobDescription,
  jobUrl,
  locationName
}) => {
  return (
    <div className={styles["card"]}>
      <p className={styles["card-title"]}>{jobTitle}</p>
      <p>From: {employerName}</p>
      <p>Description: {jobDescription}</p>
      <p className={styles["card-link"]}>
        <a href={jobUrl} target="_blank">
          Apply Here
        </a>
      </p>
      <p>Location: {locationName}</p>
    </div>
  );
};
const JobList = ({ context }) => {
  const { jobs } = context;

  const JobsWrapper = () => (
    <div>
      <div className={styles["wrapper"]}>
        <SubHeader>Jobs available (100 results)</SubHeader>
        {jobs.map(job => {
          const {
            jobId,
            jobTitle,
            employerName,
            jobDescription,
            jobUrl,
            locationName
          } = job;

          return (
            <JobCard
              key={jobId}
              jobTitle={jobTitle}
              employerName={employerName}
              jobDescription={decodeEntities(jobDescription)}
              locationName={locationName}
              jobUrl={jobUrl}
            />
          );
        })}
      </div>
    </div>
  );
  return jobs ? (
    <div>
      <JobsWrapper />
    </div>
  ) : (
    <span></span>
  );
};

export default withContext(JobList);

// {
//     "jobId": 39363503,
//     "employerId": 410852,
//     "employerName": "Accountable Recruitment",
//     "employerProfileId": null,
//     "employerProfileName": null,
//     "jobTitle": "Assistant Management Accountant",
//     "locationName": "Newton-le-Willows",
//     "minimumSalary": 28000.00,
//     "maximumSalary": 30000.00,
//     "currency": "GBP",
//     "expirationDate": "26/12/2019",
//     "date": "14/11/2019",
//     "jobDescription": " Assistant Management Accountant&#163;28,000 - &#163;30,000 &#43; study support  An expanding business based in Newton-Le-Willows are currently recruiting for an Assistant Management Accountant to join its growing team.  Reporting directly to the finance manager you will be responsible for the end to end production of management accounts. This is an ideal role for someone with Advanced Excel and is looking for a new ... ",
//     "applications": 0,
//     "jobUrl": "https://www.reed.co.uk/jobs/assistant-management-accountant/39363503"
// },
