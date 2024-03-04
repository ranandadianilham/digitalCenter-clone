import React from "react";
import { motion, useScroll } from "framer-motion";

const HowWorkSection = () => {
  const contents = [
    {
      img: "./1-4-1.png",
      title: "Teamwork",
      subtitle:
        "Providing the best results is a lengthy process that requires cooperation",
    },
    {
      img: "./2-5-1.png",
      title: "Problem Solvers",
      subtitle:
        "Always giving you the newest ideas and information that fits your needs",
    },
    {
      img: "./3-5-1.png",
      title: "Offer Solutions",
      subtitle:
        "Ensuring that you achieve the desired outcomes effectively and efficiently",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="howWeWork_section my-10"
    >
      <div
        style={{
          borderRadius: "20px",
          border: "2px solid black",
          padding: "5px 10px",
        }}
        className="roboto-bold"
      >
        <p>Processing</p>
      </div>
      <div
        style={{
          fontSize: "40px",
        }}
        className="roboto-black"
      >
        How We Work
      </div>
      <div className="roboto-medium mb-10">
        Find out how the digital center can help you work together.
      </div>
      <motion.div
        className="content-items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {contents.map((item, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5 + i }}
              key={item.title + "-" + i + "-" + item.title}
            >
              <div className="content-img">
                <img src={item.img} />
              </div>
              <div className="content-title roboto-black">{item.title}</div>
              <div className="content-sub roboto-medium">{item.subtitle}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HowWorkSection;
