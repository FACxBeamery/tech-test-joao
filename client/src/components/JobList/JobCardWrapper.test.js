import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import dummyJobs from "../../utils/dummyJobsData";
import JobCardWrapper from "./JobCardWrapper";

describe("Testing if job cards get rendered in Job wrapper", () => {
  test("All jobs in data should be rendered", () => {
    const { getByText, getByTestId } = render(
      <JobCardWrapper jobs={dummyJobs} />
    );
    expect(getByText("Jobs available (100 results)")).toHaveClass("subheader");
    expect(getByTestId("list").children).toHaveLength(dummyJobs.length);
  });
});
