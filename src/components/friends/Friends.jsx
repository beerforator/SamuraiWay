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

        this.totalCount = 0
        this.onPageCount = 6
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.onPageCount).then((response) => {
            this.props.setFriends(response.data.items)

            this.totalCount = response.data.totalCount
        })
    }

    pagesCount = () => {
        let pagesCount = this.totalCount / this.onPageCount

        let buttonArr = []
        while(buttonArr.length <= pagesCount){
            buttonArr.push(buttonArr.length + 1) 
        }

        return (
            buttonArr
        )

    }

    contentOnPage = (i) => {
        let pagesCount = this.totalCount / this.onPageCount

        let miniArr = []
        this.props.friendsListDB.forEach(element => {
            while (miniArr.length != this.onPageCount)
                miniArr.push(element)
        })

        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=" + this.onPageCount + "?page=" + i).then((response) => {
            this.props.setFriends(response.data.items)
            this.totalCount = response.data.totalCount
        })
    }

    render() {
        return (
            <div className={m.central_content}>
                {
                    this.props.friendsListDB.map(f => <FriendsItem key={f.id} friend={f} followAction={this.props.followAction} />)
                }
                <div className={m.page_nav}>
                    {this.pagesCount().map((i) => <button onClick={this.contentOnPage(i)}>{i}</button>)}
                </div>
            </div>
        )
    }
}

export default Friends