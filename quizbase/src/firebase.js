import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAr6rP6WwG0eagMi25GWaYtOq6yW3oAUyY',
  authDomain: 'quizbase-momentum.firebaseapp.com',
  databaseURL: 'https://quizbase-momentum.firebaseio.com',
  projectId: 'quizbase-momentum',
  storageBucket: 'quizbase-momentum.appspot.com',
  messagingSenderId: '767017512196'
}
firebase.initializeApp(config)

export default firebase
