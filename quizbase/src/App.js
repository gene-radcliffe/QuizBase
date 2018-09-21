import React, { Component } from 'react'
import './App.css'

import LoginForm from './LoginForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  render () {
    const { currentUser } = this.state
    return (
      <div className='container'>
        <div className='box-left'>
          <div className='top-box-left' />
          <div className='nav-column' />
        </div>
        <div className='box-right'>
          <div className='top-bar'>
            <h1 className='page-header'>QuizBase</h1>
          </div>
          <div className='quiz-body-container'>
            {currentUser
              ? <h1>Welcome Placeholder</h1>
              : <LoginForm setCurrentUser={this.setCurrentUser} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
