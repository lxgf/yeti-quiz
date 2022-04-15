//находим чекбоксы с "простыми" ответами и чекбоксы с ответом, подразумеващим выбор всего

const answers = document.querySelectorAll('.list-item__checkbox:not(.select-all)')
const selectAllAnswer = document.querySelector('.select-all')

let checkedAnswers = 0

const answerHandle = e => {
  if (e.target.checked)
    checkedAnswers ++
  else
    checkedAnswers--

  console.log(checkedAnswers, answers)
}

answers.forEach(answer => {
  addEventListener('change', answerHandle)
})