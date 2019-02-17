import React from "react";
import { render } from "react-testing-library";
import { Message } from "./Message.js";

test("Message renderuje dane przekazane jako props", () => {
  const time = new Date().getTime();
  const message = "wiadomość testowa";
  const userName = "BTM";

  const format = timestamp =>
    `${new Date(timestamp)
      .getHours()
      .toString()
      .padStart(2, "0")}:${new Date(timestamp)
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

  const { getByText } = render(
    <Message userName={userName} time={time} message={message} />
  );
  expect(getByText(format(time), { exact: false }));
  expect(getByText(userName, { exact: false }));
  expect(getByText(message, { exact: false }));
});
