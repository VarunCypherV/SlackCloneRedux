import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {
    const signIn = async () => {
      try {
        await signInWithPopup(auth,provider);
      } catch (error) {
        // Handle errors here, e.g., show an error message
        console.error('Error signing in:', error);
      }
    };
  
    return (
      <LoginContainer>
        <LoginInnerContainer>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"></img>
          <br/>
          <h1>SLACK </h1>
          <Button onClick={signIn}>Sign In With Google</Button>
        </LoginInnerContainer>
      </LoginContainer>
    );
  };

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height : 100vh;
    display : grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
padding :100px;
border-radius: 10px;
text-align:center;
background-color : white;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    >img {
        object-fit: contain; //maintainaspect ratio
        height : 100px;
        margin-bottom : 30px;

    }
    >button {
        margin-top : 60px;
        text-transform : inherit !important;
        background-color: #0a8d48 !important;
        color : white;
    }
`;