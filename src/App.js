import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />}/>
      </Routes>
    </div>
  );
};

export default App;
