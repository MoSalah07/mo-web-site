"use client";
import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner() {
  return (
    <BarLoader
      color={"#36d7b7"}
      loading={true}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
