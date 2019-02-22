import React from "react";
import PropTypes from "prop-types";

export class MessageForm extends React.Component {
  state = { value: "" };

  static propTypes = {
    onMessage: PropTypes.func
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (this.state.value === "") return;

          this.props.onMessage && this.props.onMessage(this.state.value);
          this.setState({
            value: ""
          });
        }}
      >
        <input
          type="text"
          value={this.state.value}
          onChange={e => {
            this.setState({
              value: e.target.value
            });
          }}
        />
      </form>
    );
  }
}
