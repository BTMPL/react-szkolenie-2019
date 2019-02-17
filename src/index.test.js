import React from "react";
import { render, fireEvent } from "react-testing-library";

test("Próba wysłania formularza wyświetla wpisane w niego dane", () => {
  jest.spyOn(global, "alert").mockImplementation(() => {});
  const App = require("./App").App;
  const { container } = render(<App data={[]} />);

  fireEvent.change(container.querySelector("input"), {
    target: {
      value: "test alert"
    }
  });
  fireEvent.submit(container.querySelector("form"));

  expect(global.alert).toHaveBeenCalledWith("test alert");
});
