import React from "react";
import { Col } from "react-bootstrap";

const ResultsPagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Col
      className="pagination"
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      xxl={12}
    >
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="page-item">
            <a href="#" onClick={() => paginate(number)} className={currentPage === number ? "page-link page-active" : "page-link"}> 
              {number}
            </a>
          </li>
        );
      })}
    </Col>
  );
};

export default ResultsPagination;
