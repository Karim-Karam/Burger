"use client";
import React from "react";
import { motion } from "framer-motion";

const Yellowdiv = () => {
  return (
    <div className="yellow-div">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="yellow-element"
      >
        <span className="yellow-element-title"> div title </span>
        <p>
          dsfcwecfwevwrv wevwdfvf vwdrwev sf wvwvd ewewevw xcewe ecwewev
          sdqecwevwev
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="yellow-element"
      >
        <span className="yellow-element-title"> div title </span>
        <p>
          dsfcwecfwevwrv wevwdfvf vwdrwev sf wvwvd ewewevw xcewe ecwewev
          sdqecwevwev
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="yellow-element"
      >
        <span className="yellow-element-title"> div title </span>
        <p>
          dsfcwecfwevwrv wevwdfvf vwdrwev sf wvwvd ewewevw xcewe ecwewev
          sdqecwevwev
        </p>
      </motion.div>
    </div>
  );
};

export default Yellowdiv;
