import request from 'superagent'

let userToken
const apiUrl = `https://vast-waters-61750.herokuapp.com`

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
      .then(res => res.body.user.token)
      .then(token => {
        data.setUserToken(token)
        return { token, username }
      })
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
  }
}

export default data
