import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const AppBody = () => {
  return (
    <AppBodyContainer>
      <Sidebar/>
    </AppBodyContainer>
  );
};

export default AppBody;

const AppBodyContainer = styled.div`
   display: flex;
   min-height: 100vh;

`;
