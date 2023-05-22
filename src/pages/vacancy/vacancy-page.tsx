import React from "react";
import { useParams } from "react-router-dom";

import {IItem, Item} from "../../components/item/item";
import "./index.css";


export const VacancyPage = () => {
  const params = useParams();
  const vacancies = JSON.parse(localStorage.getItem("vacancies") as string);

  return (
    <section className="vacancy-page">
      <div className="container">
        {vacancies!.map((el: IItem) => {
          if (el.id.toString() === params.id) {
            return (
              <div className="vacancy__wrap" data-elem="vacancy-_vacancy_id_">
                <Item
                  key={el.id}
                  id={el.id}
                  profession={el.profession}
                  payment_from={el.payment_from}
                  payment_to={el.payment_to}
                  currency={el.currency}
                  type_of_work={el.type_of_work}
                  town={el.town}
                  favorite={el.favorite}
                />
                <div className="vacancy__description">
                  <div className="description__row">
                    {el.vacancyRichText?.replace(/<p>/g, "")
                      .replace(/<\/p>/g, "")
                      .replace(/<ul>/g, "")
                      .replace(/<\/ul>/g, "")
                      .replace(/<li>/g, "")
                      .replace(/<\/li>/g, "")
                    }
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

