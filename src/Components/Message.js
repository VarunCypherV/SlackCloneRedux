import React from 'react';
import styled from 'styled-components';
const Message = (props) => {
    const { message , timestamp ,user , userImage } = props;
    const formattedTimestamp = timestamp?.toDate().toLocaleString();
    // {new Date(timestamp?.toDate().toUTCString())
    return (
       <MessageContainer>
        <img src={userImage} alt="Missing"/>
        <MessageInfo>
            <h4>
                {user}{' '}
                <span>
                    {formattedTimestamp}
                                    
                </span>
            </h4>
            <p>{message} </p>
        </MessageInfo>
       </MessageContainer>
    );
};

export default Message;

const MessageContainer = styled.div`
    display : flex;
    align-items: center;
    padding : 20px;
    > img {
        height : 50px;
        border-radius : 50%;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size:10px;
    }
    
`;