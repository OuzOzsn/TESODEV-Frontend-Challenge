import React from "react";
import { Col } from "react-bootstrap";

import ResultsHeaderInput from "./ResultsHeaderInput";

const ResultsHeader = ({filterText, setFilterText, setSearch}) => {
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
        <ResultsHeaderInput filterText={filterText} setFilterText={setFilterText} setSearch={setSearch} />
      </Col>
    </>
  );
};

export default ResultsHeader;
