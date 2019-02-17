import React from "react";
import { render } from "react-testing-library";
import { Message } from "./Message.js";

test("Message poprawnie definuje propTypes", () => {
  expect(Message.propTypes).not.toBeUndefined();
});

test("Message poprawnie definuje defaultProps", () => {
  expect(Message.defaultProps.userName).toMatch("Anonim");
});
