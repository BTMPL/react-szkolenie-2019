import React from "react";

import { api } from "../api";

const formatMessageForUI = message => ({
  message: message.text,
  time: new Date(message.date).getTime(),
  userName: message.user.userName
});

export const ChatProvider = ({ children }) => {
  const [data, setData] = React.useState(undefined);

  const pool = () => {
    api.get().then(data => setData(data.items.map(formatMessageForUI)));
  };

  const create = (login, str) => {
    api.create(login, str);
    setData(data =>
      [
        {
          userName: login,
          message: str,
          time: new Date().getTime()
        }
      ].concat(data)
    );
  };

  React.useEffect(() => {
    const interval = setInterval(pool, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return children({
    data: data,
    isLoading: data === undefined,
    create: create
  });
};
