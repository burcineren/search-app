import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilter } from "../services/DataService";
import { RootState } from "../store";

import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/tesodev.png";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { List } from "./List";
interface DataState {
  searchData: any[];
}

export function Header() {
  const [text, setText] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [listData, setListData] = useState<any[] | null>(null);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data) as DataState;
  const navigate = useNavigate();

  useEffect(() => {
    setListData(data.searchData);
  }, [data.searchData]);

  function searchByTerm(term: string) {
    if (term && term.length > 0) {
      dispatch(searchByFilter(term.trim()));
    } else {
      setListData(null);
    }
  }

  return (
    <div className="header">
      <div className="button-wrapper">
        <Button
          className="primary-button"
          text="Add new record"
          type="button" // Change to "button" as "search" is not a valid type for button
          onClick={() => {
            navigate("/add-new");
          }}
        />
      </div>
      <div className="container">
        <div className="image-wrapper">
          <img src={Logo} alt="tesodev" />
          <h3>Search App</h3>
        </div>
        <div className="search-wrapper">
          <h1>Find in records</h1>
          <div className="input-wrapper">
            <Input
              data-testid="searchInput"
              type="search"
              className="search-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                searchByTerm(e.target.value);
                setText(e.target.value);

                if (e.target.value) {
                  setDisabled(false);
                } else {
                  setDisabled(true);
                }
              }}
            />
            <Button
              className={`search-button primary-button ${
                disabled ? "inactive" : ""
              }`}
              text="Search"
              type="submit"
              disabled={disabled}
              onClick={() => {
                if (listData !== null && listData.length) {
                  navigate(`/detail/${text}`);
                }
              }}
            />
          </div>
          {listData !== null && listData.length > 0 && listData.length >= 3 && (
            <List data={listData} text={text} />
          )}
        </div>
      </div>
    </div>
  );
}
