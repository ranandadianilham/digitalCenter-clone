import React, { useState } from "react";
import Header from "../../components/Header";
import "./home.scss";
import WelcomeSection from "./components/welcome.section";
import HowWorkSection from "./components/howWork.section";
import FeaturesSection from "./components/features.section";
import { PlusIcon, RightArrowIcon } from "../../components/icons";
import ServiceSection from "./components/service.section";
import { Button } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import ContactSection from "./components/contactUs.section";

const index = () => {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <HowWorkSection />
      <FeaturesSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default index;
