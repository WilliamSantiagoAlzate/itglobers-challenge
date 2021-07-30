import { useState } from 'react';
import { getFirstItem } from '../helpers/getFirstItem';

import { menu } from '../data/menu.json';
import Header from './Header';
import Menu from './Menu';
import Form from './Form';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(getFirstItem(menu));
  const [invalidForm, setInvalidForm] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });

  const toggleMenu = () => setShowMenu(!showMenu);

  const handlerInputs = (element) => {
    const { value, name } = element;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (
      formValue.name &&
      formValue.email &&
      formValue.phone &&
      formValue.age
    ) {
      console.log(formValue);
    } else {
      setInvalidForm(true);
    }
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
        invalidForm={invalidForm}
      />
    </main>
  )
}

export default App;