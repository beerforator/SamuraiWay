import m from "./Message.module.css"
import ChatItem from './ChatItem.jsx'
import MessageItem from './MessageItem.jsx'
import React from "react"

const Messages = (props) => {
    let chatListDB = props.chatListDB
    let messagesListDB = props.messagesListDB

    let newMessageRef = React.createRef()

    let AddMessage = () => {
        props.AddMessage(1, props.tAreaStuff.message, true)
        props.OnMessageTAChange("")
    }

    let OnMessageTAChange = () => {
        props.OnMessageTAChange(newMessageRef.current.value)
    }

    return (
        <div className={m.central_content}>
            <div className={m.chat_list}>
                {
                    chatListDB.map(chat => <ChatItem
                        id={chat.c_id}
                        name={chat.name} />)
                }
            </div>
            <div className={m.messages_list}>
                {
                    messagesListDB.map(message => <MessageItem
                        c_id={message.c_id} m_id={message.m_id}
                        message_stuff={message.message_stuff}
                        byme={message.byme} />)
                }
                <div className={m.message_form}>
                    <textarea
                        ref={newMessageRef}
                        value={props.tAreaStuff.message}
                        onChange={OnMessageTAChange} />
                    <button onClick={AddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages