import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from "../Components/SidebarOption";
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
const Sidebar = () => {
    return (
        <SideBarContainer>
            <SidebarHeader>
               <SidebarInfo>
                <h2> PAPA FAM HQ</h2>
                <h3> <FiberManualRecordIcon/>
                      Varun    
                </h3>
               </SidebarInfo>
               <CreateIcon/>
            </SidebarHeader>
            <SidebarOption Icon = {InsertComment} title="threads"/>
            <SidebarOption Icon ={Inbox} title="Mentions X Reactions"/>
            <SidebarOption Icon ={Drafts} title ="Saved Items"/>
            <SidebarOption Icon ={BookmarkBorder} title ="Channel Browser"/>
            <SidebarOption Icon ={PeopleAlt} title ="People and user grps"/>
            <SidebarOption Icon ={Apps} title="Apps"/>
            <SidebarOption Icon ={FileCopy} title="File browser"/>
            <SidebarOption Icon ={ExpandLess} title="Show Less"/>
            <hr/>
            <SidebarOption Icon ={ExpandMore} title="Channels"/>
            <SidebarOption Icon ={Add} title="Add Channel"/>
            <hr/>
        </SideBarContainer>
    );
};

export default Sidebar;

const SideBarContainer = styled.div`
  color:white;
  background-color: var(--slack-color);
  flex:0.3;
  margin-top:60px;
  border-top:1px solid #49274b;
  max-width: 260px;
  min-height: 100%;;
  margin-top: 60px;

`;

const SidebarHeader = styled.div`
  display : flex;
  border-top: 1px solid #49274b;
  padding: 10px;
  > .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size : 18px;
    background-color: white;
    border-radius : 999px;
  }
`;

const SidebarInfo = styled.div`
   flex:1;
   > h2 {
    font-size : 15px;
    font-weight : 900;
    margin-bottom:5px;
   }
   >h3 {
    display : flex;
    font-size : 13px;
    font-weight : 400;
    align-items : center;
   }
   >h3 > .MuiSvgIcon-root {
    font-size : 14px;
    margin-top : 1px;
    margin-right : 2px;
    color: green;
   }
`;