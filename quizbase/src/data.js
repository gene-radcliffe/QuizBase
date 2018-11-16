import request from 'superagent/superagent.js'

let userToken
const apiUrl = `https://intense-cove-32362.herokuapp.com`

const data = {
  setUserToken: (token) => {
    userToken = token
  },
  getUserToken: () => {
    return userToken
  },
  login: (username, password) => {
    return request.get(`${apiUrl}/api/login`)
      .auth(username, password)
      .then(res =>{
        let status=null;
        if(res.body['user']==null){
          status=res.body.status
        }else{
          status=res.body.user.status
        }
        
        if(status=='ok'){
          let token = res.body.user.token;
          let username = res.body.user.name;
          let authorized = true;
          data.setUserToken(token)
          return {token, username, authorized}
        }
        if(status=='unauthorized'){
          let authorized = false;
          return {authorized}
        }
      })
      // res.body.user.token)
      // .then(token => {
      //   data.setUserToken(token)
      //   return { token, username }
      // })
  },
  register: (newUserObject) => {
    return request.post(`${apiUrl}/api/registers`)
      .send(newUserObject)
      .then(res => res.body.user.token)
      .then(token => {
        data.setUserToken(token)
        return { token }
      })
  },
  getQuizzes: () => {
    return request.get(`${apiUrl}/api/quizzes`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => {
        let quizzes = res.body.quizzes
        return (quizzes)
      })
  },
  getQuestions: () => {
    return request.get(`${apiUrl}/api/questions`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => {
        let questions = res.body.questions
        return (questions)
      })
  },
  getAnswers: () => {
    return request.get(`${apiUrl}/api/answers`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => {
        let answers = res.body.answers
        return (answers)
      })
  },
  postAnswers: (answerObject) => {
    return request.post(`${apiUrl}/api/results`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(answerObject)
      .then(res => {
        let result = res.body.result
        return (result)
      })
  },
  getPastQuizzes: (username, password) => {
    return request.get(`${apiUrl}/api/login`)
      .auth(username, password)
      .then(res => res.body.user.id)
      .then(id => {
        request.get(`${apiUrl}/api/users/${id}`)
          .then(res => {
            return (res)
          })
      })
  }
}
export default data
