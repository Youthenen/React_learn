import React, { useEffect } from 'react';
function FriendStatus(props){
    const [isOnline,setIsOnline] = useState(null)
    useEffect(()=>{
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }
        cha
    })
}