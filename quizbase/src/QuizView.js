import React, { Component } from 'react'
import data from './data'
import Results from './Results'

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
                  <p key={index}>
                    <label>
                      <input type='radio' value={answer.id} name={question.id} onChange={(e) => this.handleChange(e)} />
                      <span>{answer.body}</span>
                    </label>
                  </p>)}
              </ol>
            </li>
          )}
        </ul>
        <button className='waves-effect waves-light btn'
          onClick={() => this.sendAnswers(this.formatAnswers(this.state.quizAnswers))}>Submit</button>
      </div>
    )
  }

  render () {
    console.log(this.state.result)
    const quiz = this.state.selectedQuiz

    return (
      <React.Fragment>
        {this.state.result.length !== 0
          ? <Results result={this.state.result} />
          : <div>
            <h1>{quiz.title}</h1>
            {this.renderQuiz(quiz)}
          </div>}
      </React.Fragment>
    )
  }
}

export default QuizView
