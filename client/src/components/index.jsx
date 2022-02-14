import React from "react";
import "./Offers.css";
import { Slider } from "./Slider";
import { Offers} from "./Offers";
import { PackageList } from "./PackageList";

export const Body = () => {
  return (
    <>
      <Slider />
      <Offers />
      <PackageList />
    </>
  );
};
