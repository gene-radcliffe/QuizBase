import React, { Component } from 'react'
import data from './data'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
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
    this.validateEmail = this.validateEmail.bind(this)
    this.validatePasswordsOnBlur = this.validatePasswordsOnBlur.bind(this)
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
    console.log("e" + e.target.id)
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
        }console.log("whoa")
        e.target.classList.add("valid")

      }else{
        
        if(e.target.classList.contains("valid")){
          e.target.classList.remove("valid")
        }
        e.target.classList.add("invalid")
      }

    }
    
  }
  validateEmail(e){

    let myRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

    let result = myRegex.exec(e.target.value)
    if(result != null){
      console.log("result " +result.length)
      if(result.length==4){
        if(e.target.classList.contains("invalid")){
          e.target.classList.remove("invalid")
      }
        e.target.classList.add("valid")
      }
      if(result.length<4){
        if(e.target.classList.contains("valid")){
          e.target.classList.remove("valid")
        }
        e.target.classList.add("invalid")
      }
     }

    this.setState({ email: e.target.value })
  }
  validatePasswordsOnBlur(){

    let password = this.state.password;
    let cpassword = this.state.passwordConfirmation;
    let cpassword_input = document.getElementById("confirm-password")
    
    if(password == cpassword){
  
        if(cpassword_input.classList.contains("invalid")){
          cpassword_input.classList.remove("invalid")
        }
        cpassword_input.classList.add("valid")      
    }
    if(password != cpassword){
  
      if(cpassword_input.classList.contains("valid")){
        cpassword_input.classList.remove("valid")
      }
      cpassword_input.classList.add("invalid")      
  }
  
  }
  render () {
    return (
      <div className='registration-container box'>
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
            <input id='password' className='field' type='password'
              value={this.state.password}
              placeholder='password'
              onChange={(e)=> this.validatePassword(e)} onBlur={this.validatePasswordsOnBlur}/>
              <span className="helper-text" data-error="Your password must be at least 6 characters" data-success="Your password is ok"></span>
          </div>
          <div className='input-field password box'>
            <input id='confirm-password' className='field' type='password'
              value={this.state.passwordConfirmation}
              placeholder='confirm password'
              onChange={(e) => this.setState({ passwordConfirmation: e.target.value })} onInput={(e)=>this.validateConfirmPassword(e)}/>
              <span className="helper-text" data-error="Your passwords do not match" data-success="Your passwords match"></span>
          </div>
          <div className='input-field email box'>
            <input className='validate field' type='email'
              value={this.state.email}
              placeholder='email'
              onChange={(e) => this.validateEmail(e)} />
              <span className="helper-text" data-error="Please enter valid email" data-success="Email is Valid"></span>
          </div>
          <button type='submit' className='waves-effect waves-light btn'>Register</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
