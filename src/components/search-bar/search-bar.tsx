import React from "react";
import searchIcon from "../../assets/images/search-icon.png";
import './index.css'

export const SearchBar = () => (
  <div className="search-bar">
    <img src={searchIcon} className="search-bar__icon" alt="search-icon" />
    <input type="text" placeholder="Введите название вакансии"/>
    <button type="button" className="search-bar__btn btn">
      Поиск
    </button>
  </div>
)
