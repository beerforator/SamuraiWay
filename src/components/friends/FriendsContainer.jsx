import React from "react"
import { connect } from "react-redux"
import Friends from "./Friends"
import { followActionAC, setFriendsAC, setTotalCountAC, setCurrentPageAC } from "../../buisnessData/friendsReducer"

let mapStateToProps = (state) => {
    return {
        friendsListDB: state.friends.friendsListDB,
        totalCount: state.friends.totalCount,
        onPageCount: state.friends.onPageCount,
        currentPage: state.friends.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followAction: (f_id) => {
            dispatch(followActionAC(f_id))
        },
        setFriends: (f_array) => {
            dispatch(setFriendsAC(f_array))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer