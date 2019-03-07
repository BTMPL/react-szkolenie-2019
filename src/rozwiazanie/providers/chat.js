import React from "react";

import { api } from "../api";

const formatMessageForUI = message => ({
  message: message.text,
  time: new Date(message.date).getTime(),
  userName: message.user.userName
});

export class ChatProvider extends React.Component {
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

  create = (login, str) => {
    api.create(login, str);
    this.setState(state => ({
      data: [
        {
          userName: login,
          message: str,
          time: new Date().getTime()
        }
      ].concat(state.data)
    }));
  };

  render() {
    return this.props.children({
      data: this.state.data,
      isLoading: this.state.data === undefined,
      create: this.create
    });
  }
}
