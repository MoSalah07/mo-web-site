"use client";
import React from "react";
// Motion
import { motion, AnimatePresence } from "framer-motion";
// Component
import TransitionPages from "./TransitionPages";

function TransitionProvider({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <TransitionPages />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
