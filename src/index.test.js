import React from "react";
import { render, wait, fireEvent, cleanup } from "react-testing-library";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Aplikacja", () => {
  test("Po poprawnym zalogowaniu, aplikacja renderuje pobrane z API dane jako Message, po zmianie jako Bubble", async () => {
    jest.mock("./api");
    const mockMessage = jest.fn(props => {
      return props.message;
    });

    const mockBubble = jest.fn(props => {
      return props.message;
    });

    jest.mock("./Message", () => ({
      Message: mockMessage,
      Bubble: mockBubble
    }));

    const App = require("./App").App;
    const { getByText, container } = render(<App />);

    fireEvent.change(container.parentNode.querySelector("input"), {
      target: {
        value: "Bartek"
      }
    });
    fireEvent.click(getByText(/Zaloguj/));

    await wait(() => getByText(/Test string/));

    expect(mockMessage).toHaveBeenCalled();
    expect(mockBubble).not.toHaveBeenCalled();

    fireEvent.click(getByText(/Wyświetl jako bąbelki/));
    expect(mockBubble).toHaveBeenCalled();
  });
});
