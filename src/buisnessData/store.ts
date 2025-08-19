import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"

let store = {

    // State

    _state: {
        profile: {
            postsListDB: [
                { id: 1, message: "Third post", likes: 14 },
                { id: 2, message: "Dorogoy Dnevnik", likes: 0 },
                { id: 3, message: "First post. Lets start", likes: 3 }
            ],
            peoplesDB: [
                { id: 1, name: "Ilyha Manahoov" },
                { id: 2, name: "Oleg" },
                { id: 3, name: "Masha" },
                { id: 4, name: "Igor" },
                { id: 5, name: "Henry" }
            ],
            textArea: "Enter post message"
        },
        messages: {
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
    },

    // Support methods

    getState() {
        return this._state
    },
    _callSubscriber(state) {
        console.log("State changed")
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    // State-changing methods
    /* action {type: ..., payload: {id, bool, text}} */

    dispatch(action) {
        this._state.profile = profileReducer(action, this._state.profile)
        this._state.messages = messagesReducer(action, this._state.messages)
        this._callSubscriber(this._state)
    }
}
