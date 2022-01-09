import React from "react";
import { Col } from "react-bootstrap";

const ResultsPagination = ({ postPerPage, totalPosts, paginate, currentPage, setCurrentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Col
      className="pagination mb-5"
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      xxl={12}
    >
      <a href="#" className="page-link previous-btn" onClick={()=>{
        if(1 <= currentPage-1){
          setCurrentPage(currentPage-1);
        }
      }}>Previous</a>
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="page-item">
            <a href="#" onClick={() => paginate(number)} className={currentPage === number ? "page-link page-active" : "page-link"}> 
              {number}
            </a>
          </li>
        );
      })}
      <a href="#" className="page-link next-btn" onClick={()=>{
        if(currentPage < pageNumbers.length){
          setCurrentPage(currentPage+1)
        }
      }}>Next</a>
    </Col>
  );
};

export default ResultsPagination;
