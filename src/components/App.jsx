import { useState } from 'react';
import { getFirstItem } from '../helpers/getFirstItem';
import { menu } from '../data/menu.json';
import Header from './Header';
import Menu from './Menu';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(getFirstItem(menu));

  const toggleMenu = () => setShowMenu(!showMenu);
  
  return (
    <main>
      <Header toggleMenu={toggleMenu} />
      <Menu
        menu={menu} 
        showMenu={showMenu} 
        toggleMenu={toggleMenu}
        selectMenuItem={setCurrentMenuItem} 
      />
      <h3>{`Hola, bienvenido, sabemos que quieres viajar en un ${currentMenuItem.name}, por favor diligencia el siguiente formulario:`}</h3>
    </main>
  )
}

export default App;