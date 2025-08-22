import React from "react"
import FriendsItem from "./FriendItem"
import m from "./Friends.module.css" 

const Friends = (props) => {
    return (
        <div className={m.central_content}>
            {
                props.friendsListDB.map(f => <FriendsItem friend={f} followAction={props.followAction}/>)
            }
        </div>
    )
}

export default Friends