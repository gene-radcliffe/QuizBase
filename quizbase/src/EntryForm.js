import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class EntryForm extends Component {
  constructor (props) {
    super()
    this.state = {
      registering: false
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
        <div className='shadow-qb entry-form'>
          <div>
          {this.state.registering
            ? <RegistrationForm setCurrentUser={this.props.setCurrentUser}
              currentUser={this.props.currentUser}
              registering={this.props.registering} />
            : <LoginForm pastQuizzes={this.props.pastQuizzes} setCurrentUser={this.props.setCurrentUser} currentUser={this.props.currentUser} />
          }
          </div>
          <div className='entry-options'>
            <div className='entry-text'onClick={() => this.renderLogin()}>
              <a>Log In</a>
            </div>
            <div className='entry-text'onClick={() => this.renderRegister()}>
              <a>Register</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default EntryForm
