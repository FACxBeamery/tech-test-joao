import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SubHeader from "./index";

test("renders the SubHeader component with dummy children props", () => {
  const { container } = render(<SubHeader>test props</SubHeader>);
  expect(container.firstChild).toContainHTML("<h2>test props</h2>");
});
