import React from "react";
import PropTypes from "prop-types";
import { Message } from "./Message";
import { MessageForm } from "./MessageForm";

export const App = ({ data }) => (
  <div>
    {data.map(item => (
      <Message
        userName={item.userName}
        time={item.time}
        message={item.message}
      />
    ))}
    <MessageForm />
  </div>
);

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
