import React from "react";
import { render, fireEvent } from "react-testing-library";

test("Wpisanie tekstu w pole tekstowe powoduje jego wyświetlenie", () => {
  jest.spyOn(console, "log");
  const MessageForm = require("./MessageForm").MessageForm;
  const { container } = render(<MessageForm />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test"
    }
  });

  expect(console.log).toHaveBeenCalledWith("test");
});
