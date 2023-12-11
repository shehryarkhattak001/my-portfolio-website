import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "../components/Navigation/NavBar";
import Home from "../components/Home/Home";
// import ShowCase from "../components/ShowCase/ShowCase";
import Portfolio from "../components/Portfolio/Portfolio";
import Details from "../components/Details/Details";
const Router = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/details" element={<Details />} />
          {/* <Route path="" element="" />  */}
        </Routes>
      </BrowserRouter>
      {/* <ShowCase />
      <Portfolio /> */}
    </div>
  );
};

export default Router;
