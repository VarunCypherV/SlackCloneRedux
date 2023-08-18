import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectroomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Loading from "./Loading";
import Message from "./Message";

const Chat = () => {
  const chatRef = useRef(null);

  const roomId = useSelector(selectroomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    if (!loading) {
      chatRef?.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [roomId, loading]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [roomMessages]);
  

  if (!roomId) {
    return null; // or some loading indicator
  }

  return (
    <ChatContainer>
      <ChatContent>
        {roomDetails && roomMessages && (
          <>
            <Header>
              <Headerleft>
                <h4>
                  <strong>#{roomDetails?.data().name}</strong>
                </h4>
                <StarBorderOutlined />
              </Headerleft>
              <Headerright>
                <p>
                  <InfoOutlined /> Details
                </p>
              </Headerright>
            </Header>

            <ChatMessages ref={chatRef}>
              {roomMessages?.docs.map((doc) => {
                const { message, timestamp, user, userImage } = doc.data();

                return (
                  <Message
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                  />
                );
              })}
            </ChatMessages>
            <ChatInput
              channelId={roomId}
              channelName={roomDetails?.data().name}
              chatRef={chatRef}
            />
          </>
        )}
      </ChatContent>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  color: black;
  margin-left: 15vw;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: hidden; /* Hide overflow to prevent the chat input from getting pushed down */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const Headerleft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 10px;
  }
`;

const Headerright = styled.div`
  display: flex;
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding-bottom: 15vh;
  width: 100%;
  overflow-y: scroll;
  overflow-wrap: break-word;
`;

// Remove the ChatBottom component since it's not needed in this version
