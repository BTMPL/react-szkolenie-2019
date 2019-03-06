import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import {
  Translation,
  TranslationProvider,
  T,
  LanguageSwitch
} from "./providers/translation";

afterEach(() => {
  cleanup();
});

test("komponent T renderuje przekazaną labelkę, jeżeli nie znalazł tłumaczenia", () => {
  const key = Math.random().toString();
  const { container } = render(<T as={"p"} label={`${key}`} />);

  expect(container.querySelector("p").innerHTML).toBe(key);
});

test("komponent TranslationProvider udostępnia tłumaczenia", () => {
  render(
    <TranslationProvider>
      <Translation.Consumer>
        {props => {
          expect(props).toEqual(
            expect.objectContaining({
              labels: expect.any(Object)
            })
          );
        }}
      </Translation.Consumer>
    </TranslationProvider>
  );
});

test("komponent LanguageSwitch pozwalający na zmianę języka", () => {
  const spy = jest.fn(() => null);
  const { getByText } = render(
    <TranslationProvider>
      <Translation.Consumer>{spy}</Translation.Consumer>
      <LanguageSwitch to={"en"}>english</LanguageSwitch>
    </TranslationProvider>
  );

  expect(spy).toHaveBeenCalledWith(
    expect.objectContaining({
      language: "pl"
    })
  );

  fireEvent.click(getByText("english"));

  expect(spy).toHaveBeenCalledWith(
    expect.objectContaining({
      language: "en"
    })
  );
});
