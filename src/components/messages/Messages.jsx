import m from "./Message.module.css"
import ChatItem from './ChatItem.jsx'
import MessageItem from './MessageItem.jsx'
import React from "react"

const Messages = (props) => {
    let addMessage = () => {
        props.addMessage()
    }

    let onMessageTAChange = (e) => {
        props.onMessageTAChange(e.target.value)
    }

    return (
        <div className={m.central_content}>
            <div className={m.chat_list}>
                {
                    props.chatListDB.map(chat => <ChatItem
                        id={chat.c_id}
                        name={chat.name} />)
                }
            </div>
            <div className={m.messages_list}>
                {
                    props.messagesListDB.map(message => <MessageItem
                        c_id={message.c_id} m_id={message.m_id}
                        message_stuff={message.message_stuff}
                        byme={message.byme} />)
                }
                <div className={m.message_form}>
                    <textarea
                        value={props.textArea}
                        onChange={onMessageTAChange} />
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages