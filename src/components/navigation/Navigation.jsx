import { NavLink } from 'react-router-dom';
import m from './Navigation.module.css'

const Navigation = () => {
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
    </nav>
  );
}

export default Navigation;
