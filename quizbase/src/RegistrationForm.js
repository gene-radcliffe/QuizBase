import React, { Component } from 'react'
import data from './data'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class RegistrationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
    this.validateConfirmPassword = this.validateConfirmPassword.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { name, username, password, email } = this.state
    const newUserObject = { user: {
      username: username.toLowerCase(),
      password: password,
      email: email.toLowerCase(),
      name: name.toLowerCase()
    } }
    data.register(newUserObject)
      .then(user => {this.props.setCurrentUser(user)
      })
  }
  validatePassword(e){

    if(e.target.value.length == 0){
      if(e.target.classList.contains("valid")){
        e.target.classList.remove("valid")
      }
      if(e.target.classList.contains("invalid")){
        e.target.classList.remove("invalid")
      }

    }

    if(e.target.value.length >= 1 && e.target.value.length < 6){
      if(e.target.classList.contains("valid")){
          e.target.classList.remove("valid")
      }
        e.target.classList.add("invalid")
    }
    if(e.target.value.length >=6 ){
      if(e.target.classList.contains("invalid")){
          e.target.classList.remove("invalid")
      }
        e.target.classList.add("valid")
    }
    this.setState({ password: e.target.value })
    //(e) => this.setState({ password: e.target.value }
  }

  validateConfirmPassword(e){

    if(e.target.value.length == 0){
      if(e.target.classList.contains("valid")){
        e.target.classList.remove("valid")
      }
      if(e.target.classList.contains("invalid")){
        e.target.classList.remove("invalid")
      }

    }

    if(e.target.value.length >= 1 && e.target.value.length < 6){
      if(e.target.classList.contains("valid")){
          e.target.classList.remove("valid")
      }
        e.target.classList.add("invalid")
    }
    if(e.target.value.length >=6 ){
      let password = document.getElementById("password")
      
      if(e.target.value == password.value){
        
        if(e.target.classList.contains("invalid")){
          e.target.classList.remove("invalid")
        }
        e.target.classList.add("valid")

      }else{
        
        if(e.target.classList.contains("valid")){
          e.target.classList.remove("valid")
        }
        e.target.classList.add("invalid")
      }

    }
    this.setState({ passwordConfirmation: e.target.value })
  }

  render () {
    return (
      <div className='login box'>
        <form onSubmit={this.handleSubmit}>
          <div className='name box'>
            <input className='field' type='text'
              value={this.state.name}
              placeholder='name'
              onChange={(e) => this.setState({ name: e.target.value })} />
          </div>
          <div className='username box'>
            <input className='field' type='text'
              value={this.state.username}
              placeholder='username'
              onChange={(e) => this.setState({ username: e.target.value })} />
          </div>
          <div className='input-field password box'>
            <input id='password' className='validate field' type='password'
              value={this.state.password}
              placeholder='password'
              onChange={(e)=> this.validatePassword(e)} />
          </div>
          <div className='input-field password box'>
            <input id='confirm-password' className='validate field' type='password'
              value={this.state.passwordConfirmation}
              placeholder='confirm password'
              onChange={(e) => this.validateConfirmPassword(e)} />
              <span className="helper-text" data-error="Passwords do not match" data-success="Passwords match">Helper text</span>
          </div>
          <div className='email box'>
            <input className='field' type='text'
              value={this.state.email}
              placeholder='email'
              onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <button type='submit' className='waves-effect waves-light btn'>Register</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
