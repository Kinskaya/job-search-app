import React from "react";
import { IItem, Item } from "../item/item";

type TFavoriteList = {
  currentItems: IItem[];
};

export const FavoriteList: React.FC<TFavoriteList> = ({ currentItems}) =>
  (
    <div className="content__row">
      {
        currentItems &&
        currentItems.map((item) => (
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
          )
        )
      }
    </div>
  );

