import { Avatar, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from "firebase/compat/app";
import { Timestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = (props) => {
    const {channelName , channelId , chatRef} = props;
    // const InputRef = useRef(null);
    const [input,setInput]=useState('');
    const [user]=useAuthState(auth);
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
        })
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
    
    // const sendMessage = e =>{
    //     e.preventDefault(); //prevents refresh

    //     if(!channelId || !input.trim()){
    //         return false;
    //     }
    //     db.collection("rooms").doc(channelId).collection("messages").add({
    //         // message : InputRef.current.value, // get value of input field
    //         message: input,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         user:"me",
    //         // userImage: Avatar,
    //     });
    //     setInput("");
    // };
    //use ref used instead of useState
//     return (
//         <ChatInputContainer>
//             <form>
//                 {/* <input ref={InputRef} placeholder={`Message #Room`}/> */}
//                 <input value={input} placeholder={`Message #Room`}
//                     onChange={(e)=>{setInput(e.target.value)}}
//                 />
//                 <Button hidden types='submit' onClick={sendMessage}>SEND</Button>
//             </form>
//         </ChatInputContainer>
//     );
// };

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form {
        position : relative;
        display: flex;
        justify-content: center;
    }
    >form > input{
        position:fixed;
        bottom : 30px;
        width : 60%;
        border : 1px solid gray;
        border-radius : 3px;
        padding : 20px;
        outline : none;
    }
    >form > button {
        display : none !important //when i hit enter msg goes , it doesnt go
    }
`;