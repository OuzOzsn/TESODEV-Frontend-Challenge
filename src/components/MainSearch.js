import React, { useState } from "react";
import logo from "../assets/pics/tesodev_logo.png";
import { Col, FormControl, Button } from "react-bootstrap";
import SearchDrop from "./SearchDrop";

const MainSearch = () => {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  return (
    <div class="landing-container">
      <Col className="landing-logo-container">
        <Col className="landing-logo mb-5">
          <img src={logo} alt="logo" />
          <h6>Search web app</h6>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="input-col">
          <Col className="search-dropdown-col">
            <FormControl
              className="search-input"
              value={inputData}
              onChange={handleChange}
            />
            {inputData.trim().length <= 0 ? "" : <SearchDrop />}
          </Col>
          <Button>Search</Button>
        </Col>
      </Col>
    </div>
  );
};

export default MainSearch;
