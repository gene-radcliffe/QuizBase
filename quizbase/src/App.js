import React, { Component } from 'react'
import './App.css'

import EntryForm from './EntryForm'
import Depot from './Depot'

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
    this.setState({ currentUser: user.username })
  }

  resetCurrentUser () {
    this.setState({
      currentUser: null
    })
  }

  logOut () {
    window.localStorage.clear()
    this.resetCurrentUser()
  }

  render () {
    const { currentUser } = this.state
    return (
      <div className='container'>
        <div className='box-left'>
          <div className='top-box-left'>
            {currentUser ? <div><p>Welcome {currentUser}</p>
              <button onClick={() => this.logOut()}>Log Out</button></div>
              : <p />}

          </div>
          <div className='nav-column' />
        </div>
        <div className='box-right'>
          <div className='top-bar'>
            <h1 className='page-header'>QuizBase</h1>
          </div>
          <div className='quiz-body-container'>
            {currentUser
              ? <Depot />
              : <EntryForm setCurrentUser={this.setCurrentUser} currentUser={this.currentUser} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
