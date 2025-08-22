export const addMessageAC = () => {
    return { type: "ADD-MESSAGE", payload: { c_id: 1, text: initialState.textArea, byme: true } }
} // c_id

export const onMessageTAChangeAC = (text_value) => {
    return { type: "ON-MESSAGE-TA-CHANGE", payload: { text: text_value } }
}

let initialState = {
    chatListDB: [
        { c_id: 1, name: "Oleg" },
        { c_id: 2, name: "Masha" },
        { c_id: 3, name: "Igor" },
        { c_id: 4, name: "Henry" }
    ],
    messagesListDB: [
        { c_id: 1, m_id: 1, message_stuff: "Hi, my name is", byme: false },
        { c_id: 1, m_id: 2, message_stuff: "Who?", byme: true },
        { c_id: 1, m_id: 3, message_stuff: "Slllliiimmm Shhhaadyyy", byme: false }
    ],
    textArea: "Enter text"
}

let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON-MESSAGE-TA-CHANGE": {
            return {
                ...state,
                textArea: action.payload.text
            }
        }
        case "ADD-MESSAGE": {
            // Костыль - беру значение напрямую из state
            let m_id = state.messagesListDB[state.messagesListDB.length - 1].m_id + 1
            let newMessage = { c_id: action.payload.c_id, m_id: m_id, message_stuff: state.textArea, byme: action.payload.byme }
            return {
                ...state,
                messagesListDB: [...state.messagesListDB, newMessage],
                textArea: ''
            }
        }
        default: {
            return state
        }
    }
}

export default messagesReducer