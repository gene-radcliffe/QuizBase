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
      .then(res => this.props.setCurrentUser(res, username))
      //   this.setState({
      //     errorMsg: err.message
      //   })
      // })
  }

  render () {
    const { username, password } = this.state
    return (
      <React.Fragment>
        <div className='login box'>
          <form onSubmit={this.handleSubmit}>
            <div className='username box'>
              <input className='field' type='text' value={username} placeholder='username'
                onChange={(e) => this.setState({ username: e.target.value })} />
            </div>
            <div className='password box'>
              <input className='field' type='password' value={password} placeholder='password'
                onChange={(e) => this.setState({ password: e.target.value })} />
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm
