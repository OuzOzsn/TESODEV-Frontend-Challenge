import React, { useEffect, useState } from "react";
import logo from "../assets/pics/tesodev_logo.png";
import { Col, FormControl, Button } from "react-bootstrap";
import SearchDrop from "./mainPieces/SearchDrop";

const MainSearch = ({allData, isLoading, filterText, setFilterText, search, setSearch}) => {
  const [filtred, setFiltred] = useState([]);
  var filtredData = "";

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(()=>{
    if(search){
        if(!!allData && filterText.trim().length > 0){
          // eslint-disable-next-line react-hooks/exhaustive-deps
            filtredData = allData.filter((data)=> data[4].toLowerCase().includes(filterText.toLowerCase().trim()));
            setFiltred(filtredData);
            setSearch(false);
        }
    }
  },[search])


  return (
    <div className="landing-container">
      <Col className="landing-logo-container">
        <Col className="landing-logo mb-5">
          <img src={logo} alt="logo" />
          <h6>Search web app</h6>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="input-col">
          <Col className="search-dropdown-col">
            <FormControl
              className="search-input"
              value={filterText}
              onChange={handleChange}
            />
            {filtred.length === 0 ? "" : <SearchDrop filtred={filtred} />}
          </Col>
          <Button onClick={()=>setSearch(true)}>Search</Button>
        </Col>
      </Col>
    </div>
  );
};

export default MainSearch;
