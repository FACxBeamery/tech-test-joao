import React from "react";
import withContext from "../Consumer";

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
