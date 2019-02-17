test("Poprawnie używa ReactDOM.render", () => {
  const render = require("react-dom").render;
  require("./index.js");
  expect(render).toHaveBeenCalled();
});

test("Poprawnie używa React.createElement", () => {
  const createElement = require("react").createElement;
  require("./index.js");
  expect(createElement).toHaveBeenCalled();
});
