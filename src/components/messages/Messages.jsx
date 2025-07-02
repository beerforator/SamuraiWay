import { NavLink } from "react-router-dom"
import m from "./Message.module.css"

const Messages = () => {
    return (
        <div className={m.central_content}>
            <div className={m.chat_list}>
                <NavLink to="/messages/1" className={({ isActive }) => isActive ? m.activeChat : ""}>Oleg</NavLink>
                <NavLink to="/messages/2" className={({ isActive }) => isActive ? m.activeChat : ""}>Masha</NavLink>
                <NavLink to="/messages/3" className={({ isActive }) => isActive ? m.activeChat : ""}>Igor</NavLink>
                <NavLink to="/messages/4" className={({ isActive }) => isActive ? m.activeChat : ""}>Henry</NavLink>
            </div>
            <div className={m.messages_list}>
                <p className={m.message_item}>Hello</p>
                <p className={m.message_item}>Krutyak</p>
                <p className={m.message_item}>Hi, my name is</p>
            </div>
        </div>
    )
}

export default Messages