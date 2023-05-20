import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

import locationIcon from "../../assets/images/location-icon.png";
import "./index.css";

export interface IItem {
  id: number,
  title: string,
  paymentFrom: number | string,
  paymentTo: number | string,
  currency: string,
  schedule: string,
  location: string,
  selected: boolean,
  currentItems?: number
}

export const Item = (item: IItem) => {
  const [isSelected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected(!isSelected)
  }

  const router = useNavigate();

  return (
    <div className="content__item">
      <div className="item__row">
        <div className="item__info">
          <div className="item__title" onClick={() => router(`/vacancy/${item.id}`)}>
            {item.title}
          </div>
          <div className="item__conditions">
            <div className="item__payment">
            <span className="payment-from">
              {item.paymentFrom}
            </span>
              <span className="payment-to">
              {item.paymentTo}
            </span>
              <span className="payment-currency">
              {item.currency}
            </span>
            </div>
            <div className="separator" />
            <div className="item__schedule">
              {item.schedule}
            </div>
          </div>
          <div className="item__city">
            <img src={locationIcon} alt="location-icon"/>
            {item.location}
          </div>
        </div>
        <button data-elem="vacancy-_vacancy_id_-shortlist-button" className={isSelected || item.selected ? "select__btn active" : "select__btn"} type="button"
          onClick={handleToggle}>
         {/* <img src={!item.selected || isSelected ? starIcon : starIcon2} alt="star-icon"/>*/}
        </button>
      </div>
    </div>
  )
}
