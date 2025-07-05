import m from "./Message.module.css"
import ChatItem from './ChatItem.jsx'
import MessageItem from './MessageItem.jsx'

const Messages = (props) => {
    let chatListDB = props.chatListDB
    let messagesListDB = props.messagesListDB

    return (
        <div className={m.central_content}>
            <div className={m.chat_list}>
                {
                    chatListDB.map(chat => <ChatItem id={chat.c_id} name={chat.name} />)
                }
            </div>
            <div className={m.messages_list}>
                {
                    messagesListDB.map(message => <MessageItem c_id={message.c_id} m_id={message.m_id} message_stuff={message.message_stuff} byme={message.byme}/>)
                }
            </div>
        </div>
    )
}

export default Messages