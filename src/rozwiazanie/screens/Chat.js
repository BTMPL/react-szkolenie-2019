import React from "react";
import styled from "styled-components";

import { MessageForm } from "../MessageForm";

import { ChatProvider } from "../providers/chat";

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

export const ChatScreen = props => {
  return (
    <React.Fragment>
      <h1>Witaj na chacie! {Math.random()}</h1>
      <ChatProvider>
        {({ data, isLoading, create }) => {
          if (isLoading) return <p>Trwa pobieranie danych</p>;
          return (
            <div>
              <MessageList>
                {data.length !== 0 ? (
                  data.map((item, index) =>
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
                  create(props.login, str);
                }}
              />
            </div>
          );
        }}
      </ChatProvider>
    </React.Fragment>
  );
};
