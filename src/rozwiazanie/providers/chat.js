import React from "react";

import { api } from "../api";

const formatMessageForUI = message => ({
  message: message.text,
  time: new Date(message.date).getTime(),
  userName: message.user.userName
});

export const withChat = Component =>
  class extends React.Component {
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

    create = str => {
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
    };

    render() {
      return (
        <Component
          data={this.state.data}
          isLoading={this.state.data === undefined}
          create={this.create}
        />
      );
    }
  };
