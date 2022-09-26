import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

import { MockResponse } from "../../mocks";
import { MessageType } from "../../types";
import { getRandomInt } from "../../utils";

const emitMsg = (
  socket: any,
  { msg = "", type = "msg", id, processing }: MessageType
) => {
  let message: MessageType = {
    id: id ? id : uuidv4(),
    msg,
    from: "bot",
    timestamp: Date.now(),
    type,
  };
  if (processing !== undefined) {
    message = { ...message, processing };
  }

  socket.emit("bot_msg", message);
};

export default function socketHandler(req: NextApiRequest, res: any) {
  // It means that socket server was already initialized
  if (res?.socket?.server?.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");

    const io = new Server(res?.socket?.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      emitMsg(socket, { msg: MockResponse.greeting });

      socket.on("client_msg", (msg) => {
        if (msg.includes("create story")) {
          const id = uuidv4();

          emitMsg(socket, { msg: MockResponse.storyProcessing });
          emitMsg(socket, { id, processing: true });

          setTimeout(() => {
            emitMsg(socket, { id, processing: false });
            emitMsg(socket, { msg: MockResponse.storyProcessed });
            emitMsg(socket, {
              msg: MockResponse.createdStory[
                getRandomInt(MockResponse.createdStory.length)
              ],
            });
          }, 10000);
          return;
        }
        if (msg.includes("create portrait")) {
          const id = uuidv4();

          emitMsg(socket, { msg: MockResponse.portraitProcessing });
          emitMsg(socket, { id, processing: true });

          setTimeout(() => {
            emitMsg(socket, { id, processing: false });
            emitMsg(socket, { msg: MockResponse.portraitProcessed });
            emitMsg(socket, {
              msg: MockResponse.createdPortrait[
                getRandomInt(MockResponse.createdPortrait.length)
              ],
              type: "image",
            });
          }, 10000);
          return;
        }

        // Random normal message
        emitMsg(socket, {
          msg: MockResponse.randomSentence[
            getRandomInt(MockResponse.randomSentence.length)
          ],
        });
      });
    });
  }

  res.end();
}
