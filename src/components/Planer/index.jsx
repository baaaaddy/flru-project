import React from "react";
import { Header } from "../Header/Header";
import { PlanerMenu } from "./PlanerMenu/PlanerMenu";

export const Planer = () => {
  return (
    <>
      <Header active={"Планер"} />
      <PlanerMenu />
    </>
  );
};
