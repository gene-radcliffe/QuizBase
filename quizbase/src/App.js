import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import EntryForm from './EntryForm'
import Depot from './Depot'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null,
      pastQuizzes: [],
      isLogging:false
    }
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.isLogging = this.isLogging.bind(this)
  }

  isLogging(logging){
      this.setState({isLogging: logging})
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
    const { currentUser} = this.state
    console.log("is Logging " + this.state.isLogging)

    if(this.state.isLogging == true){
      return(
        <React.Fragment>
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      <Router>
        <div className='container'>
          <div className='box-left'>
            <div className='top-box-left'>
              {currentUser ? <div><p>Welcome {currentUser}</p>
                <button className='waves-effect waves-light btn' onClick={() => this.logOut()}>Log Out</button></div>
                : <p />}
            </div>
            <div className='nav-column' />
          </div>
          <div className='box-right head'>
            <div className='top-bar'>
              <h1 className='page-header'>QuizBase</h1>
            </div>

            <div className='quiz-body-container'>
              <Route exact path='/' render={() =>
                <Guard condition={this.state.currentUser} redirectTo='/login'>
                  <Depot currentUser={this.state.currentUser} />
                </Guard>} />
              <Route path='/login' render={() =>
                <Guard condition={!this.state.currentUser} redirectTo='/'>
                  <EntryForm isLogging={this.isLogging} setCurrentUser={this.setCurrentUser} pastQuizzes={this.state.pastQuizzes} />
                </Guard>} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

const Guard = ({ redirectTo, condition, children }) => {
  if (condition) {
    return children
  } else {
    return <Redirect to={redirectTo} />
  }
}

export default App
