import React from "react";
import { render, fireEvent } from "react-testing-library";

test("Przesłanie danych z formularza powoduje wyświetlenie ich jako listę", () => {
  const App = require("./App").App;
  const { getByText, container } = render(<App data={[]} />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test log"
    }
  });
  fireEvent.submit(container.querySelector("form"));

  getByText("test log");
});
