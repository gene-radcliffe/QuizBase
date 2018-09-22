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
    return request.get(`${apiUrl}/login`)
      .auth(username, password)
      .then(res => res.body.token)
      .then(token => {
        data.setUserToken(token)
        return { username, token }
      })
  },
  register: (username, password, name, email) => {
    return request.post(`${apiUrl}/register`)
      .send({ username, password })
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
  }

}

export default data
