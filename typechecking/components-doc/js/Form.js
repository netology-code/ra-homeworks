'use strict';

const Form = (props) => {
  return (
    <div className="col-md-5 offset-md-4">
      <h1 className="text-center">Регистрация</h1>
      <hr/>
      <form onSubmit={props.handleSubmit}>
        <TextInput label="Email" type="email" name="email" onChange={props.handleChange} value={props.email}
                   required={true}/>
        <TextInput label="Имя" type="text" name="first_name" onChange={props.handleChange}
                   value={props.first_name}/>
        <TextInput label="Фамилия" type="text" name="last_name" onChange={props.handleChange}
                   value={props.last_name}/>
        <DateInput label="День Рождения" name="birthday" onChange={props.handleChange} value={props.birthday}/>
        <TextInput label="Пароль" type="password" name="password" onChange={props.handleChange}
                   value={props.password}/>
        <RadioGroup label="Пол" name="sex" onChange={props.handleChange} value={props.sex} list={['муж', 'жен']}/>

        <button type="submit" className="btn btn-primary mt-2 float-right">Зарегистрироваться</button>
      </form>
    </div>
  )
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,

  email: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  birthday: PropTypes.string,
  password: PropTypes.string,
  sex: PropTypes.oneOf(['муж', 'жен'])
};
