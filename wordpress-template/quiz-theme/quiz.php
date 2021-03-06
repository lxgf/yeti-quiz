<?
/*
Template Name: Yeti Quiz
*/

wp_head();
?>

<title>
  Йети - Опрос
</title>

<div class="head-block">
    <div class="foreground"></div>
    <div class="container container--top">
      <header class="header">
        <a class="header__logo-link" href="/">
          <img class="logo logo-link__logo" src="<? echo get_stylesheet_directory_uri() . "/images/logo.svg" ?>" alt="Йети">
          <span class="logo-link__text">
            Комфортные джип-туры <br>
            по Кавказским Минеральным Водам
          </span>
        </a>

        <div class="header__email email">
          <div class="email__icon"></div>
          <div class="email_address">jeeptourskavkaz@ya.ru</div>
        </div>

        <ul class="header__socials socials">
          <li>
            <a class="socials__link socials__link--whatsapp" href="https://www.whatsapp.com/"></a>
          </li>
          <li>
            <a class="socials__link socials__link--telegram" href="https://www.telegram.org/"></a>
          </li>
          <li>
            <a class="socials__link socials__link--instagram" href="https://www.instagram.com/"></a>
          </li>
        </ul>

        <button class="button menu-btn header__menu-btn"></button>

        <div class="header__phone-block phone-block">
          <button class="button phone-btn">
            Заказать звонок
          </button>
          <div class="phone-block__phone-text phone-text">
            <p class="phone-text__phone">
              +7 (906) 499 99 94
            </p>
            <p class="phone-text__time">
              Время работы: 24/7
            </p>
          </div>
        </div>
      </header>
    </div>

    <div class="head-block__landing landing">
      <div class="container">
        <p class="heading landing__heading">
          Хотите сменить обстановку и <b>отдохнуть душой среди гор и водопадов?</b>
        </p>
        <p class="landing__description">
          Ответьте на несколько вопросов и получите онлайн расчет
          тура по Кавказу на современном комфортабельном внедорожнике
        </p>

        <button class="button action-btn landing__action-btn">
          Подобрать маршрут и узнать стоимость
        </button>
      </div>

      <div class="head-block__notification notification">
        <div class="notification__point"></div>
        <div class="notification__notification-text notification-text">
          <p class="notification-text__text notification-text__text--yellow">
            Вы получите гайд
          </p>
          <p class="notification-text__text">
            “Как сэкономить на путешествии”
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="pluses">
    <div class="container">
      <div class="pluses__inner">
        <div class="pluses__plus plus plus--left">
          <div class="plus__icon"></div>
          <p class="plus__text">
            Обед <br> включен
          </p>
        </div>
        <div class="pluses__plus plus plus--right">
          <div class="plus__icon plus__icon--money"></div>
          <p class="plus__text">
            Быстрый возврат денег
          </p>
        </div>

        <div class="pluses__plus plus">
          <div class="plus__icon plus__icon--family"></div>
          <p class="plus__text">
            Для любого возраста: можно отдыхать семьей
          </p>
        </div>
        <div class="pluses__plus plus">
          <div class="plus__icon plus__icon--time"></div>
          <p class="plus__text">
            Время тура не ограничено жесткими рамками
          </p>
        </div>
        <div class="pluses__plus plus">
          <div class="plus__icon plus__icon--map"></div>
          <p class="plus__text">
            Программу тура можно изменить по желанию гостей
          </p>
        </div>
      </div>
    </div>
  </div>

  <main>
    <div class="container container-bottom">
      <div class="questions">
        <div class="questions__question question">
          <div class="question__description">
            Пройдите короткий тест и получите индивидуальное предложение по туру
          </div>
          <div class="question__question-body question-body">
            <div class="heading question__heading">
              no data
            </div>
            <ul class="question__answers">
              no data
            </ul>
            <img class="question__image" src="" alt="no image">
            <div class="question__buttons">
              <button class="button action-btn action-btn--dark question__back-btn">Назад</button>
              <button class="button action-btn action-btn--light question__next-btn">Далее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<? wp_footer(); ?> 