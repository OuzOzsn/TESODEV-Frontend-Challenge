import React from "react";
import { Col, FormControl, Button } from "react-bootstrap";
import logo from "../../assets/pics/tesodev_logo.png";

const ResultsHeaderInput = ({filterText, setFilterText, setSearch}) => {

  const handleChange = (e) => {
    setFilterText(e.target.value);
  }

  return (
    <>
      <Col className="search-header-container">
        <img src={logo} alt="logo"></img>
        <FormControl type="text" value={filterText} onChange={handleChange} />
        <Button onClick={()=>setSearch(true)}>Search</Button>
      </Col>
    </>
  );
};

export default ResultsHeaderInput;
