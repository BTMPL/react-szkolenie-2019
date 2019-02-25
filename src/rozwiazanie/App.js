import React from "react";
import PropTypes from "prop-types";
import { Message } from "./Message";
import { MessageForm } from "./MessageForm";

import styled from "styled-components";

import { api } from "./api";

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

const MessageList = styled.div`
  flex: 1;
`;

const formatMessageForUI = message => ({
  message: message.text,
  time: new Date(message.date).getTime(),
  userName: message.user.userName
});

export class App extends React.Component {
  state = {
    data: undefined
  };

  componentDidMount() {
    this.interval = setInterval(this.pool, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  pool = () => {
    api.get().then(data =>
      this.setState({
        data: data.items.map(formatMessageForUI)
      })
    );
  };

  render() {
    if (!this.state.data || !Array.isArray(this.state.data))
      return (
        <Layout>
          <p>Trwa pobieranie danych</p>
        </Layout>
      );
    return (
      <Layout>
        {this.state.data.length === 0 ? (
          <p>Brak danych</p>
        ) : (
          <MessageList>
            {this.state.data.map((item, index) => (
              <Message
                key={index}
                userName={item.userName}
                time={item.time}
                message={item.message}
              />
            ))}
          </MessageList>
        )}
        <MessageForm
          onMessage={str => {
            api.create("Bartek", str);
            this.setState(state => ({
              data: state.data.concat({
                userName: "Bartek",
                message: str,
                time: new Date().getTime()
              })
            }));
          }}
        />
      </Layout>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
