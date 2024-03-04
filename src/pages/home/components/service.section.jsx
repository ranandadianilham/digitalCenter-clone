import React from "react";
import { PlusIcon } from "../../../components/icons";
import { motion } from "framer-motion";
const ServiceSection = () => {
  const services = [
    "E-commerce Development",
    "Apps Design And Development",
    "Web And Design Development",
    "Paid Advertisement",
    "Social Media Management",
    "Content Marketing Service",
    "Email Marketing",
    "Search Engine Optimization",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="service_section w-full flex justify-end text-white px-[15%] items-center"
    >
      <div className="w-[30%] h-fit bg-none">
        <div className="rounded-full border-2 w-fit px-2 border-white mb-10">
          Our Service
        </div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p
            style={{
              fontSize: " 40px",
            }}
            className="roboto-bold"
          >
            Build your business with the latest technology
          </p>
        </motion.div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="roboto-bold grid grid-cols-2"
        >
          {services.map((item, i) => {
            return (
              <motion.li
                variants={ {
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 300 },
                }}
                transition={{duration: 1.5, delay: 1+i}}
                key={item + "-" + i}
                className="flex gap-1 my-2"
              >
                <PlusIcon />
                {item}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ServiceSection;
