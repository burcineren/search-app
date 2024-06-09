import React from "react";
import { ListItem } from "./ListItem";
import { Link } from "react-router-dom";

interface ListProps {
  data: Array<{ id: string; Company: string; [key: string]: any }>;
  text: string;
}

export function List({ data, text }: ListProps) {
  return (
    <div className="search-list">
      <div className="list-wrapper">
        <ul className="list">
          {data.length > 0 &&
            data
              .slice(0, 3)
              .map((item) => <ListItem key={item.id} items={item} />)}
        </ul>
        <Link to={`/detail/${text}`}>
          <b>Show more..</b>
        </Link>
      </div>
    </div>
  );
}
