import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Work from "./pages/Work";

const App = () => {
  return (
    <>
      <div className="w-full h-full overflow-hidden absolute -z-1000">
        <div className="w-full h-[75px] bg-primary opacity-80 absolute blur-[175px]" />
      </div>
      <Navbar />
      <div className="min-h-[calc(100vh-150px)]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
