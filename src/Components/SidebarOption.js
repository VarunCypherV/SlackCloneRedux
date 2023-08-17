import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import {collection , add} from "firebase/firestore"
import {useCollection} from "react-firebase-hooks/firestore"
import { useDispatch, useSelector } from "react-redux";
import { enterRoom } from "../features/appSlice";

const SidebarOption = (props) => {
  const { Icon, title , addChannelOption , id } = props;
  const dispatch =useDispatch();
  // const select = useSelector();

  const addChannel=() =>{           
      const channelName = prompt("Please enter the channel name");
      if(channelName){
        db.collection('rooms').add({
          name: channelName
        });
      }
  }
//REDUX 
  const selectChannel = () =>{
        if(id){
          // dispatch
          dispatch(enterRoom({
            roomId : id
          }));
        }
  }
  //now when we click the channel it pushed id into global store
  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>      
    {/* if addChannelOption prop is present it gives it add Channel option ie click on me to prompt for name , else u can select that channel */}
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>                  
         {/* list of channels */}
          <span>+ </span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
display : flex;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover {
    opacity : 0.8;
    background: #340e36;
}

> h3{
    font-weight: 500;
}
> h3 > span {
    padding:15px;
}
`;

const SidebarOptionChannel = styled.h3`
    padding : 10px 0;
    font-weight : 300px;

`;
