import React from "react";
import { render, wait, fireEvent, cleanup } from "react-testing-library";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("ChatProvider", () => {
  test("renderuje przekazane dziecko z odpowiednimi danymi", () => {
    jest.mock("./api");
    const ChatProvider = require("./providers/chat.js").ChatProvider;
    const spy = jest.fn(() => null);
    render(<ChatProvider>{spy}</ChatProvider>);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        isLoading: true,
        data: undefined,
        create: expect.any(Function)
      })
    );
  });
});

describe("Aplikacja", () => {
  test("Po zalogowaniu aplikacja pokazuje nagłówek, po pobraniu danych, nagłówek nie ulega re-renderowaniu", async () => {
    jest.mock("./api");

    const App = require("./App").App;
    const { getByText, container } = render(<App />);

    fireEvent.change(container.parentNode.querySelector("input"), {
      target: {
        value: "Bartek"
      }
    });
    fireEvent.click(getByText(/Zaloguj/));
    const h1 = container.querySelector("h1").innerText;

    await wait(() => getByText(/Test string/));

    expect(container.querySelector("h1").innerText).toBe(h1);
  });
});
