import React from "react";
import { render } from "react-testing-library";
import { App } from "./App.js";

test("Poprawnie eksportuje i renderuje komponent App", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Witaj na/));
});
