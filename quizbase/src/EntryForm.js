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
    const {registering}=this.state
    const authorized = this.props.passwordOK
    return (
      <React.Fragment>
        <div className='shadow-qb entry-form'>
          <div>
          {registering ? <RegistrationForm setCurrentUser={this.props.setCurrentUser}
              currentUser={this.props.currentUser}
              registering={this.props.registering} />
            : <LoginForm isAuthorized={this.props.isAuthorized} pastQuizzes={this.props.pastQuizzes} setCurrentUser={this.props.setCurrentUser} currentUser={this.props.currentUser} isLogging={this.props.isLogging}  />}
          </div>
          <div className='entry-options'>
            <div className="entry-text_container">
              <div className='entry-text' onClick={() => this.renderLogin()}>
                <a>Log In</a>
              </div>
              <div className='entry-text' onClick={() => this.renderRegister()}>
                <a>Register</a>
              </div>
            </div>
            {authorized ? <div className="password-message "> </div> : <div className="password-message password-bad right col-6"> Wrong Username / Password</div>

            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default EntryForm
