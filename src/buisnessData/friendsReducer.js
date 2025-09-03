export const followActionAC = (f_id) => {
    return { type: "FOLLOW", payload: { f_id: f_id } }
}

export const setFriendsAC = (f_array) => {
    return { type: "SET-FRIENDS", payload: { f_array: f_array } }
}

let initialState = {
    friendsListDB: []
}

window.friendsstate = initialState

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW": {
            let stateCopy = { ...state }
            stateCopy.friendsListDB = [...state.friendsListDB]

            stateCopy.friendsListDB.forEach((f) => {
                if (f.id === action.payload.f_id) {
                    f.followed = !f.followed
                }
            })

            return stateCopy
        }
        case "SET-FRIENDS": {
            // Костыльный импликатор, поскольку идет двайная перерисовка 
            // из-за строгого режима. Добавляются дважды те же записи
            
            if (state.friendsListDB.length === 0) {
                return { ...state, friendsListDB: [...state.friendsListDB, ...action.payload.f_array] }
            }
            return { ...state }
        }
        default: {
            return state
        }
    }
}

export default friendsReducer