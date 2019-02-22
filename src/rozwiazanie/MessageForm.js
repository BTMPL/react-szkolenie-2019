import React from "react";

export class MessageForm extends React.Component {
  ref = React.createRef();

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          alert(this.ref.current.value);
        }}
      >
        <input type="text" ref={this.ref} />
      </form>
    );
  }
}
