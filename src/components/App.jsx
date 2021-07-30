import { useState } from 'react';
import { getFirstItem } from '../helpers/getFirstItem';
import { menu } from '../data/menu.json';
import Header from './Header';
import Menu from './Menu';
import Form from './Form';
import LightBox from './LightBox';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(getFirstItem(menu));
  const [showLightBox, setShowLightBox] = useState(false);
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
      setShowLightBox(true);
      setFormValue({
        name: '',
        email: '',
        phone: '',
        age: ''
      });
      setTimeout(() => {
        setShowLightBox(false);
      }, [5000])
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
      {showLightBox && 
        <LightBox message={'Tu información fue enviada con éxito, estaremos en contacto contigo'} />
      }
    </main>
  )
}

export default App;