import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search-icon.png";
import "./index.css";

const MainPage = () => {
  return (
    <section className="main-page">
      <div className="container">
        <aside className="sidebar">
          <div  className="sidebar__row">
            filter
          </div>
        </aside>
        <div className="content">
          <div className="content__row">
            <div className="content__item search">
              <div className="search-bar">
                <img src={searchIcon} className="search-bar__icon" alt="search-icon" />
                <input type="text" placeholder="Введите название вакансии"/>
                <button type="button" className="search-bar__btn btn">
                  Поиск
                </button>
              </div>
            </div>
            <div className="content__item">
              <Link to='/vacancy'>
                Вакансия 1
              </Link>
            </div>
            <div className="content__item">
              <Link to='/vacancy'>
                Вакансия 2
              </Link>
            </div>
            <div className="content__item">
              <Link to='/empty'>
                Нет вакансий и избранных
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
