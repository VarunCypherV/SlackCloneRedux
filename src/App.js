import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AppBody from "./Components/AppBody"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase";
import Login from "./Components/Login";
import styled from "styled-components";
import Spinner from "react-spinkit";

function App() {
  const {user , loading} = useAuthState(auth);
  const [userz , setUser] = useState(user);

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser=>{
    if(authUser){
      setUser(authUser);
    } else {
      setUser(null);
    }
   }))
   return () => {
    unsubscribe();
   };
  }, []);

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
  return (
    <div>
    <Router>
      <Routes>
        {/* Move the Route component here */}
        <Route path="/" element={!userz ? <Login /> : <AppContent />} />
      </Routes>
    </Router>
  </div>
);
}

const AppContent = () => (
<>
  <Header />
  <AppBody />
</>
  );


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