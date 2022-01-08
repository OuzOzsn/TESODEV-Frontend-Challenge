import React, {useState, useLayoutEffect} from "react";
import {Routes, Route} from "react-router-dom";
import MainSearch from "./components/MainSearch";
import SearchResutls from "./components/SearchResutls";
import data from "./components/data/mockData.json"

const App = () => {
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [search, setSearch] = useState(false);

  useLayoutEffect(()=>{
    setAllData(data.data);
    setIsLoading(false)
},[])

  return (
    <>
    <Routes>
      <Route path="/" element={<MainSearch allData={allData} isLoading={isLoading} filterText={filterText} setFilterText={setFilterText} search={search} setSearch={setSearch} />}/>
      <Route path="/results" element={<SearchResutls allData={allData} isLoading={isLoading} filterText={filterText} setFilterText={setFilterText} search={search} setSearch={setSearch} />}/>
      <Route path="*" element={<div>Page Not Found</div>}/>
    </Routes>
      
    </>
  );
};

export default App;
