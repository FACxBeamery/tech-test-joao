import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./index";

test("renders the Header component with dummy props", () => {
  const { container } = render(<Header>test props</Header>);
  expect(container.firstChild).toContainHTML(
    "<header><h1>test props</h1></header>"
  );
});
