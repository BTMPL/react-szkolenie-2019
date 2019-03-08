import React from "react";
import PropTypes from "prop-types";
import { Message, Bubble } from "./Message";

import styled from "styled-components";

import { ChatScreen } from "./screens/Chat";
import { LoginScreen } from "./screens/Login";

const Layout = styled.div`
  height: 97vh;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-size: 14px;
  line-height: 1.4;

  * {
    box-sizing: border-box;
  }
`;

export const App = () => {
  const [login, setLogin] = React.useState(undefined);
  const [messageComponent, setMessageComponent] = React.useState(() => Message);

  return (
    <Layout>
      {login ? (
        <div>
          <ChatScreen login={login} renderMessage={messageComponent} />
          <button onClick={() => setMessageComponent(() => Message)}>
            Wyświetl jako lista
          </button>
          <button onClick={() => setMessageComponent(() => Bubble)}>
            Wyświetl jako bąbelki
          </button>
        </div>
      ) : (
        <LoginScreen onNameChange={setLogin} />
      )}
    </Layout>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
