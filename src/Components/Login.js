import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const Login = () => {
    const navigate = useNavigate(); // Initialize the useHistory hook

    const signIn = (e) => {
        signInWithPopup(auth, provider)
            .catch(alert);
    };

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                src=""
                alt="slack"></img>
                <h1>Sign In</h1>
                <p> My slack</p>
                <Button
                onClick ={signIn}>
                    Sign In With Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
)};

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
        margin-bottom : 40px;
    }
    >button {
        margin-top : 50px;
        text-transform : inherit !important;
        background-color: #0a8d48 !important;
        color : white;
    }
`;