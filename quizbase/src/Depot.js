import React, { Component } from 'react'
import data from './data'

class Depot extends Component {
  constructor (props) {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount () {
    this.loadQuizzes()
  }

  loadQuizzes () {
    data.getQuizzes()
      .then(quizzes => this.setState({ quizzes: quizzes }))
  }

  render () {
    console.log(this.state.quizzes)
    return (
      <React.Fragment>
        <ul className='quiz-list'>
          {this.state.quizzes.map((quiz, i) =>
            <li key={i}>
              <h1>Quiz: {quiz.quiz.title}</h1>
            </li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

export default Depot
