import React, { Component } from 'react'
import './App.css'

import EntryForm from './EntryForm'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser (user, username) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: username })
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
              ? <h1>Welcome {currentUser}</h1>
              : <EntryForm setCurrentUser={this.setCurrentUser} currentUser={this.currentUser} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
