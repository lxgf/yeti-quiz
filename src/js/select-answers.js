// находим чекбоксы с "простыми" ответами и чекбоксы с ответом, подразумеващим выбор всего

const answers = document.querySelectorAll('.list-item__checkbox:not(.select-all)')
const selectAllAnswer = document.querySelector('.select-all')

// отслеживаем количество отмеченных вопросов

let checkedAnswersCount = 0

// функция смены статуса чекбокса

function check(checkboxElement) {
  checkboxElement.checked = !checkboxElement.checked
}

// хендл на одинарный ответ

function answerHandle (e) {
  if (e.target.checked)
    checkedAnswersCount ++
  else {
    checkedAnswersCount--
    if (selectAllAnswer.checked)
      check(selectAllAnswer)
  }

  if (checkedAnswersCount === answers.length)
    check(selectAllAnswer)
}

// хендл на ответ для множественного выбора

function selectAllHandle () {
  if (selectAllAnswer.checked)
    answers.forEach(answer => {
      answer.checked = true
      checkedAnswersCount = answers.length
    })
  else
    answers.forEach(answer => {
      answer.checked = false
      checkedAnswersCount = 0
    })
}

// ставим слушатели на события смены чекбоксов

answers.forEach(answer => {
  answer.addEventListener('change', answerHandle)
})

selectAllAnswer.addEventListener('change', selectAllHandle)
