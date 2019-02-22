import React from "react";

export class MessageForm extends React.Component {
  state = { value: "" };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (this.state.value === "") return;

          alert(this.state.value);
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
