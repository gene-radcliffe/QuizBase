import request from 'superagent'

let userToken
const apiDomain = process.env.REACT_APP_API_DOMAIN

const data = {
  setUserToken: (token) => {
    userToken = token
  },
  getUserToken: () => {
    return userToken
  },
  login: (username, password) => {
    return request.post(`https://vast-waters-61750.herokuapp.com/login`)
      .send({ username, password })
      .then(res => res.body.token)
      .then(token => {
        data.setUserToken(token)
        return { username, token }
      })
  },
  register: (username, password) => {
    return request.post(`${apiDomain}/api/register`)
      .send({ username, password })
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
  }

}

export default data
