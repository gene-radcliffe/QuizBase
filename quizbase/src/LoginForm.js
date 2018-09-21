import React, { Component } from 'react'
import data from './data'

import RegistrationForm from './RegistrationForm'

class LoginForm extends Component {
  constructor (props) {
    super()
    this.state = {
      username: '',
      password: '',
      isLoggingIn: true
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { username, password } = this.state
    data.login(username, password)
      .then(user => this.props.setCurrentUser(user))
      .catch(err => {
        this.setState({
          errorMsg: err.message
        })
      })
  }

  render () {
    return (
      <React.Fragment>
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
            <button type='submit'>Login</button>
          </form>
        </div>
        <RegistrationForm />
      </React.Fragment>
    )
  }
}

export default LoginForm
