import React, { useState } from 'react';
import FriendContext from './FriendContext';

const FriendProvider = ({ children }) => {
    const [friendDetails, setFriendDetails] = useState([])
    console.log(friendDetails)
    const context = {
        friendDetails,
        setFriendDetails,
      
    }


    return <FriendContext value={context}>{children}</FriendContext>
};

export default FriendProvider;