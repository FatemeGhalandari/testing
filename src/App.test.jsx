import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "@jest/globals";

test("renders the component correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders list items", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});
test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("test1");
  expect(title).toBeInTheDocument();
});
test("renders sum", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("30");
});
