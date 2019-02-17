import React from "react";
import { render, fireEvent } from "react-testing-library";

test("MessageForm jest klasą", () => {
  const MessageForm = require("./MessageForm").MessageForm;
  expect(MessageForm.toString().indexOf("class")).toBe(0);
});

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
