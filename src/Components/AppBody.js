import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const AppBody = () => {
  return (
    <AppBodyContainer>

      <Sidebar />
      <Chat />
        
        
    </AppBodyContainer>
  );
};

export default AppBody;

// const AppBodyContainer = styled.div`
//   display: flex;
//   min-height: 100vh;
// `;

const AppBodyContainer = styled.div`
  display: grid;  
  min-height: 100vh;
`;
