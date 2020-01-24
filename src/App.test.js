import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn jest link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn jest/i);
  expect(linkElement).toBeInTheDocument();
});
