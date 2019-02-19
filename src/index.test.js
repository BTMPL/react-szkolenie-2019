import React from "react";
import { render } from "react-testing-library";
import { App } from "./App";

const data = [
  {
    userName: "BTM",
    time: new Date().getTime(),
    message: "Witaj na szkoleniach z React!"
  },
  {
    userName: "Gość",
    time: new Date().getTime(),
    message: "Hej!"
  }
];

test("App oprawnie renderuje wszystkie przekazane dane", () => {
  const { getByText } = render(<App data={data} />);
  data.forEach(obj => {
    getByText(obj.message);
  });
});
