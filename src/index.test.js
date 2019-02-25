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
  const { container, getByText } = render(<App />);
  await wait(() => getByText("Test string"));

  /**
   * Musimy nieco oszukać.
   *
   * `container` wciąż wskazuje na oryginalny element, więc zawiera on treść "Trwa pobieranie danych".
   * Jednak jest on dopisywany do document.body, dlatego odwołujemy się do rodzica kontenera, gdzie dopisany
   * jest także nowy HTML.
   *
   * W prawdziwym projekcie, dodali byśmy do naszego inputa np. data-test pozwalający na wybranie go w testach.
   */
  fireEvent.change(container.parentNode.querySelector("input"), {
    target: {
      value: "test post"
    }
  });
  fireEvent.submit(container.parentNode.querySelector("form"));

  expect(api.create).toHaveBeenCalled();
});
