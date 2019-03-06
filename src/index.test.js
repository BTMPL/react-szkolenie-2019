import React from "react";
import { render, wait, fireEvent, cleanup } from "react-testing-library";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("provider withChat", () => {
  test("do czasu pobrania danych zwraca stosowny komunikat", async () => {
    jest.mock("./api");
    const withChat = require("./providers/chat").withChat;

    const spy = jest.fn(({ data, isLoading }) => {
      return data ? data.map(i => i.message) : null;
    });

    const Component = withChat(spy);
    render(<Component />);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        create: expect.any(Function),
        data: undefined,
        isLoading: true
      }),
      // Komponent jest renderowany wraz z obiektem props, ignorujemy go
      expect.any(Object)
    );
  });

  test("przyjmuje komponent i renderuje go z odpowiednimi danymi", async () => {
    jest.mock("./api");
    const withChat = require("./providers/chat").withChat;

    const spy = jest.fn(({ data }) => {
      return data ? data.map(i => i.message) : null;
    });

    const Component = withChat(spy);
    const { getByText } = render(<Component />);

    await wait(() => getByText("Test string"));

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        create: expect.any(Function),
        data: expect.any(Array)
      }),
      expect.any(Object)
    );
  });
});

describe("Aplikacja", () => {
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

    fireEvent.change(container.parentNode.querySelector("input"), {
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

    fireEvent.change(container.parentNode.querySelector("input"), {
      target: {
        value: "Bartek"
      }
    });
    fireEvent.click(getByText(/Zaloguj/));

    await wait(() => getByText(/Test string/));

    fireEvent.change(container.parentNode.querySelector("input"), {
      target: {
        value: "test post"
      }
    });
    fireEvent.submit(container.parentNode.querySelector("form"));

    expect(api.create).toHaveBeenCalled();
    expect(api.create.mock.calls[0][0]).toMatch("Bartek");
  });
});
