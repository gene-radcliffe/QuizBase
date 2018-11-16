import React, { Component } from 'react'
import data from './data'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class LoginForm extends Component {
  constructor (props) {
    super()
    this.state = {
      username: '',
      password: '',
      pastQuizzes: props.pastQuizzes
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { username, password } = this.state
    data.login(username, password)
      .then(user => this.props.setCurrentUser(user))
    data.getPastQuizzes(username, password)
      .then(pastQuizzes => this.setState({
        pastQuizzes: pastQuizzes
      }))
  }

  render () {
    const { username, password } = this.state
    return (
      <React.Fragment>
        <div className=' log-in_container col s12'>
          <form onSubmit={this.handleSubmit}>
            <div className='box'>
              <div className='input-field'>
                <input type='text' value={username} placeholder='username'
                  onChange={(e) => this.setState({ username: e.target.value })} />
              </div>
              <div className='input-field col s12'>
                <input type='password' value={password} placeholder='password'
                  onChange={(e) => this.setState({ password: e.target.value })} />
              </div>
            </div>
            <button className='waves-effect waves-light btn' type='submit'>Login</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm
