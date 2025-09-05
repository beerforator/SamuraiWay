import React from "react"
import FriendsItem from "./FriendItem"
import m from "./Friends.module.css"
import axios from 'axios'

// { f_id: 1, name: "Iluha Nafig", about: "Like Raccoons", location: { country: "Russia", city: "Mytischi" }, avatar: ava, isfollowed: true },
// { f_id: 2, name: "Yulka Yeah", about: "Ozon girl", location: { country: "Russia", city: "Moscow" }, avatar: ava, isfollowed: true },
// { f_id: 3, name: "Nosorog Blinich", about: "Nasral v podezde", location: { country: "Africa", city: "Niger" }, avatar: ava, isfollowed: false },
// { f_id: 4, name: "Fufilek", about: "A kak smuvat&", location: { country: "Russia", city: "Voronezh" }, avatar: ava, isfollowed: false }


class Friends extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setFriends()
    }

    setFriends = () => {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.props.onPageCount + "&page=" + this.props.currentPage)
            .then((response) => {
                this.props.setFriends(response.data.items)

                //this.totalCount = response.data.totalCount
            })
    }

    pagesNavigation = () => {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.onPageCount)

        let pages = []

        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i)
        }

        return pages
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page)

        this.setFriends()
    }

    render() {
        return (
            <div className={m.central_content}>
                {
                    this.props.friendsListDB.map(f => <FriendsItem key={f.id} friend={f} followAction={this.props.followAction} />)
                }
                <div className={m.page_nav}>
                    {
                        this.pagesNavigation().map((i) => <button className={(i == this.props.currentPage) ? m.b_active : ""} onClick={() => this.setCurrentPage(i)} key={i}>{i}</button>)
                    }
                </div>
            </div>
        )
    }
}

export default Friends