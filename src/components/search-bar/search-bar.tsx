import React from "react";
import searchIcon from "../../assets/images/search-icon.png";
import "./index.css";

export const SearchBar = () => (
  <div className="content__item search">
    <div className="search-bar">
      <img src={searchIcon} className="search-bar__icon" alt="search-icon" />
      <input data-elem="search-input" type="text" placeholder="Введите название вакансии"/>
      <button data-elem="search-button" type="button" className="search-bar__btn btn">
        Поиск
      </button>
    </div>
  </div>
);
