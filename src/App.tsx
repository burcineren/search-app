import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindData } from "./features/DataSlice";
import Home from "./views/Home";
import AddRecordPage from "./views/AddRecordPage";
import SearchResultDetail from "./components/SearchResultDetail";
import { fetchData } from "./services/DataService";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData()
      .then((mergedData) => {
        dispatch(bindData(mergedData));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:search" element={<SearchResultDetail />} />
        <Route path="/add-new" element={<AddRecordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
