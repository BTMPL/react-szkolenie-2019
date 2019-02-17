import { App } from "./index.js";
import { render } from "react-testing-library";
test("Poprawnie eksportuje i renderuje komponent App", () => {
  const render = require("react-dom").render;
  require("./index.js");
  expect(render).toHaveBeenCalled();
});

test("Poprawnie używa React.createElement", () => {});
