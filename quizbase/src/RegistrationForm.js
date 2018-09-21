import React, { Component } from 'react'

class RegistrationForm extends Component {
  constructor (props) {
    super()
    this.state = {
      name: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      email: ''
    }
  }
  render () {
    return (
      <div className='login box'>
        <form onSubmit={this.handleSubmit}>
          <div className='username'>
            <label>Username</label>
            <input type='text' value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })} />
          </div>
          <div className='password'>
            <label>Password</label>
            <input type='password' value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })} />
          </div>
          <div className='password'>
            <label>Confirm Password</label>
            <input type='password' value={this.state.passwordConfirmation}
              onChange={(e) => this.setState({ passwordConfirmation: e.target.value })} />
          </div>
          <div className='email'>
            <label>Email</label>
            <input type='text' value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })} />
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
