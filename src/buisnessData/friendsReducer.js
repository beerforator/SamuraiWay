export const followActionAC = (f_id) => {
    return { type: "FOLLOW", payload: { f_id: f_id } }
}

export const setFriendsAC = (f_array) => {
    return { type: "SET-FRIENDS", payload: { f_array: f_array } }
}

export const setTotalCountAC = (totalCount) => {
    return { type: "SET-TOTAL-COUNT", payload: { totalCount: totalCount } }
}

export const setCurrentPageAC = (currentPage) => {
    return { type: "SET-CURRENT-PAGE", payload: { currentPage: currentPage } }
}

let initialState = {
    friendsListDB: [],
    totalCount: 22,
    onPageCount: 5,
    currentPage: 1
}

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
            // Костыльный импликатор, поскольку идет двойная перерисовка 
            // из-за строгого режима. Добавляются дважды те же записи

            // if (state.friendsListDB.length === 0) {
            //     return { ...state, friendsListDB: [...state.friendsListDB, ...action.payload.f_array] }
            // }
            return { ...state, friendsListDB: [...action.payload.f_array] }

            // return { ...state }
        }
        case "SET-TOTAL-COUNT": {
            return { ...state, totalCount: action.payload.totalCount }
        }
        case "SET-CURRENT-PAGE": {
            return { ...state, currentPage: action.payload.currentPage }
        }
        default: {
            return state
        }
    }
}

export default friendsReducer