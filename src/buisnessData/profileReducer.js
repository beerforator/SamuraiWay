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
            return {
                ...state,
                textArea: action.payload.text
            }
        }
        case "ADD-POST": {
            // Костыль - беру значение напрямую из state *заменить state.textArea -> action.payload.text*
            let id = state.postsListDB[state.postsListDB.length - 1].id + 1
            let newPost = { id: id, message: state.textArea, likes: 0 }
            return {
                ...state,
                postsListDB: [...state.postsListDB, newPost],
                textArea: ''
            }
        }
        default: {
            return state
        }
    }
}

export default profileReducer