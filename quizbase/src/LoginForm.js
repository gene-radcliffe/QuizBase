import React, { Component } from 'react'
import data from './data'

class LoginForm extends Component {
  constructor (props) {
    super()
    this.state = {
      username: '',
      password: ''
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
    )
  }
}

export default LoginForm
