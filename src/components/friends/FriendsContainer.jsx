import React from "react"
import { connect } from "react-redux"
import Friends from "./Friends"
import { followActionAC, setFriendsAC } from "../../buisnessData/friendsReducer"

let mapStateToProps = (state) => {
    return {
        friendsListDB: state.friends.friendsListDB
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followAction: (f_id) => {
            dispatch(followActionAC(f_id))
        },
        setFriends: (f_array) => {
            dispatch(setFriendsAC(f_array))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer