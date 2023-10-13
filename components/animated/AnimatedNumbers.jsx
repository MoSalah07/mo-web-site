"use clinet";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedNumbers({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <div className="flex items-center gap-2">
      <span ref={ref}>{value}</span>
      <span>+</span>
    </div>
  );
}

export default AnimatedNumbers;
