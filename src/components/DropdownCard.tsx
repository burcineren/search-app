import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortedFilteredData } from "../Features/DataSlice";
import { RootState } from "../Store";

interface DropdownCardProps {
  style?: React.CSSProperties;
  handleClick?: () => void;
}

const DropdownCard: React.FC<DropdownCardProps> = ({ style }) => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const listData = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const data = [
    {
      name: "Name ascending",
      id: 1,
    },
    {
      name: "Name descending",
      id: 2,
    },
    {
      name: "Year ascending",
      id: 3,
    },
    {
      name: "Year descending",
      id: 4,
    },
  ];

  const shortDataList = (name: string, data: any) => {
    let isSortedData = [...data.searchData];

    switch (name) {
      case "Name ascending":
        let ascendingNameData = sortByName(isSortedData, 1);
        return dispatch(sortedFilteredData(ascendingNameData));

      case "Name descending":
        let descendingNameData = sortByName(isSortedData, -1);
        return dispatch(sortedFilteredData(descendingNameData));

      case "Year ascending":
        let ascendingYearData = sortByYear(isSortedData, 1);
        return dispatch(sortedFilteredData(ascendingYearData));

      case "Year descending":
        let descendingYearData = sortByYear(isSortedData, -1);
        return dispatch(sortedFilteredData(descendingYearData));

      default:
        return null;
    }
  };

  const sortByName = (data: any, initialValue: number) => {
    let descendingSortData = data.sort((a: any, b: any) => {
      let sortedData = a["Name Surname"] > b["Name Surname"];
      return initialValue === 1 ? (sortedData ? 1 : -1) : !sortedData ? 1 : -1;
    });

    return descendingSortData;
  };

  const sortByYear = (data: any, initialValue: number) => {
    let ascendingSortData = data.sort((a: any, b: any) => {
      let calculatedDate = convertDateStringToTime(a, b);
      let sortedData = calculatedDate.getTimeFirstDate > calculatedDate.getTimesecondDate;
      return initialValue === 1 ? (sortedData ? 1 : -1) : !sortedData ? 1 : -1;
    });

    return ascendingSortData;
  };

  const convertDateStringToTime = (firstDateIndex: any, lastDateIndex: any) => {
    let firstDate = firstDateIndex.Date.split("/").reverse().join("/");
    let getTimeFirstDate = new Date(firstDate).getTime();

    let secondDate = lastDateIndex.Date.split("/").reverse().join("/");
    let getTimesecondDate = new Date(secondDate).getTime();

    return {
      getTimeFirstDate,
      getTimesecondDate,
    };
  };

  return (
    <div className="card-wrapper" style={style}>
      <ul className="card-list">
        {data.map((item: any) => (
          <li
            key={item.id}
            className={`card-item ${isActive === item.id ? "active" : ""}`}
            onClick={() => {
              setIsActive(item.id);
              shortDataList(item.name, listData);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownCard;
