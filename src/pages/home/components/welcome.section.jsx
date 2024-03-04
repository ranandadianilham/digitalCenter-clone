import React from "react";
import { motion } from "framer-motion";
const WelcomeSection = () => {
  return (
    <div className="welcome_section">
      <div className="intro_sub">
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1 , x: 0}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ display: "inline-block" }}
          className="intro_title roboto-black"
        >
          Digital Center Indonesia
        </motion.p>
        <p className="intro_sub roboto-medium">
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1 , x: 0}}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
            style={{ display: "inline-block" }}
          >
            Improve your business by analyzing it deeply and using the latest
            technology to increase growth
          </motion.p>
        </p>
        <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
        style={{ display: "inline-block" }}
        >
          <button className="knowMore_btn roboto-medium">
            Get To Know More
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 3 }}
        style={{ display: "inline-block" }}
        >
        <img src="public/hero-4-1.png" />
      </motion.div>
    </div>
  );
};

export default WelcomeSection;
