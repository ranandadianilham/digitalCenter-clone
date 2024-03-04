import React from "react";
import { motion } from "framer-motion";
const FeaturesSection = () => {
  return (
    <motion.div
      initial={{opacity: 0, }}
      whileInView={{  opacity: 1 }}
      transition={{ duration: 1, repeat: 0 }}
      className="flex flex-col bg-gray-100"
    >
      <div className=" mt-16 px-72  grid grid-cols-2">
        <div>
          <div className="rounded-2xl bg-white-800 border-2 border-black text-black w-fit p-2 mb-10">
            <p>Features</p>
          </div>
          <div
            className="roboto-medium"
            style={{
              fontSize: "46px",
            }}
          >
            We execute projects utilizing our specialized and strategic approach
          </div>
        </div>
        <div className="bg-gray-900 text-gray-500 py-5 flex flex-col gap-5 roboto-medium ">
          <div className="pl-24 text-xl roboto-black">GIVING THE BEST</div>
          <div className="pr-96 pl-10 pb-20">
            <p
              className="mb-10 roboto-bold"
              style={{
                fontSize: "18px",
              }}
            >
              We are perpetually innovating for the future, meticulously
              crafting the ensuing generation of products, brands, and design
              attributes from a multifaceted and hybrid viewpoint.{" "}
              <span className="text-gray-200">
                This approach ensures that our creations are not only current
                but also forward-thinking.
              </span>
            </p>
            <p>
              positioning them at the forefront of industry advancements and
              technological progress.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-72 mb-16 min-h-[500px]">
        <div className="relative">
          <img
            className="absolute bottom-0 left-10"
            src="feature-1.jpg"
            width={700}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 ml-40">
          <motion.div
            initial={{ y: 200, opacity: 0, scale: 0 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, repeat: 0 , delay: 1}}
            className="my-auto flex gap-5 flex-col"
          >
            <img className="w-fit" src="icon-1-1.png" />
            <p className="roboto-bold">Innovative & Up To Date</p>
            <p>
              signifies a commitment to pioneering the latest technological
              advancements and trends.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0, scale: 0 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1, repeat: 0 }}
            className="my-auto flex gap-5 flex-col"
          >
            <img className="w-fit" src="icon-2-1.png" />
            <p className="roboto-bold">Seamless Experience</p>
            <p>
              This commitment is pivotal in cultivating a sense of reliability
              and trust with clients.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
