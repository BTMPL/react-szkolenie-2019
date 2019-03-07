import React from "react";
import styled from "styled-components";

import { MessageForm } from "../MessageForm";

import { withChat } from "../providers/chat";

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

export const ChatScreen = props => {
  if (props.isLoading) return <p>Trwa pobieranie danych</p>;
  return (
    <div>
      <MessageList>
        {props.data.length !== 0 ? (
          props.data.map((item, index) =>
            props.renderMessage({
              key: index,
              userName: item.userName,
              time: item.time,
              message: item.message
            })
          )
        ) : (
          <p>Brak danych</p>
        )}
      </MessageList>
      <MessageForm
        onMessage={str => {
          props.create(str);
        }}
      />
    </div>
  );
};

export default withChat(ChatScreen);
