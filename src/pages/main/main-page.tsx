import React from "react";

import { SearchBar } from "../../components/search-bar/search-bar";
import { Pagination } from "../../components/pagination/pagination";
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
          <SearchBar />
          <Pagination itemsPerPage={4}/>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
