import React from "react";
import PropTypes from "prop-types";
import { Message } from "./Message";

export const App = ({ data }) =>
  data.map(item => (
    <Message userName={item.userName} time={item.time} message={item.message} />
  ));

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
