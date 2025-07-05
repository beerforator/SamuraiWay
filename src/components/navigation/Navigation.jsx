import { NavLink } from 'react-router-dom';
import m from './Navigation.module.css'

const Navigation = (props) => {
  let peoplesDB = props.peoplesDB.map((people) => {
    return (
      <div className={m.friend_item}>
        <img src="https://avatars.mds.yandex.net/i?id=9b3771e6b9265a3572ea609cd64978a27aab9849-7092330-images-thumbs&n=13" alt="" />
        <p>{people.name}</p>
      </div>
    )
  })

  return (
    <nav className={m.aside_nav}>
      <div className={m.sector_nav}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? m.activePage : ""}>Profile</NavLink>
        <NavLink to='/messages' className={({ isActive }) => isActive ? m.activePage : ""}>Messages</NavLink>
        <NavLink to='/news' className={({ isActive }) => isActive ? m.activePage : ""}>News</NavLink>
        <NavLink to='/music' className={({ isActive }) => isActive ? m.activePage : ""}>Music</NavLink>
      </div>
      <div className={m.sector_nav}>
        <NavLink to="#">Settings</NavLink>
      </div>
      <div className={m.sector_nav + " " + m.friends_online}>
        {
          peoplesDB
        }
      </div>
    </nav>
  );
}

export default Navigation;
