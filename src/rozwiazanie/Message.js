import React from "react";

const name = "Bartosz";

export const Message = props => (
  <div>
    <span>{name}</span>
    <time>
      {new Date()
        .getHours()
        .toString()
        .padStart(2, "0")}
      :
      {new Date()
        .getMinutes()
        .toString()
        .padStart(2, "0")}
    </time>
    <p>To jest przykładowa wiadomość :)</p>
  </div>
);
