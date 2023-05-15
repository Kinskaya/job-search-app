import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { data } from "../../data";
import { ItemList } from "../item-list/item-list";

import "./index.css";

type TPagination = {
  itemsPerPage: number;
};

export const Pagination: React.FC<TPagination> = ({itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel
        renderOnZeroPageCount={null}
      />
    </>
  )
}
