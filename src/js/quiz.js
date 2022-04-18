import quiz from '../data/quiz.json'
import questionImages from '../images/questions/*.jpg'

const questionHeadingElem = document.querySelector('.question__heading')
const answersBlock = document.querySelector('.question__answers')
const questionImageElem = document.querySelector('.question__image')

let activeQuestion = 0

function displayQuestion(index) {
  const questionData = quiz[index]

  questionHeadingElem.innerHTML = questionData.title
  questionImageElem.setAttribute('src', questionImages[questionData.imageName])

  if (activeQuestion > 0) {
    document.querySelector('.question__back-btn').classList.add('is-visible')
    document.querySelector('.question__buttons').classList.add('is-divided')
  } else {
    document.querySelector('.question__back-btn').classList.remove('is-visible')
    document.querySelector('.question__buttons').classList.remove('is-divided')
  }

  switch (questionData.type) {
    case "multi-choice":
      answersBlock.classList = 'question__answers question__check-list check-list'
      answersBlock.innerHTML = ''

      questionData.answers.forEach((answer, index) => {
        const listElem = document.createElement('li')

        const checkListItem = document.createElement('label')
        checkListItem.classList = 'check-list__list-item list-item'

        const checkboxElem = document.createElement('input')
        checkboxElem.setAttribute('type', 'checkbox')
        checkboxElem.setAttribute('name', `q_${index}`)
        checkboxElem.classList = 'list-item__check-input checkbox'

        checkListItem.appendChild(checkboxElem)

        checkListItem.append(answer)

        listElem.appendChild(checkListItem)
        answersBlock.appendChild(listElem)
      })
      break
    case "single-choice":
      answersBlock.classList = 'question__answers question__check-list check-list'
      answersBlock.innerHTML = ''

      questionData.answers.forEach(answer => {
        const listElem = document.createElement('li')

        const checkListItem = document.createElement('label')
        checkListItem.classList = 'check-list__list-item list-item'
        if (answer.hasOwnProperty('allSelect') && answer.allSelect)
          checkListItem.classList.add('select-all')

        const radioElem = document.createElement('input')
        radioElem.setAttribute('type', 'radio')
        radioElem.setAttribute('name', `q_${index}`)
        radioElem.classList = 'list-item__check-input radio'

        checkListItem.appendChild(radioElem)

        checkListItem.append(answer)

        listElem.appendChild(checkListItem)
        answersBlock.appendChild(listElem)
      })
      break
    case "text-input":
      answersBlock.classList = 'question__answers question__text-block text-block'
      answersBlock.innerHTML = ''

     const textAreaElem = document.createElement('textarea')
      textAreaElem.classList = 'text-block__textarea textarea'
      textAreaElem.setAttribute('placeholder', questionData.placeholder)

      answersBlock.appendChild(textAreaElem)
      break
    default:
      break
  }

  if (questionData.required === 'false') {
    const notRequiredMessageElem = document.createElement('p')
    notRequiredMessageElem.append('Вы можете пропустить этот вопрос')
    notRequiredMessageElem.classList = 'question__message'

    answersBlock.appendChild(notRequiredMessageElem)
  }
}

displayQuestion(0)

const nextBtn  = document.querySelector('.question__next-btn')
nextBtn.addEventListener('click', () => {
  if (activeQuestion < Object.keys(quiz).length-1)
    displayQuestion(++activeQuestion)
})

const backBtn  = document.querySelector('.question__back-btn')
backBtn.addEventListener('click', () => {
  if (activeQuestion > 0)
    displayQuestion(--activeQuestion)
})


