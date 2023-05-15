import React from "react";
import { IItem, Item } from "../item/item";

type TItemList = {
  currentItems: IItem[];
};

export const ItemList: React.FC<TItemList> = ({currentItems}) => (
  <div className="content__row">
    {currentItems &&
      currentItems.map((item) => (
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
);
