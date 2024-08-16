// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <InfoSection />
      <Footer />
    </>
  );
};

export default Home;
