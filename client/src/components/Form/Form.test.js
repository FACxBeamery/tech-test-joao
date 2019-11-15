import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Form from "./index.js";
import Provider from "../Provider";

describe("form works as expected", () => {
  test("entering 1 letter brings up autocomplete", () => {
    const { queryByTestId } = render(
      <Provider>
        <Form />
      </Provider>
    );
    const input = queryByTestId("test");
    let optionsList = queryByTestId("list");

    expect(optionsList).toBeNull();

    fireEvent.change(input, { target: { value: "l" } });
    optionsList = queryByTestId("list");
    expect(optionsList).toBeInTheDocument();
  });
  test("if 'l' is typed, London comes up as the active option", () => {
    const { queryByTestId, getByText } = render(
      <Provider>
        <Form />
      </Provider>
    );
    const input = queryByTestId("test");
    let optionsList = queryByTestId("list");

    expect(optionsList).toBeNull();

    fireEvent.change(input, { target: { value: "l" } });
    optionsList = queryByTestId("list");
    expect(optionsList).toBeInTheDocument();

    const londonOption = getByText("London");
    expect(londonOption).toHaveClass("option-active");
  });
});
