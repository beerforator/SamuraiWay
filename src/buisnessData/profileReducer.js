export const addPostAC = (text_value) => {
    return { type: "ADD-POST", payload: { text: text_value } }
}

export const onPostTAChangeAC = (text_value) => {
    return { type: "ON-POST-TA-CHANGE", payload: { text: text_value } }
}

let initialState = {
    postsListDB: [
        { id: 1, message: "First post. Lets start", likes: 3 },
        { id: 2, message: "Dorogoy Dnevnik", likes: 0 },
        { id: 3, message: "Third post", likes: 14 }
    ],
    peoplesDB: [
        { id: 1, name: "Ilyha Manahoov" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Henry" }
    ],
    textArea: "Enter post message"
}

window.profstate = initialState

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON-POST-TA-CHANGE": {
            let _state = {...state}
            _state.textArea = action.payload.text
            return _state
        }
        case "ADD-POST": {
            let _state = {...state}
            let id = state.postsListDB[state.postsListDB.length - 1].id + 1
            // Костыль - беру значение напрямую из state
            // + не перерисовывается при добавлении пустого
            let newPost = { id: id, message: _state.textArea, likes: 0 }
            _state.postsListDB.push(newPost)
            _state.textArea = ""
            return _state
        }
        default: {
            return state
        }
    }
}

export default profileReducer