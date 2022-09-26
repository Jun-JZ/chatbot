import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Image from "next/image";
import { io } from "socket.io-client";

import { Avatar, Button, Loading, TextField } from "../../components";
import { MessageType } from "../../types";

import {
  Container,
  Conversation,
  ConversationWrapper,
  InputWrapper,
  Message,
  Wrapper,
} from "./ChatBot.styles";

let socket: any;

const ChatBot = () => {
  const [input, setInput] = useState("");

  const [conversation, setConversation] = useState<MessageType[]>([]);
  useEffect(() => {
    const socketInitializer = async () => {
      await fetch("/api/socket");
      socket = io();

      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("bot_msg", (message: MessageType) => {
        setConversation((prev) => {
          if (message?.processing === false) {
            const cleaned = prev.filter((item) => item?.id !== message?.id);
            return cleaned;
          }

          return [message, ...prev];
        });
      });
    };
    socketInitializer();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (!input) return;

    socket.emit("client_msg", input);
    setConversation((prev) => [
      {
        msg: input,
        from: "client",
        timestamp: Date.now(),
      },
      ...prev,
    ]);
    setInput("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  const renderMessage = (item: MessageType) => {
    if (item?.processing) return <Loading />;
    if (item?.type === "image")
      return <Image src={item?.msg!} alt="img" width={200} height={200} />;
    return <Message>{item?.msg}</Message>;
  };

  return (
    <Container>
      <Wrapper>
        <InputWrapper>
          <TextField
            placeholder="Talk to Aida"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <Button onClick={handleButtonClick}>Send</Button>
        </InputWrapper>
        <ConversationWrapper>
          {conversation.map((item, index) => (
            <Conversation key={index} group={item?.from!}>
              <Avatar group={item?.from!} />
              {renderMessage(item)}
            </Conversation>
          ))}
        </ConversationWrapper>
      </Wrapper>
    </Container>
  );
};

export default ChatBot;
