import React from "react";
import ResultsHeader from "./resultPieces/ResultsHeader";
import ResultsSearchTable from "./resultPieces/ResultsSearchTable";


const SearchResutls = ({allData, isLoading,filterText, setFilterText, search, setSearch}) => {

  

  

  return (
    <>
      <ResultsHeader filterText={filterText} setFilterText={setFilterText} setSearch={setSearch} />
      <ResultsSearchTable filterText={filterText} search={search} setSearch={setSearch} allData={allData} isLoading={isLoading} />
    </>
  );
};

export default SearchResutls;
