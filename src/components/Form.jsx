import { Validator } from '../helpers/validator';

const Form = ({ 
  currentMenuItem,
  formValue,
  handlerInputs,
  submitForm,
  invalidForm 
}) => {
  return (
    <form className="form" onSubmit={submitForm}>
      <h3 className="form__title">
        {`Hola, bienvenido, sabemos que quieres viajar en un ${currentMenuItem.name}, por favor diligencia el siguiente formulario:`}
      </h3>
      <section className="form__section">
        <label className="form__label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="form__input" 
          id="name" 
          name="name" 
          type="text"
          value={formValue.name}
          onChange={({ target }) => handlerInputs(target)} 
        />
        {Validator.pattern(/[$%&|<>#!]/)(formValue.name) && formValue.name &&
          <p className="form__error">No debe contener caracteres especiales</p>
        }
        {invalidForm && !formValue.name &&
          <p className="form__error">Campo requerido</p>
        }
      </section>
      <section className="form__section">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input 
          className="form__input" 
          id="email" 
          name="email" 
          type="email"
          value={formValue.email}
          onChange={({ target }) => handlerInputs(target)} 
        />
        {!Validator.pattern(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)(formValue.email) 
        && formValue.email &&
          <p className="form__error">Email invalido</p>
        }
        {invalidForm && !formValue.email &&
          <p className="form__error">Campo requerido</p>
        }
      </section>
      <section className="form__section">
        <label className="form__label" htmlFor="phone">
          Celular
        </label>
        <input 
          className="form__input" 
          id="phone" 
          name="phone" 
          type="number"
          value={formValue.phone}
          onChange={({ target }) => handlerInputs(target)} 
        />
        {!Validator.pattern(/^\d*$/)(formValue.phone) && formValue.phone &&
          <p className="form__error">Número de celular invalido</p>
        }
        {invalidForm && !formValue.phone &&
          <p className="form__error">Campo requerido</p>
        }
      </section>
      <section className="form__section">
        <label className="form__label" htmlFor="age">
          Edad
        </label>
        <input 
          className="form__input" 
          id="age" 
          name="age" 
          type="number"
          value={formValue.age}
          onChange={({ target }) => handlerInputs(target)} 
        />
        {(!Validator.min(18)(formValue.age) || !Validator.max(100)(formValue.age)) && formValue.age &&
          <p className="form__error">La edad debe estar entre 18 y 100 años</p>
        }
        {!Validator.pattern(/^\d*$/)(formValue.age) && formValue.age &&
          <p className="form__error">Número de edad invalido</p>
        }
        {invalidForm && !formValue.age &&
          <p className="form__error">Campo requerido</p>
        }
      </section>
      <button className="form__button" type="submit">
        Consultar
      </button>
    </form>
  )
}

export default Form;