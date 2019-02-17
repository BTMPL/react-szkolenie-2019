import React from "react";
import { render } from "react-testing-library";
import { App } from "./App.js";
import { Message } from "./Message.js";

test("Poprawnie eksportuje i renderuje komponent Message", () => {
  const { getByText } = render(<Message />);
  expect(getByText(/To jest przyk/));
});

test("Komponent App poprawnie renderuje Message", () => {
  const { getByText } = render(<App />);
  expect(getByText(/To jest przyk/));
});
