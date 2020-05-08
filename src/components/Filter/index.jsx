import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import Filter from "./Filter";
import MobileVersion from "./MobileVersion";

const FilterIndex = () => {
  const isNotMobile = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return <Fragment>{isNotMobile ? <Filter /> : <MobileVersion />}</Fragment>;
};

export default FilterIndex;
