import React from "react";

import { SearchBar } from "../../components/search-bar/search-bar";
import { Pagination } from "../../components/pagination/pagination";
import "./index.css";
import { Filter } from "../../components/filter/filter";
import {data} from "../../data";
import {Navigate} from "react-router-dom";

const MainPage = () => {

  return (
    <>
      {data.length ?
      <section className="main-page">
        <div className="container">
          <Filter />
          <div className="content">
            <SearchBar />
            <Pagination itemsPerPage={4}/>
          </div>
        </div>
      </section>
        : <Navigate to={'/empty'} />}
    </>
  );
}

export default MainPage;
