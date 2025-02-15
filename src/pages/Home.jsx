import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default Home;
