import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { RiArrowUpDownLine } from "react-icons/ri"

const ResultsSearchTable = ({filterText, search, setSearch, allData, isLoading}) => {
    
    const [filtered, setFiltered] = useState([]);
    var filtredData = "";

    useEffect(()=>{
        if(search){
            if(!!allData && filterText.trim().length > 0){
                // eslint-disable-next-line react-hooks/exhaustive-deps
                filtredData = allData.filter((data)=> data[4].toLowerCase().includes(filterText.toLowerCase().trim()));
                setFiltered(filtredData);
                setSearch(false);
            }
        }
    },[search])

    //gelen tarih verisini düzenlemek için
    const cutDate = (date) => {
        return date.slice(6, date.length)
    }

    // veriler yüklenmedi ise
    if(isLoading){
        return <Col>Loading...</Col>
    }
    if(filtered.length === 0){
        return "";
    }

    return (
        <>
            <Col className='search-table mt-5' xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                <Col className='search-order' xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                    <span><RiArrowUpDownLine style={{fontSize:"25px", marginRight:"8px"}}/> Order By</span>
                </Col>
                <Col className='search-datas mt-3' xs={9} sm={9} md={9} lg={9} xl={9} xxl={9}>
                    {filtered.map((data, index)=>{
                        // burası kaldırılacak paginition olmadığı için sayfa aşağı kaymasın diye yaptım
                        if(index >= 6){
                            return "";
                        }
                        return(
                            <Col className='search-data-container' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={index}>
                        <Col className='search-data' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Col className='search-data-name' xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <strong>{data[4]} - {data[5]}</strong>
                        <span>{data[0]} - {cutDate(data[3])}</span>
                    </Col>
                    <Col className='search-data-email' xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <strong>Email: {data[2]}</strong>
                    </Col>
                        </Col>
                    
                    </Col>
                        )
                    })}
                </Col>
            </Col>
        </>
    )
}

export default ResultsSearchTable
