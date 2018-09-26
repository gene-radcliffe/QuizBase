import React, { Component } from 'react'
import data from './data'

import QuizView from './QuizView'

class Depot extends Component {
  constructor (props) {
    super()
    this.state = {
      quizzes: [],
      selectedQuiz: []
    }
  }
  componentDidMount () {
    this.loadQuizzes()
  }
  loadQuizzes () {
    data.getQuizzes()
      .then(quizzes => this.setState({ quizzes: quizzes }))
  }
  selectQuiz (quiz) {
    this.setState({
      selectedQuiz: quiz
    })
  }

  renderQuiz (quiz) {
    return (
      <ul>
        {quiz.quiz.questions.map((question, idx) =>
          <li key={idx}> Question: {question.question}
            <ol>
              {question.answers.map((answer, index) =>
                <li key={answer}
                ><input type='radio' />{answer.body}</li>)}
            </ol>
          </li>
        )}
      </ul>
    )
  }

  render () {
    console.log(this.state.selectedQuiz)
    return (
      <React.Fragment>
        <div className='entry-box quiz-view'>
          {(this.state.selectedQuiz.length !== 0)
            ? <QuizView quiz={this.state.selectedQuiz} />
            : <ul className='quiz-list'>
              {this.state.quizzes.map((quiz, i) =>
                <li key={i}>
                  <h4 className='quiz-title'
                    onClick={() => this.selectQuiz(quiz.quiz)}
                  >Quiz: {quiz.quiz.title}</h4>
                </li>
              )}
            </ul>}
        </div>
      </React.Fragment>
    )
  }
}

export default Depot
