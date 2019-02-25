import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid #d3d3d3;
  margin-bottom: 10px;
  padding-bottom: 10px;
  p {
    margin: 0;
    padding: 0;
  }
`;

const Author = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const Message = ({ userName, time, message }) => (
  <Container>
    <Author>{userName}</Author>
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
  </Container>
);

Message.propTypes = {
  userName: PropTypes.string,
  time: PropTypes.number,
  message: PropTypes.string
};

Message.defaultProps = {
  userName: "Anonim"
};
