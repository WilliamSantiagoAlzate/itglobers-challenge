// Icons
import Close from '../assets/svgs/close-icon.svg';

export const Menu = ({ 
  menu, 
  toggleMenu, 
  showMenu, 
  selectMenuItem 
}) => (
  <nav className={showMenu ? 'menu' : 'menu menu--collapsed'}>
    <div className="menu__icon">
      <button className="menu__button" onClick={toggleMenu}>
        <img src={Close} alt="Icono en forma de x para cerrar menu" />
      </button>
    </div>
    <ul className="menu__container">
      {menu.map(item => (
        <li
          key={item.id}
          onClick={() => selectMenuItem(item)} 
          className="menu__item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  </nav>
) 

export default Menu;