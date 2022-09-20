import { getData } from './data/data.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

const quizContainer = document.getElementById('quizContainer')

const checkbox = document.getElementById('checkbox')
const label = document.getElementById('label')
const ball = document.getElementById('ball')
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  label.classList.toggle('dark')
  ball.classList.toggle('dark')
})

const randomColor = () => {
  const colors = ['cyan', 'red', 'blue', 'orange']
  const random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScore(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestionIndex().question)
    ui.showAnswers(
      quiz.getQuestionIndex().answers,
      quiz.getQuestionIndex().multiple_correct_answers,
      answer => {
        quiz.guess(answer)
        renderPage(quiz, ui)
      }
    )
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
  }
}

const setupQuiz = async () => {
  const category = document.getElementById('category-select').value
  const limit = document.getElementById('limit-questions').value
  const questions = await getData(category, limit)
  const quiz = new Quiz(questions)
  const ui = new UI()
  quizContainer.className = randomColor()
  renderPage(quiz, ui)
}

;(() => {
  const startButton = document.getElementById('start')
  startButton.addEventListener('click', setupQuiz)
})()
