import React from "react";
import { render } from "react-testing-library";

/**
 * W tym momencie nasz komponent wciąż znajduje się w pliku `src/index.js`
 * więc przy importcie automatycznie wywoływany jest `ReactDOM.render`.
 *
 * Aby zapobiec błędom, musimy upewnić się, że istnieje element, do którego
 * próbujemy się wyrenderować.
 */
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

test("Poprawnie eksportuje i renderuje komponent App", () => {
  const App = require("./index.js").App;
  const { getByText } = render(<App />);
  expect(getByText(/Witaj na/));
});
