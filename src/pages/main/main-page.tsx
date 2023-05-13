import React from "react";
import "./index.css";
import { SearchBar } from "../../components/search-bar/search-bar";
import { Item } from "../../components/item/item";
import { data } from "../../data";

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
          <div className="content__item search">
            <SearchBar />
          </div>
          <div className="content__row">
            {data.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                paymentFrom={item.paymentFrom}
                paymentTo={item.paymentTo}
                currency={item.currency}
                schedule={item.schedule}
                location={item.location}
                selected={item.selected}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
