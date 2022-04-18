// отслеживаем количество отмеченных вопросов

let checkedAnswersCount = 0

// функция смены статуса чекбокса

function check(checkboxElement) {
  checkboxElement.checked = !checkboxElement.checked
}

// хендл на одинарный ответ

export function answerHandle (selectAllAnswer) {
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

export function selectAllHandle (selectAllAnswer) {
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
