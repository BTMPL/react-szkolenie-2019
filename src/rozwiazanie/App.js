import React from "react";
import PropTypes from "prop-types";
import { Message } from "./Message";
import { MessageForm } from "./MessageForm";

export class App extends React.Component {
  state = {
    data: this.props.data
  };

  render() {
    return (
      <div>
        {this.state.data.map((item, index) => (
          <Message
            key={index}
            userName={item.userName}
            time={item.time}
            message={item.message}
          />
        ))}
        <MessageForm
          onMessage={str => {
            this.setState(state => ({
              data: state.data.concat({
                userName: "BTM",
                message: str,
                time: new Date().getTime()
              })
            }));
          }}
        />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
