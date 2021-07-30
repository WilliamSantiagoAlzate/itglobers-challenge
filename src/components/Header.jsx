import Menu from '../assets/img/menu-icon.PNG';

export const Header = ({ toggleMenu }) => (
  <header className="header">
    <button onClick={toggleMenu}>
      <img className="header__menu-icon" src={Menu} alt="Icono del menu"/>
    </button>
  </header>
);

export default Header;