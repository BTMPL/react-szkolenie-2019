import React from "react";
import { cleanup } from "react-testing-library";

import { App } from "./App";
import { MessageForm } from "./MessageForm";
import { LoginScreen } from "./screens/Login";

afterEach(() => {
  cleanup();
});

test("komponenty zostały przetworzone na funkcje", () => {
  expect(App.toString().indexOf("class")).toBe(-1);
  expect(MessageForm.toString().indexOf("class")).toBe(-1);
  expect(LoginScreen.toString().indexOf("class")).toBe(-1);
});
