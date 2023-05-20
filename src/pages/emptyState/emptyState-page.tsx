import emptyPageImage from "../../assets/images/emptyPage-image.jpg"
import React from "react";
import {NavLink} from "react-router-dom";

import "./index.css";

export const EmptyStatePage = () => (
  <section className="emptyState-page">
    <div className="container">
      <div className="emptyState-page__content">
        <img src={emptyPageImage} alt="emptyPage-img"/>
        <div className="content__title">
          Упс, здесь еще ничего нет!
        </div>
        <NavLink className="search-vacancy__btn btn" to='/'>Поиск Вакансий</NavLink>
       {/* <button type="button" className="search-vacancy__btn btn" onClick={}>
          Поиск Вакансий
        </button>*/}
      </div>
    </div>
  </section>
)
