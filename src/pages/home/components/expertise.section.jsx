import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/core";
import { MinusIcon, PlusIcon, RightArrowIcon } from "../../../components/icons";
import { motion } from "framer-motion";
const ExpertiseSection = () => {
  return (
    <div className="features_section bg-black w-full text-white py-10 px-40">
      <div className="w-[80%] mx-auto">
        <div className="rounded-2xl bg-slate-800 border border-white text-white w-fit p-2 mb-10">
          <p>Expertise</p>
        </div>
        <div className="flex justify-between w-full gap-20">
          <div className="w-[30%]">
            <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              y: 100
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              y: 0
            }}
            transition={{duration: 1, delay: 1}}
            >
              <p
                className="roboto-bold"
                style={{
                  fontSize: "35px",
                }}
              >
                With more than 3+ years of experience, our team has become
                expert in digital Transformations.
              </p>
            </motion.div>
            <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              y: 100
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              y: 0
            }}
            transition={{duration: 1, delay: 1}}>
              <p className="roboto-bold text-gray-300">
                Grow brands through bold, strategic creative
              </p>
            </motion.div>
            <motion.div
            initial={{
              opacity: 0,
              x: -200
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{duration: 1, delay: 2}} className="w-fit">
              <a href="#" className="flex gap-1 mt-10">
                <span>Know More</span>{" "}
                <span>
                  <RightArrowIcon />
                </span>
              </a>
              <div className="border-t border-white"></div>
            </motion.div>
          </div>
          <div className="w-[50%] roboto-bold">
            <Accordion allowToggle>
              <AccordionItem className="mb-5 accordion-item">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Empowering Professional Excellence through
                          Transformative Design
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <PlusIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-gray-400 mt-10">
                        stands at the intersection of innovation and
                        professionalism, shaping the future of business
                        operations through{" "}
                        <span className="text-white">
                          transformative design.
                        </span>
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem className="mb-5">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Refining Workflows with Aesthetic Functionality
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <PlusIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-gray-400 mt-10">
                        with an acute understanding of professional demands, we
                        create solutions that streamline{" "}
                        <span className="text-white">
                          operations, foster productivity, and redefine the
                          elegance of efficiency.
                        </span>
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem className="mb-5">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Architecting Digital Elegance, Advancing
                          Professionalism
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <PlusIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-gray-400 mt-10">
                        Our ethos is founded on crafting digital experiences
                        that embody{" "}
                        <span className="text-white">
                          elegance and advance professionalism.{" "}
                        </span>
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Engineering Precision, Designing Success
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <PlusIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-gray-400 mt-10">
                        We believe that through expertly engineered design, we
                        can transform everyday business tasks into seamless,
                        successful outcomes, ensuring that professionalism is
                        not just{" "}
                        <span className="text-white">
                          {" "}
                          maintained but enhanced.
                        </span>
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
