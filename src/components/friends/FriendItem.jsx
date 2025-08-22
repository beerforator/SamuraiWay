import React from "react"
import m from "./Friends.module.css" 

const FriendsItem = (props) => {
    let followAction = () => {
        props.followAction(props.friend.f_id)
    }

    return (
        <div className={m.friends_item}>
            <img src={props.friend.avatar} alt="avatar" className={m.item_avatar}/>
            <div className={m.item_stuff}>
                <p>{props.friend.name}</p>
                <p>{props.friend.location.country}</p>
                <p>{props.friend.about}</p>
                <p>{props.friend.location.city}</p>
            </div>
            <button onClick={followAction} className={(props.friend.isfollowed) ? (m.item_button + ' ' + m.item_button_f) : m.item_button}>{(props.friend.isfollowed) ? 'Unsubscribe' : 'Subscribe'}</button>
        </div>
    )
}

export default FriendsItem