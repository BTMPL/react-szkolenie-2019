import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { MessageForm } from "./MessageForm";
import { executionAsyncId } from "async_hooks";

afterEach(cleanup);

describe("Komponent MessageForm akceptuje render prop render button", () => {
  test("i renderuje guzik jeżeli jest przekazany", () => {
    const { getByText } = render(
      <MessageForm
        onMessage={() => {}}
        renderButton={() => <button>test render prop</button>}
      />
    );
    expect(getByText("test render prop"));
  });

  test("guzik jest zablokowany, jeżeli nie ma treści", () => {
    const spy = jest.fn(() => {
      return <button>test render prop</button>;
    });
    render(<MessageForm onMessage={() => {}} renderButton={spy} />);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ disabled: true })
    );
  });

  test("po wpisaniu treści jest odblokowywany", () => {
    const spy = jest.fn(props => {
      return <button {...props}>test disable props</button>;
    });
    const { container } = render(
      <MessageForm onMessage={() => {}} renderButton={spy} />
    );

    fireEvent.change(container.querySelector("input"), {
      target: {
        value: "username"
      }
    });

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(
      expect.objectContaining({ disabled: false })
    );
  });

  test("po kliknięciu wysyła formularz", () => {
    const spy = jest.fn(props => {
      return <button {...props}>test props</button>;
    });

    const messageSpy = jest.fn();
    const { container, getByText } = render(
      <MessageForm onMessage={messageSpy} renderButton={spy} />
    );

    fireEvent.click(getByText("test props"));
    expect(messageSpy).toHaveBeenCalledTimes(0);

    fireEvent.change(container.querySelector("input"), {
      target: {
        value: "username"
      }
    });

    fireEvent.click(getByText("test props"));
    expect(spy).toHaveBeenCalledTimes(3);
    expect(messageSpy).toHaveBeenCalledTimes(1);
  });
});
