import m from './Header.module.css'

const Header = () => {
    return (
        <header className={m.header}>
            <a href="https://logo-teka.com/adidas/">
                <img src="https://logo-teka.com/wp-content/uploads/2025/06/adidas-sign-logo.svg" alt="SVG logo adidas"/>
            </a>
        </header>
    );
}

export default Header;
