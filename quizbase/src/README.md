


// Children of the depot component will be <TakeQuiz /> and <Dashboard  />.
// <TakeQuiz /> will have state of questions: [] and userAnswers: [] which will
// house the selected answers from the quiz.  It will have a method that will be
// called upon mounting that will get the quizzes from the API based on user ID.
//
// <Dashboard /> will have state of results: [] which will house the quiz scores
// based on the user that is logged in, and admin: boolean to check if the current
// user has admin privelages.
//
// both components will receive currentUser as props.
//
// ** If the user is an admin, their dashboard will have the option to <EditQuiz />
// <EditQuiz /> will receive the same props and state as <TakeQuiz />, but it
// will have fields to edit questions/answers.