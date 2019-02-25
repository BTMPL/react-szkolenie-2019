import React from "react";
import styled from "styled-components";

import { api } from "../api";

import { Message } from "../Message";
import { MessageForm } from "../MessageForm";

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

const formatMessageForUI = message => ({
  message: message.text,
  time: new Date(message.date).getTime(),
  userName: message.user.userName
});

export class ChatScreen extends React.Component {
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

  state = {
    data: undefined
  };

  render() {
    if (this.state.data === undefined || !Array.isArray(this.state.data))
      return <p>Trwa pobieranie danych</p>;
    return (
      <div>
        <MessageList>
          {this.state.data.length !== 0 ? (
            this.state.data.map((item, index) => (
              <Message
                key={index}
                userName={item.userName}
                time={item.time}
                message={item.message}
              />
            ))
          ) : (
            <p>Brak danych</p>
          )}
        </MessageList>
        <MessageForm
          onMessage={str => {
            api.create(this.props.login, str);
            this.setState(state => ({
              data: [
                {
                  userName: this.props.login,
                  message: str,
                  time: new Date().getTime()
                }
              ].concat(state.data)
            }));
          }}
        />
      </div>
    );
  }
}
