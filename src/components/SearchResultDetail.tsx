import React, { useEffect, useMemo, useState } from "react";
import Logo from "../assets/images/tesodev.png";
import { useNavigate, useParams } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { BsArrowDownUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilter } from "../services/DataService";
import DropdownCard from "./DropdownCard";
import { Link } from "react-router-dom";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { RootState } from "../store";
import Pagination from "./Pagination";

const pageSize = 5;

const SearchResultDetail: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isVisible, setisVisible] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams<{ search: string }>();

  useEffect(() => {
    searchByTerm(text);
  }, [text]);

  useEffect(() => {
    searchByTerm(params.search);
  }, []);

  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    if (data.searchData !== null) {
      return data.searchData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, data.searchData]);

  function searchByTerm(term) {
    if (term && term.length > 0) {
      dispatch(searchByFilter(term.trim()));
    } else {
      dispatch(searchByFilter(null));
    }
  }

  return (
    <div className="detail-container">
      <div className="detail-header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="tesodev"></img>
          </Link>
        </div>
        <div className="form">
          <Input
            value={params.search}
            onChange={(e) => {
              setText(e.target.value);
              searchByTerm(e.target.value);
            }}
          />
          <Button
            type="search"
            text="Search"
            className="search-button primary-button"
            onClick={() => {
              searchByTerm(text);
            }}
          />
        </div>
        <div className="add-list">
          <Button
            className="primary-button"
            text="Add new record"
            type="button"
            onClick={() => {
              navigate("/add-new");
            }}
          />
        </div>
      </div>
      <div className="dropdown-menu">
        <button
          className="drowdown"
          onClick={() => {
            setisVisible(!isVisible);
          }}
        >
          <BsArrowDownUp />
          Order By
        </button>
        <DropdownCard style={{ display: !isVisible ? "none" : "" }} />
      </div>
      {data.searchData !== null && data.searchData.length && (
        <div className="detail-list-wrapper">
          <ul>
            {currentListData &&
              currentListData.map((item, index) => {
                return (
                  <li key={index} className="detail-list-item">
                    <div className="detail-list-item-wrapper">
                      <div className="detail-list-item-content">
                        <FiMapPin className="icon" />
                        <div className="content">
                          <p className="address">{item.city}</p>
                          <p className="city">{item.country}</p>
                        </div>
                      </div>
                      <div className="detail-list-item-content-item">
                        <p className="name">{item["nameSurname"]}</p>
                        <p className="date">{item.date}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      <div>
        {data.searchData !== null && data.searchData.length && (
          <Pagination
            currentPage={currentPage}
            totalCount={data.searchData.length}
            pageSize={pageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResultDetail;
