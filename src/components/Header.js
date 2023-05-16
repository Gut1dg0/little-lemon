import Logo from '../Logo.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt='Little lemon logo'/>
        </header>
    );
}

export default Header;