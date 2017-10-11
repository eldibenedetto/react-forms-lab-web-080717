import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      login: "",
      password: "",
    };
  }

  handleLogin = (event) => {
    this.setState({
      login: event.target.value,
    }, () => console.log(this.state.login))
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    }, () => console.log(this.state.password))
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.login} onChange={this.handleLogin}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
