import React from "react";
import { motion } from "framer-motion";
const BrandSection = () => {
  const imageUrls = [
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-15.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-14.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-13.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-12.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-11.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-10.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-09.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-08.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-07.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-06.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-05.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-04.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-03.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-02.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-01.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-16.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-17.webp",
    "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-18a.webp",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mx-10 flex justify-center flex-col items-center my-10"
    >
      <div
        className="roboto-bold"
        style={{
          fontSize: "20px",
        }}
      >
        WE WORKED WITH GLOBAL LARGEST BRANDS
      </div>
      <div className="grid grid-cols-6">
        {imageUrls.map((logoUrl, index) => (
          <motion.div
          initial={{ opacity: 0 , x: -100}}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{duration: 1, delay: 0.1+index}}
          key={index} className="brand__item-2 fade_bottom">
            <img decoding="async" src={logoUrl} alt="Brand Logo" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BrandSection;
