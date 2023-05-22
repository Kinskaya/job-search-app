import {useNavigate} from "react-router-dom";
import React from "react";

import locationIcon from "../../assets/images/location-icon.png";
import "./index.css";
import {appSecretKey} from "../../API/API";
import {token} from "../../pages/main/main-page";

export interface IItem {
  id: number,
  profession: string,
  payment_from: number,
  payment_to: number,
  currency: string,
  type_of_work: {
    title: string
  },
  town: {
    title: string
  },
  vacancyRichText?: string,
  favorite: boolean,
  currentItems?: number
}

const URL = `https://startup-summer-proxy-production.up.railway.app/2.0/favorites/`;

export const Item = (item: IItem) => {

  const addToFavorites = async (id: number) => {
    return await fetch(URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': `GEU4nvd3rej*jeh.eqp`,
          'X-Api-App-Id': appSecretKey,
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({id_vacancy: id}),
      }
    );
  }

  const router = useNavigate();

  return (
    <div className="content__item">
      <div className="item__row">
        <div className="item__info">
          <div className="item__title" onClick={() => router(`/vacancy/${item.id}`)}>
            {item.profession}
          </div>
          <div className="item__conditions">
            <div className="item__payment">
              <span className="payment-from">
                {item.payment_from > 0 && item.payment_to > 0 &&
                  `з/п от ${item.payment_from} до ${item.payment_from} ${item.currency}`
                }
                {item.payment_from > 0 && item.payment_to === 0 &&
                `з/п от ${item.payment_from} ${item.currency}`
                }
                {item.payment_from === 0 && item.payment_to > 0 &&
                `з/п до ${item.payment_to} ${item.currency}`
                }
                {item.payment_from === 0 && item.payment_to === 0 &&
                `з/п по договорённости`
                }
              </span>
            </div>
            <div className="separator" />
            <div className="item__schedule">
              {item.type_of_work.title}
            </div>
          </div>
          <div className="item__city">
            <img src={locationIcon} alt="location-icon"/>
            {item.town.title}
          </div>
        </div>
        <button data-elem="vacancy-_vacancy_id_-shortlist-button" name={item.id.toString()} className={item.favorite ?
          "select__btn active" : "select__btn"} type="button"
          onClick={() => addToFavorites(item.id)}>
        </button>
      </div>
    </div>
  )
}
