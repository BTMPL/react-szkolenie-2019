import React from "react";

export const MessageForm = () => (
  <input type="text" onChange={e => console.log(e.target.value)} />
);
