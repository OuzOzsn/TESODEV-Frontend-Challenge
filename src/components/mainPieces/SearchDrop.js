import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const SearchDrop = ({filtred}) => {

      //gelen tarih verisini düzenlemek için
      const cutDate = (date) => {
        return date.slice(6, date.length)
    }

  return (
    <div className="search-dropdown">
      {
        filtred.map((data, index) => {
          if(index > 2){
            return "";
          }
          return(
            <Col key={index}
            className="dropdown-data-container"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <Col
              className="dropdown-user-data"
              xs={6}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
            >
              <strong>{data[4]} - {data[5]}</strong>
              <span>{data[0]} - {cutDate(data[3])}</span>
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
              <strong>E-mail: {data[2]}</strong>
            </Col>
          </Col>
    
          )
        })
      }
      <Col
        className="dropdown-more"
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
      >
        <Link to="/results" >Show more...</Link>
      </Col>
    </div>
  );
};

export default SearchDrop;
