import React from "react";
import { render, wait, fireEvent, cleanup, act } from "react-testing-library";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test("komponent ChatProvider zostały przetworzony na funkcję", () => {
  jest.mock("./api");
  const ChatProvider = require("./providers/chat.js").ChatProvider;
  expect(ChatProvider.toString().indexOf("class")).toBe(-1);
});

test("komponent chatProvider poprawnie wywołuje i anuluje subskrypcję", async () => {
  jest.useFakeTimers();
  jest.mock("./api");
  const api = require("./api").api;
  const ChatProvider = require("./providers/chat.js").ChatProvider;
  const spy = jest.fn(({ isLoading, data }) => {
    return !isLoading ? data.map(i => i.message).join("") : null;
  });

  let getByText, unmount;
  act(() => {
    const ret = render(<ChatProvider>{spy}</ChatProvider>);
    unmount = ret.unmount;
    getByText = ret.getByText;
    jest.advanceTimersByTime(1000);
  });

  await wait(() => getByText(/Test string/));

  expect(spy).toHaveBeenCalledWith(
    expect.objectContaining({
      isLoading: false,
      data: expect.any(Array),
      create: expect.any(Function)
    })
  );

  expect(api.get.mock.calls.length).toBe(1);

  act(() => {
    unmount();
    jest.advanceTimersByTime(1000);
  });

  expect(api.get.mock.calls.length).toBe(1);
});
