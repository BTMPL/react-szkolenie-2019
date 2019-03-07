import React from "react";
import PropTypes from "prop-types";
import { Message } from "./Message";

import styled from "styled-components";

import ChatScreen from "./screens/Chat";
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

export class App extends React.Component {
  state = {
    login: undefined
  };

  render() {
    return (
      <Layout>
        {this.state.login ? (
          <ChatScreen login={this.state.login} />
        ) : (
          <LoginScreen
            onNameChange={name =>
              this.setState({
                login: name
              })
            }
          />
        )}
      </Layout>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
