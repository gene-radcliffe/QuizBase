import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class EntryForm extends Component {
  constructor (props) {
    super()
    this.state = {
      registering: false,
      class: 'entry-text'
    }
  }

  renderRegister (e) {
    this.setState({
      registering: true
    })
  }
  renderLogin (e) {
    this.setState({
      registering: false
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className='entry-box'>
          <div className='entry-options'>
            <div className='entry-text'
              onClick={() => this.renderLogin()}>
              <a>Log In</a>
            </div>
            <div className='entry-text'
              onClick={() => this.renderRegister()}>
              <a>Register</a>
            </div>
          </div>
          {this.state.registering
            ? <RegistrationForm setCurrentUser={this.props.setCurrentUser} currentUser={this.props.currentUser} />
            : <LoginForm setCurrentUser={this.props.setCurrentUser} currentUser={this.props.currentUser} />
          }
        </div>
      </React.Fragment>
    )
  }
}

export default EntryForm
