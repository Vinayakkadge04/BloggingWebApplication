import React from "react";
import TopBar from "./topbar/topbar";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage/BlogPage";
import About from "./About/About";
import Contact from "./Contact/Contact";
import BlogDetail from "./blogDetail/BlogDetail";
import BlogByCategory from "./BlogByCategory/BlogByCategory";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/blogs/category/:id" element={<BlogByCategory/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
