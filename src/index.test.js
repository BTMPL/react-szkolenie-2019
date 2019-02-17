import React from "react";
import { render, fireEvent } from "react-testing-library";

test("Próba wysłania formularza wyświetla wpisane w niego dane", () => {
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const App = require("./App").App;
  const { container } = render(<App data={[]} />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test alert"
    }
  });
  fireEvent.submit(container.querySelector("form"));

  expect(global.alert).toHaveBeenCalledWith("test alert");
});

test("Pusty formularz nie przesyła danych do rodzica", () => {
  jest.restoreAllMocks();
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const App = require("./App").App;
  const { container } = render(<App data={[]} />);
  fireEvent.submit(container.querySelector("form"));

  expect(global.alert).not.toHaveBeenCalled();
});

test("Brak callbacku nie powoduje błędu", () => {
  jest.restoreAllMocks();
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const MessageForm = require("./MessageForm").MessageForm;
  const { container } = render(<MessageForm time={new Date()} />);
  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test alert"
    }
  });
  fireEvent.submit(container.querySelector("form"));
});
