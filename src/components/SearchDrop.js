import React from "react";
import { Col } from "react-bootstrap";
const SearchDrop = () => {
  return (
    <div className="search-dropdown">
      <Col className="dropdown-data-container" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Col
          className="dropdown-user-data"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <strong>Turkey - İstanbul</strong>
          <span>Jane Doe - 2016</span>
        </Col>
        <Col
          className="dropdown-user-email"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <strong>E-mail: abc@xyz.com</strong>
        </Col>
      </Col>
      <Col className="dropdown-data-container" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Col
          className="dropdown-user-data"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <strong>Turkey - Ankara</strong>
          <span>Jane Doe - 2016</span>
        </Col>
        <Col
          className="dropdown-user-email"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <strong>E-mail: abc@xyz.com</strong>
        </Col>
      </Col>
      <Col className="dropdown-data-container" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Col
          className="dropdown-user-data"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <strong>Germany - Hamburg</strong>
          <span>Jane Doe - 2016</span>
        </Col>
        <Col
          className="dropdown-user-email"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <strong>E-mail: abc@xyz.com</strong>
        </Col>
      </Col>
      <Col className="dropdown-more" xs={12}
sm={12}
md={12}
lg={12}
xl={12}
xxl={12}>
      <span >Show more...</span>
</Col>
    </div>
  );
};

export default SearchDrop;
