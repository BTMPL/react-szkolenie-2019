import React from "react";
import { Message } from "./Message";

export const App = () => (
  <React.Fragment>
    <Message
      userName={"Bartek"}
      time={new Date().getTime()}
      message={"Wiadomość 1"}
    />
    <Message
      userName={"Bartek"}
      time={new Date().getTime()}
      message={"Wiadomość 2"}
    />
    <Message
      userName={"Bartek"}
      time={new Date().getTime()}
      message={"Wiadomość 3"}
    />
  </React.Fragment>
);
