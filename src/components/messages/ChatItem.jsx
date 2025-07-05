import { NavLink } from "react-router-dom"
import m from "./Message.module.css"

const ChatItem = (props) => {
    return (
        <NavLink to={"/messages/" + props.id} className={({ isActive }) => isActive ? m.activeChat : ""}>{props.name}</NavLink>
    )
}

export default ChatItem