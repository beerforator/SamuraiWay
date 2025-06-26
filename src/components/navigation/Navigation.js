import m from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={m.aside_nav}>
      <div className={m.sector_nav}>
        <a href="#">Profile</a>
        <a href="#">Messages</a>
        <a href="#">News</a>
        <a href="#">Music</a>
      </div>
      <div className={m.sector_nav}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}

export default Navigation;
