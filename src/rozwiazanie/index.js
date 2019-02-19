import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  React.createElement(
    "div",
    {},
    "Witaj na ",
    React.createElement("b", {}, "Warsztatach z React"),
    "!"
  ),
  document.getElementById("root")
);
