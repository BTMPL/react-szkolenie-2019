import React from "react";
import { render, wait, fireEvent } from "react-testing-library";

test("komponent App pobiera listę danych przy montowaniu i wyświetla odpowiedni tekst", async () => {
  jest.mock("./api");
  const api = require("./api").api;

  const App = require("./App").App;
  const { getByText } = render(<App />);

  await wait(() => getByText("Test string"));
  expect(api.get).toHaveBeenCalled();
});

test("Próba wysłania danych wywołuje api.create", async () => {
  jest.mock("./api");
  const api = require("./api").api;

  const App = require("./App").App;
  const { container } = render(<App />);
  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test post"
    }
  });

  expect(api.create).toHaveBeenCalled();
});
