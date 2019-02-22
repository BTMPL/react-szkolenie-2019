import React from "react";

export const MessageForm = () => {
  const ref = React.useRef();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        alert(ref.current.value);
        ref.current.value = "";
      }}
    >
      <input type="text" ref={ref} />
    </form>
  );
};
