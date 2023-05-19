import React from "react";
import { useParams } from "react-router-dom";

import { data } from "../../data";
import { Item } from "../../components/item/item";
import "./index.css";

export const VacancyPage = () => {
  const params = useParams();

  return (
    <section className="vacancy-page">
      <div className="container">
        {data.map((el) => {
          if (el.id.toString() === params.id) {
            return (
              <div className="vacancy__wrap">
                <Item
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  paymentFrom={el.paymentFrom}
                  paymentTo={el.paymentTo}
                  currency={el.currency}
                  schedule={el.schedule}
                  location={el.location}
                  selected={el.selected}
                />
                <div className="vacancy__description">
                  <div className="description__row">
                    <span>Обязанности:</span>
                    <ul>
                      <li>
                        Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной продукции.
                      </li>
                      <li>
                        Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.
                      </li>
                      <li>
                        Создание дизайна логотипов и брендбуков
                      </li>
                      <li>
                        Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка
                      </li>
                    </ul>
                  </div>
                  <div className="description__row">
                    <span>Требования:</span>
                    <ul>
                      <li>
                        Собеседование – после успешного прохождения тестового задания
                      </li>
                      <li>
                        Рассматриваются кандидаты только с опытом работы
                      </li>
                      <li>
                        Обязательно - наличие портфолио
                      </li>
                      <li>
                        Умение самостоятельно принимать решения, умение объективно оценивать свою работу, работать в
                        режиме многозадачности и переключаться с одного задания к другому и планировать свой день.
                        Соблюдать сроки.
                      </li>
                      <li>
                        Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления
                      </li>
                    </ul>
                  </div>
                  <div className="description__row">
                    <span>Условия:</span>
                    <ul>
                      <li>
                        Оформление по контракту
                      </li>
                      <li>
                        Полный социальный пакет
                      </li>
                      <li>
                        Премирование по результатам работы
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
          return null;
        })}
      </div>
    </section>
  )
}

