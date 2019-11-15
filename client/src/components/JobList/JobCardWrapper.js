import React from "react";
import styles from "./JobList.module.css";
import SubHeader from "../SubHeader";

import { decodeEntities } from "../../utils/decodeEntities";

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
      <p>
        {" "}
        <strong>From: </strong>
        {employerName}
      </p>
      <p>
        {" "}
        <strong>Description: </strong> {jobDescription}
      </p>
      <p className={styles["card-link"]}>
        <a href={jobUrl} rel="noopener noreferrer" target="_blank">
          Apply Here
        </a>
      </p>
      <p>
        {" "}
        <strong>Location: </strong>
        {locationName}
      </p>
    </div>
  );
};

const JobCardWrapper = ({ jobs }) => (
  <div>
    <SubHeader>Jobs available (100 results)</SubHeader>
    <div className={styles["wrapper"]} data-testid="list">
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

export default JobCardWrapper;
