"use client";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";

function SectionProvider({ children, className }) {
  const [isRanderModeSvg, setIsRanderModeSvg] = useState(false);

  useEffect(() => {
    setIsRanderModeSvg(true);
  }, []);
  return (
    <div className={className}>
      {isRanderModeSvg ? (
        children
      ) : (
        <div className="h-screen bg-black/75 flex items-center justify-center">
          <Spinner />{" "}
        </div>
      )}
    </div>
  );
}

export default SectionProvider;
