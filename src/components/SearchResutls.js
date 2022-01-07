import React from "react";
import { Col, FormControl } from "react-bootstrap";
import logo from "../assets/pics/tesodev_logo.png";

const SearchResutls = () => {
  return (
    <>
      <Col
        className="search-header"
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
      >
        <Col className="search-header-container">
          <img src={logo} alt="slm"></img>
          <FormControl />
        </Col>
      </Col>
    </>
  );
};

export default SearchResutls;
