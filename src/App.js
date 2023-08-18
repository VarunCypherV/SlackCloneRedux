import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import AppBody from "./Components/AppBody"
import Chat from "./Components/Chat";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase";
import Login from "./Components/Login";
import styled from "styled-components";
import Spinner from "react-spinkit";

function App() {
  const {user , loading} = useAuthState(auth);
  
  if(loading){
    return <AppLoading>
        <AppLoadingContents>
          <img src="load" alt="slack"/>
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="name"
          />
        </AppLoadingContents>
    </AppLoading>
    
    
  }
  
  // if(!user){
  //   return <Login/>
  // }

  return (
    <div>
      <Router>
      {!user ? ( <Login/> ) : ( 
        <>
        <Header/>
        <AppBody/>
        <Routes>  
        {/* //old ver : switch mew is routes */}
          <Route path="/" exact />
        </Routes>
      </>
      )}

      </Router>
      
    </div>
  );
}

export default App;

const AppLoading=styled.div`
    display : grid;
    place-items: center;
    height: 100vh;
    width:100%;
`;
const AppLoadingContents=styled.div`

text-align:center;
    padding-bottom:100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;

    >img {
      height : 100px;
      padding : 20px;
      margin-bottom:40px;
    }

`;