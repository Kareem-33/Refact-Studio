"use client";

import { Route, Routes, useSearchParams } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Work from "./pages/Work";
import ScrollToTop from "./components/layout/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import StartProject from "./pages/StartProject";
import Blog from "./pages/Blog";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import Refactoring from "./pages/services/Refactoring";
import Seo from "./pages/services/Seo";
import Services from "./pages/Services";
import Article from "./pages/Article";

const App = () => {

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-[75px] bg-primary opacity-80 blur-[175px]" />
      </div>
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="start-project" element={<StartProject />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Article />} />
          <Route path="services" element={<Services />}>
            {/* <Route path="web-design" element={<WebDesign />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="refactoring" element={<Refactoring />} />
            <Route path="seo-optimization" element={<Seo />} /> */}
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
