export const followActionAC = (f_id) => {
    return { type: "FOLLOW", payload: { f_id: f_id } }
}

let ava = "https://avatars.mds.yandex.net/i?id=9b3771e6b9265a3572ea609cd64978a27aab9849-7092330-images-thumbs&n=13"

let initialState = {
    friendsListDB: [
        { f_id: 1, name: "Iluha Nafig", about: "Like Raccoons", location: { country: "Russia", city: "Mytischi" }, avatar: ava, isfollowed: true },
        { f_id: 2, name: "Yulka Yeah", about: "Ozon girl", location: { country: "Russia", city: "Moscow" }, avatar: ava, isfollowed: true },
        { f_id: 3, name: "Nosorog Blinich", about: "Nasral v podezde", location: { country: "Africa", city: "Niger" }, avatar: ava, isfollowed: false },
        { f_id: 4, name: "Fufilek", about: "A kak smuvat&", location: { country: "Russia", city: "Voronezh" }, avatar: ava, isfollowed: false }
    ],
    pages: 1
}

window.friendsstate = initialState

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW": {
            let stateCopy = { ...state }
            stateCopy.friendsListDB = [...state.friendsListDB]

            stateCopy.friendsListDB.forEach((f) => {
                if (f.f_id == action.payload.f_id) {
                    f.isfollowed = !f.isfollowed
                }
            })

            return stateCopy
        }
        default: {
            return state
        }
    }
}

export default friendsReducer