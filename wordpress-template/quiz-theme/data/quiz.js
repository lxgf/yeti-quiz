const quiz = [
  {
    "title": "<b>Какие достопримечательности</b> Вас интересуют больше всего?",
    "type": "multi-choice",
    "required": "true",
    "imageName": "mountains",
    "answers": [
      "Водопады",
      "Горные озера",
      "Панорамные смотровые на Эльбрус",
      "Исторические памятники",
      "Храмы и места Силы",
      "Интересно все"
    ]
  },
  {
    "title": "<b>Сколько человек<b> будет с Вами?",
    "type": "single-choice",
    "required": "true",
    "imageName": "river",
    "answers": [
      "Только Я",
      "Я + 1",
      "Я + 2",
      "Я + 3",
      "У нас группа до 10 человек",
      "У нас группа свыше 10 человек"
    ]
  },
  {
    "title": "<b>На сколько дней</b> Вы планируете свой отдых?",
    "type": "single-choice",
    "required": "true",
    "imageName": "buildings",
    "answers": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "Больше 5"
    ]
  },
  {
    "title": "Нужен <b>трансфер</b> из аэропорта?",
    "type": "single-choice",
    "required": "true",
    "imageName": "river-2",
    "answers": [
      "Да",
      "Нет",
      "Забрать из другого города"
    ]
  },
  {
    "title": "<b>В каком месяце</b> планируете тур?",
    "type": "single-choice",
    "required": "true",
    "imageName": "desert",
    "answers": [
      "Февраль",
      "Март",
      "Апрель"
    ]
  },
  {
    "title": "<b>Ваши пожелания</b> по туру?",
    "type": "text-input",
    "required": "false",
    "imageName": "river-3",
    "placeholder": "Введите ваш комментарий..."
  }
]

export default quiz