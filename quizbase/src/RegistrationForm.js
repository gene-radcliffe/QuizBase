import React, { Component } from 'react'
import data from './data'

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

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { name, username, password, email } = this.state
    const newUserObject = { user: {
      username: username,
      password: password,
      email: email,
      name: name
    } }
    data.register(newUserObject)
      .then(user => this.props.setCurrentUser(user))
  }

  render () {
    return (
      <div className='login box'>
        <form onSubmit={this.handleSubmit}>
          <div className='name box'>
            <input className='field' type='text'
              value={this.state.name}
              placeholder='name'
              onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className='username box'>
            <input className='field' type='text'
              value={this.state.username}
              placeholder='username'
              onChange={(e) => this.setState({ username: e.target.value })} />
          </div>
          <div className='password box'>
            <input className='field' type='password'
              value={this.state.password}
              placeholder='password'
              onChange={(e) => this.setState({ password: e.target.value })} />
          </div>
          <div className='password box'>
            <input className='field' type='password'
              value={this.state.passwordConfirmation}
              placeholder='confirm password'
              onChange={(e) => this.setState({ passwordConfirmation: e.target.value })} />
          </div>
          <div className='email box'>
            <input className='field' type='text'
              value={this.state.email}
              placeholder='email'
              onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <button type='submit' className='waves-effect waves-light btn'>Register</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
