import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { data } from "../../data";
import { ItemList } from "../item-list/item-list";

import "./index.css";
import {FavoriteList} from "../favorite-list/favorite-list";
import {useLocation} from "react-router-dom";

type TPagination = {
  itemsPerPage: number;
};

export const Pagination: React.FC<TPagination> = ({itemsPerPage }) => {
  const location = useLocation();
  const favoriteItems = data.filter(el => el.selected);

  const [itemOffset, setItemOffset] = useState(0);
  const [favoriteItemOffset, setFavoriteItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const endFavoriteOffset = favoriteItemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const currentFavoriteItems = favoriteItems.slice(favoriteItemOffset, endFavoriteOffset);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const favoritePageCount = Math.ceil(favoriteItems.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    const newFavoriteOffset = (event.selected * itemsPerPage) % favoriteItems.length;
    setItemOffset(newOffset);
    setFavoriteItemOffset(newFavoriteOffset)
  };

  return (
    <>
      {location.pathname.match('favorite') ? <FavoriteList currentItems={currentFavoriteItems} />
      : <ItemList currentItems={currentItems} />}
      <ReactPaginate
        breakLabel="..."
        nextLabel
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={location.pathname.match('favorite') ? favoritePageCount : pageCount}
        previousLabel
        renderOnZeroPageCount={null}
      />
    </>
  )
}
