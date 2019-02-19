import React from "react";

export const Message = ({ userName, time, message }) => (
  <div>
    <span>{userName}</span>
    <time>
      {new Date(time)
        .getHours()
        .toString()
        .padStart(2, "0")}
      :
      {new Date(time)
        .getMinutes()
        .toString()
        .padStart(2, "0")}
    </time>
    <p>{message}</p>
  </div>
);
