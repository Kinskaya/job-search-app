import React, {useState} from "react";
import ReactPaginate from "react-paginate";
import {useLocation} from "react-router-dom";

import { ItemList } from "../item-list/item-list";
import {IItem} from "../item/item";
import {FavoriteList} from "../favorite-list/favorite-list";

import "./index.css";

type TPagination = {
  itemsPerPage: number;
  vacancies: IItem[];
};

export const Pagination: React.FC<TPagination> = ({itemsPerPage, vacancies }) => {

  const location = useLocation();
  const favoriteItems = JSON.parse(localStorage.getItem("favorites") as string);

  const [itemOffset, setItemOffset] = useState(0);
  const [favoriteItemOffset, setFavoriteItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const endFavoriteOffset = favoriteItemOffset + itemsPerPage;

  const currentItems = vacancies.slice(itemOffset, endOffset);
  const currentFavoriteItems = favoriteItems!.slice(favoriteItemOffset, endFavoriteOffset);

  const pageCount = Math.ceil(vacancies.length / itemsPerPage);
  const favoritePageCount = Math.ceil(favoriteItems!.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % vacancies.length;
    const newFavoriteOffset = (event.selected * itemsPerPage) % favoriteItems!.length;
    setItemOffset(newOffset);
    setFavoriteItemOffset(newFavoriteOffset)
  };

  return (
    <>
      {/*<ItemList currentItems={currentItems} />*/}
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
