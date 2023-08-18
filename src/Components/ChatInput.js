import { Avatar, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from "firebase/compat/app";
import { Timestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = (props) => {
    const { channelName, channelId, chatRef } = props;
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);
    const sendMessage = (e) => {
        e.preventDefault(); // Prevent form submission

        if (!channelId || !input.trim()) {
            return;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });
        setInput("");
    };

    return (
        <ChatInputContainer>
            <form onSubmit={sendMessage}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button type="submit">SEND</Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;

const ChatInputContainer = styled.div`
    position: fixed;
    bottom: 20px;
    width: 60%;
    border-radius: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 15vw;
    
    > form {
        flex-grow: 1;
        display: flex;
        align-items: center;
        margin:auto;
    }
    
    > form > input {
        flex-grow: 1;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;

    }
    
    > form > button {
        display: none;
    }
`;
