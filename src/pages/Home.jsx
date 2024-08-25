import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";

function Home() {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
    </>
  );
}

export default Home;
