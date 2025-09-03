import React from "react"
import m from "./Friends.module.css" 

const FriendsItem = (props) => {
    let followAction = () => {
        props.followAction(props.friend.id)
    }

    return (
        <div className={m.friends_item}>
            <img src={(props.friend.photos.small) ? props.friend.photos.small : "https://avatars.mds.yandex.net/i?id=9b3771e6b9265a3572ea609cd64978a27aab9849-7092330-images-thumbs&n=13"} alt="#" className={m.item_avatar}/>
            <div className={m.item_stuff}>
                <p>{props.friend.name}</p>
                <p>{props.friend.status}</p>
            </div>
            <button onClick={followAction} className={(props.friend.followed) ? (m.item_button + ' ' + m.item_button_f) : m.item_button}>{(props.friend.followed) ? 'Unsubscribe' : 'Subscribe'}</button>
        </div>
    )
}

export default FriendsItem