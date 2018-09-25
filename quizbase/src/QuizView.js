import React, { Component } from 'react'
import data from './data'

class QuizView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedQuiz: props.quiz,
      quizAnswers: [],
      result: []
    }
  }

  handleChange (e) {
    const quizAnswersCopy = this.state.quizAnswers.slice()
    this.setState({
      quizAnswers: quizAnswersCopy.concat({ answer: e.target.value })
    })
  }

  sendAnswers (answerObject) {
    console.log(answerObject, 'this is the object sendAnswers receives')
    data.postAnswers(answerObject)
      .then(result => this.setState({ result: result }))
  }

  formatAnswers (value) {
    console.log('this is what formatAnswers receives', value)
    const answerObject = {
      result: {
        answers:
          value
      }
    }
    console.log('this is the log formatanswers creates', answerObject)
    return answerObject
  }

  renderQuiz (quiz) {
    return (
      <div className='quiz-card'>
        <ul>
          {quiz.questions.map((question, idx) =>
            <li key={idx}> Question: {question.question}
              <ol>
                {question.answers.map((answer, index) =>
                  <li key={index}
                  ><input type='radio' value={answer.id} name={question.id} onChange={(e) => this.handleChange(e)}
                    />{answer.body}
                  </li>)}
              </ol>
            </li>
          )}
        </ul>
        <button
          onClick={() => this.sendAnswers(this.formatAnswers(this.state.quizAnswers))}>Submit</button>
      </div>
    )
  }

  render () {
    console.log(this.state.result)
    const quiz = this.state.selectedQuiz
    const result = this.state.result
    return (
      <React.Fragment>
        <h1>{quiz.title}</h1>
        {this.renderQuiz(quiz)}
        <h4>You answered {result.score} percent of questions correctly</h4>
      </React.Fragment>
    )
  }
}

export default QuizView
