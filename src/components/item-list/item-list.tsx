import React from "react";
import { IItem, Item } from "../item/item";


type TItemList = {
  currentItems: IItem[];
};

export const ItemList: React.FC<TItemList> = ({currentItems}) => {

  return (
    <div className="content__row">
      {currentItems &&
      currentItems.map((item) => {
        return (
        <Item
          key={item.id}
          id={item.id}
          profession={item.profession}
          payment_from={item.payment_from}
          payment_to={item.payment_to}
          currency={item.currency}
          type_of_work={item.type_of_work}
          town={item.town}
          favorite={item.favorite}
        />
      )})}
    </div>
  );
}
