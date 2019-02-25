import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  padding: 5px 0;
  display: flex;

  input[type="text"] {
    flex: 1;
    padding: 8px;
    font-size: 1rem;
  }

  input[type="submit"] {
    padding: 8px;
    font-size: 1rem;
    /** Chrome OSX */
    -webkit-appearance: initial;
  }
`;

export class MessageForm extends React.Component {
  state = { value: "" };

  static propTypes = {
    onMessage: PropTypes.func
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();

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
        {this.props.button && <input type="submit" value={this.props.button} />}
      </Form>
    );
  }
}
