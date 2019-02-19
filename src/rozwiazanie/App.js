import React from "react";
import { Message } from "./Message";

export const App = ({ data }) =>
  data.map(item => (
    <Message userName={item.userName} time={item.time} message={item.message} />
  ));
