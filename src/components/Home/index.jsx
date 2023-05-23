import React from "react";
import { HomeMain } from "./HomeMain/HomeMain";
import { HomeMainCenter } from "./HomeMainCenter/HomeMainCenter";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <HomeMain />
      <HomeMainCenter />
      <Footer />
    </>
  );
};
