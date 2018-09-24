import React, { Component } from 'react'
import data from './data'

class Depot extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: [
        'title 1',
        'title 2',
        'title 3'
      ]
    }
  }

  componentDidMount () {
    this.loadQuizzes()
  }

  loadQuizzes () {
    data.getQuizzes()
      .then(quizzes => this.setState({
        quizzes: quizzes
      }))
  }

  render () {
    const quizzes = this.state.quizzes
    return (
      <React.Fragment>
        <ul className='quiz-list'>
          {quizzes.map((quiz, i) =>
            <li key={i}>
              <h1>Quiz: {quiz.title}</h1>
            </li>
          )}
        </ul>
        {this.state.quizzes}
      </React.Fragment>
    )
  }
}

export default Depot
