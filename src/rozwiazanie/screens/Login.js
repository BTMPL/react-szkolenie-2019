import React from "react";
import styled from "styled-components";

import { MessageForm } from "../MessageForm";

const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;

  p {
    background: red;
    color: white;
    padding: 5px;
    text-align: center;
  }
`;

export const LoginScreen = ({ onNameChange = () => {} }) => {
  const [error, setError] = React.useState(false);
  return (
    <Container>
      <MessageForm
        button={"Zaloguj"}
        onMessage={name => {
          if (!name.trim()) {
            setError(true);
          } else {
            onNameChange(name);
          }
        }}
      />
      {error && <p>Podaj imię</p>}
    </Container>
  );
};
