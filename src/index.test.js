import React from "react";
import { render, wait, fireEvent } from "react-testing-library";

test("Aplikacja nie próbuje połączyć się z api do czasu podania imienia", async () => {
  jest.mock("./api");
  const api = require("./api").api;

  const App = require("./App").App;
  render(<App />);

  expect(api.get).not.toHaveBeenCalled();
});

test("Aplikacja renderuje formularz logowania i nie pozwala na kontynuowanie jeżeli jest pusty", async () => {
  jest.mock("./api");

  const App = require("./App").App;
  const { getByText, container } = render(<App />);

  fireEvent.click(getByText(/Zaloguj/));
  getByText(/Podaj imię/);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "    "
    }
  });
  fireEvent.click(getByText(/Zaloguj/));
  getByText(/Podaj imię/);
});

test("Po poprawnym zalogowaniu, aplikacja renderuje pobrane z API dane", async () => {
  jest.mock("./api");

  const App = require("./App").App;
  const { getByText, container } = render(<App />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "Bartek"
    }
  });
  fireEvent.click(getByText(/Zaloguj/));

  await wait(() => getByText(/Test string/));
});

test("Próba wysłania danych wywołuje api.create z odpowiednim imieniem", async () => {
  jest.mock("./api");
  const api = require("./api").api;

  const App = require("./App").App;
  const { container, getByText } = render(<App />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "Bartek"
    }
  });
  fireEvent.click(getByText(/Zaloguj/));

  await wait(() => getByText(/Test string/));

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test post"
    }
  });
  fireEvent.submit(container.querySelector("form"));

  expect(api.create).toHaveBeenCalled();
  expect(api.create.mock.calls[0][0]).toMatch("Bartek");
});
