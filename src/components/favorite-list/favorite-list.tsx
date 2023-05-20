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
              title={item.title}
              paymentFrom={item.paymentFrom}
              paymentTo={item.paymentTo}
              currency={item.currency}
              schedule={item.schedule}
              location={item.location}
              selected={item.selected}
            />
          )
        )
      }
    </div>
  );

