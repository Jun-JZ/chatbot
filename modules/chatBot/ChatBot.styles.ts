import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled(Box)`
  padding: 2rem;
  background-color: white;
  width: max(60vw, 60rem);
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
`;

export const InputWrapper = styled(Box)`
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
`;

export const ConversationWrapper = styled(Box)`
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
`;

export const Conversation = styled(Box)<{ group: "bot" | "client" }>`
  display: flex;
  flex-direction: ${({ group }) => (group === "bot" ? "row" : "row-reverse")};
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Message = styled(Box)`
  max-width: 80%;
  padding: 0.8rem 2rem;
  background-color: #ebebeb;
  border-radius: 2rem;
`;
