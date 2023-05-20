import React from "react";
import { Navigate } from "react-router-dom"

import { Pagination } from "../../components/pagination/pagination";
import { data } from "../../data";
import "./index.css";

export const FavoritePage = () => {
  const favoriteItems = data.filter(el => el.selected);
  return (
    <>
      {favoriteItems.length ? (
          <section className="favorite-page">
            <div className="container">
              <Pagination itemsPerPage={4}/>
            </div>
          </section>
        ) : <Navigate to={'/empty'} />
      }
    </>
  );
}
