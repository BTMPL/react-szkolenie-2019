import ReactDOM from "react-dom";
import React from "react";

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

ReactDOM.render(<App data={data} />, document.getElementById("root"));
