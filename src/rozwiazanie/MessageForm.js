import React from "react";
import styled from "styled-components";

const Form = styled.form`
  padding: 5px 0;
  display: flex;

  input[type="text"] {
    flex: 1;
    padding: 8px;
    font-size: 1rem;
  }

  input[type="submit"] {
    padding: 8px;
    font-size: 1rem;
    /** Chrome OSX */
    -webkit-appearance: initial;
  }
`;

export const MessageForm = ({ button, onMessage = () => {} }) => {
  const [value, setValue] = React.useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();

        onMessage(value);
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      {button && <input type="submit" value={button} />}
    </Form>
  );
};
