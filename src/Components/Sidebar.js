import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "../Components/SidebarOption";
import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
const Sidebar = () => {
  // const { channels , loading , error} = useCollection(db.collection("rooms"));
  
  const [user]=useAuthState(auth);
  const collectionRef = db.collection("rooms");
  const [channels, loading, error] = useCollection(collectionRef);
  return (
    <SideBarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Private Slack</h2>
          <h3>
            {" "}
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="threads" />
      <SidebarOption Icon={Inbox} title="Mentions X Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People and user grps" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />
      <hr />
      {/* creating side of channels in rooms collection in the side bar but they wont have addChannelOption since we need to select them */}
      {channels
        ? channels.docs.map((doc) => (
            <SidebarOption key={doc.id} title={doc.data().name} id={doc.id} />
          ))
        : null}
    </SideBarContainer>
  );
};

export default Sidebar;

// const SideBarContainer = styled.div`
//   margin-top: 60px;
//   color: white;
//   background-color: var(--slack-color);
//   border-top: 1px solid #49274b;
//   grid-column-start: 1;
//   grid-column-end: 2;
//   height: 100%; /* Make the sidebar take the full height */
//   position: fixed; /* Fix the sidebar position */
// `;

const SideBarContainer = styled.div`
  margin-top: 60px;
  grid-column-start:1;
  grid-column-end:2;
  color: white;
  background-color: var(--slack-color);
  border-top: 1px solid #49274b;
  width: 15vw;
  height: 100vh; /* Use 100vh to cover the full viewport height */
  position: fixed;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-top: 1px solid #49274b;
  padding: 10px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1 px solid #49274b;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
