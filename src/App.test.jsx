import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "@jest/globals";

test("renders the component correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


