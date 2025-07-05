import m from "./Message.module.css"

const MessageItem = (props) => {
    // debugger
    if (!props.byme) {
        return <p className={m.message_item}>{props.message_stuff}</p>
    } else if (props.byme) {
        return <p className={m.message_item + " " + m.my_message}>{props.message_stuff}</p>
    }
}

export default MessageItem