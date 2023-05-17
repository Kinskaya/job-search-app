import React from "react";

import { SearchBar } from "../../components/search-bar/search-bar";
import { Pagination } from "../../components/pagination/pagination";
import "./index.css";
import { Filter } from "../../components/filter/filter";

const MainPage = () => {

  return (
    <section className="main-page">
      <div className="container">
        <Filter />
        <div className="content">
          <SearchBar />
          <Pagination itemsPerPage={4}/>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
