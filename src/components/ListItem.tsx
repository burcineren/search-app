import React from "react";
import { FiMapPin } from "react-icons/fi";

export function ListItem({ items }) {
  return (
    <>
      <li className="list-item">
        <FiMapPin className="icon" />
        <p className="address">{items.City}</p>
        <p className="city">{items.Country}</p>
      </li>
    </>
  );
}
