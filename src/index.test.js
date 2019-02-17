import React from "react";
import { render, fireEvent } from "react-testing-library";

test("Próba wysłania formularza wyświetla wpisane w niego dane", () => {
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const MessageForm = require("./MessageForm").MessageForm;
  const { container } = render(<MessageForm />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test alert"
    }
  });
  fireEvent.submit(container.querySelector("form"));

  expect(global.alert).toHaveBeenCalledWith("test alert");
});

test("Próba wysłania formularza bez treści nie wyświetla danych", () => {
  jest.restoreAllMocks();
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const MessageForm = require("./MessageForm").MessageForm;
  const { container } = render(<MessageForm />);

  fireEvent.submit(container.querySelector("form"));

  expect(global.alert).not.toHaveBeenCalled();
});

test("Formularz pozwala na przesłanie stringu '0'", () => {
  jest.restoreAllMocks();
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const MessageForm = require("./MessageForm").MessageForm;
  const { container } = render(<MessageForm />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "0"
    }
  });

  fireEvent.submit(container.querySelector("form"));

  expect(global.alert).toHaveBeenCalledWith("0");
});
