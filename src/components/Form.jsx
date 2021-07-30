const Form = ({ 
  currentMenuItem,
  formValue,
  handlerInputs,
  submitForm 
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
      </section>
      <button className="form__button" type="submit">
        Consultar
      </button>
    </form>
  )
}

export default Form;