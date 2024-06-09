import React from "react";
import { FiMapPin } from "react-icons/fi";

export function ListItem({ items }) {
  return (
    <>
      <li className="list-item">
        <FiMapPin className="icon" />
        <p className="address">{items.city}</p>
        <p className="city">{items.country}</p>
      </li>
    </>
  );
}
