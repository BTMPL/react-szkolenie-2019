import React from "react";
import { render, fireEvent } from "react-testing-library";

test("Dla braku listy, ukrywa formularz i pokazuje stosowny komunikat", () => {
  const App = require("./App").App;
  const { getByText, container } = render(<App data={undefined} />);

  getByText(/Trwa pobieranie danych/);
  expect(container.querySelectorAll("input").length).toBe(0);
});

test("Dla pustej listy, wyświetla formularz i stosowny komunikat", () => {
  const App = require("./App").App;
  const { getByText, container } = render(<App data={[]} />);

  getByText(/Brak danych/);
  expect(container.querySelectorAll("input").length).toBe(1);
});
