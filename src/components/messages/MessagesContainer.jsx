import { connect } from "react-redux"
import { addMessageAC, onMessageTAChangeAC } from "../../buisnessData/messagesReducer.js"
import Messages from "./Messages.jsx"

let mapStateToProps = (state) => {
    return (
        {
            chatListDB: state.messages.chatListDB,
            messagesListDB: state.messages.messagesListDB,
            textArea: state.messages.textArea
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addMessage: () => {
                dispatch(addMessageAC())
            },
            onMessageTAChange: (text) => {
                dispatch(onMessageTAChangeAC(text))
            }
        }
    )
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer