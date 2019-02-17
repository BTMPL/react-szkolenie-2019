import React from "react";
import { render } from "react-testing-library";
import { Message } from "./Message.js";

test("Message renderuje poprawną datę", () => {
  const date = `${new Date()
    .getHours()
    .toString()
    .padStart(2, "0")}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  const { getByText } = render(<Message />);
  expect(getByText(date, { exact: false }));
});
