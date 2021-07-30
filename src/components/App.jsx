import { useState } from 'react';
import { getFirstItem } from '../helpers/getFirstItem';
import { menu } from '../data/menu.json';
import Header from './Header';
import Menu from './Menu';
import Form from './Form';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(getFirstItem(menu));
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });

  const toggleMenu = () => setShowMenu(!showMenu);

  const handlerInputs = (element) => {
    setFormValue({
      ...formValue,
      [element.name]: element.value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValue);
  }
  
  return (
    <main>
      <Header toggleMenu={toggleMenu} />
      <Menu
        menu={menu} 
        showMenu={showMenu} 
        toggleMenu={toggleMenu}
        selectMenuItem={setCurrentMenuItem} 
      />
      <Form 
        currentMenuItem={currentMenuItem}
        formValue={formValue}
        handlerInputs={handlerInputs}
        submitForm={submitForm} 
      />
    </main>
  )
}

export default App;