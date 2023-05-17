import React from "react";
import "./index.css";

export const Filter = () => (
  <aside className="filter">
    <div  className="filter__row">
      <div className="filter__header">
        <h3 className="title">
          Фильтры
        </h3>
        <div className="reset">
          <div className="reset__label">
            Сбросить все
            <button className="reset__btn" />
          </div>
        </div>
      </div>
      <div className="filter__content field">
        <label>Отрасль</label>
        <select disabled>
          <option defaultValue="Выберете отрасль">
            Выберете отрасль
          </option>
        </select>
        <span className="chevron chevron_bottom" />
      </div>
      <div className="filter__content">
        <label>Оклад</label>
        <div className="salary">
          <input className="salary-from" type="text" placeholder="От"/>
          <span className="chevron chevron_top" />
          <span className="chevron chevron_bottom" />
        </div>
        <div className="salary">
          <input className="salary-to" type="text" placeholder="До"/>
          <span className="chevron chevron_top" />
          <span className="chevron chevron_bottom" />
        </div>
      </div>
      <button type="button" className="filter__btn btn">
        Применить
      </button>
    </div>
  </aside>
)
