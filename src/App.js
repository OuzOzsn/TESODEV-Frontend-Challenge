import React from "react";
import {Routes, Route} from "react-router-dom";
import MainSearch from "./components/MainSearch";
import SearchResutls from "./components/SearchResutls";

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainSearch/>}/>
      <Route path="/results" element={<SearchResutls/>}/>
      <Route path="*" element={<div>Page Not Found</div>}/>
    </Routes>
      
    </>
  );
};

export default App;
