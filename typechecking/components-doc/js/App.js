'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      birthday: '',
      password: '',
      sex: 'муж'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    alert('Профиль зарегистрирован');
  }

  onChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="row">
        <Form {...this.state} handleChange={this.onChange} handleSubmit={this.onSubmit}/>
      </div>
    );
  }
};
