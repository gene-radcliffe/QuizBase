import React, { Component } from 'react'
import Depot from './Depot'

class Results extends Component {
  constructor (props) {
    super()
    this.state = {
      result: props.result,
      home: false
    }
  }

  goHome () {
    this.setState({
      home: true
    })
  }

  render () {
    const result = this.state.result
    return (
      <React.Fragment>
        {this.state.home
          ? <Depot />
          : <div>
            <h4>
      You answered {result.score} percent of questions correctly!
            </h4>
            <button className='waves-effect waves-light btn'
              onClick={() => this.goHome()}>Return Home</button>
          </div>}
      </React.Fragment>
    )
  }
}

export default Results
