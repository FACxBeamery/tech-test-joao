import React, { useState } from "react";
import withContext from "../Consumer";
import styles from "./JobList.module.css";
import SubHeader from "../SubHeader";

import JobCardWrapper from "./JobCardWrapper";

const JobList = ({ context }) => {
  const { jobs } = context;
  return jobs ? (
    <div>
      <JobCardWrapper jobs={jobs} data-testid="jobswrapper" />
    </div>
  ) : (
    <span></span>
  );
};

export default withContext(JobList);
