export let store = {
    _state: {
        postsListDB: [
            { id: 1, message: "Third post", likes: 14 },
            { id: 2, message: "Dorogoy Dnevnik", likes: 0 },
            { id: 3, message: "First post. Lets start", likes: 3 }
        ],
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
        peoplesDB: [
            { id: 1, name: "Ilyha Manahoov" },
            { id: 2, name: "Oleg" },
            { id: 3, name: "Masha" },
            { id: 4, name: "Igor" },
            { id: 5, name: "Henry" }
        ],
        textAreas: {
            post: "Enter post message",
            message: "Enter text"
        }
    },
    GetState() {
        return this._state
    },
    _CallSubscriber(state) {
        console.log("State changed")
    },
    Subscriber(observer){
        this._CallSubscriber = observer
    },
    AddMessage(c_id: number, message_stuff: string, byme: boolean){
        let m_id = this._state.messagesListDB[this._state.messagesListDB.length - 1].m_id + 1
        let newMessage = { c_id: c_id, m_id: m_id, message_stuff: message_stuff, byme: byme }
        this._state.messagesListDB.push(newMessage)
        this._CallSubscriber(this._state)
    },
    AddPost(post_stuff: string){
        let id = this._state.postsListDB[this._state.postsListDB.length - 1].id + 1
        let newPost = { id: id, message: post_stuff, likes: 0 }
        this._state.postsListDB.push(newPost)
        this._CallSubscriber(this._state)
    },
    OnPostTAChange(text: string){
        this._state.textAreas.post = text
        this._CallSubscriber(this._state)
    },
    OnMessageTAChange(text: string){
        this._state.textAreas.message = text
        this._CallSubscriber(this._state)
    }
}
