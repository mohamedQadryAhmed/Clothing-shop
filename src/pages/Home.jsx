import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import NewsLetterBox from "../components/NewsLetterBox";

function Home() {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <Policy />
      <NewsLetterBox />
    </>
  );
}

export default Home;
