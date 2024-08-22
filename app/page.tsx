"use client";

import "swiper/swiper-bundle.css";
import "./globals.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import LifeStyle from "./components/LifeStyle";
import Expertise from "./components/Expertise";

export default function Home() {
  // const handleScroll = (e: any, targetId: any) => {
  //   e.preventDefault();
  //   const element = document.getElementById(targetId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <Header />
      <HeroSection />
      <Expertise />
      <AboutMe />
      <HireMe />
      <LifeStyle />
      <Services />
      <Achievements />
      <ContactSection />
      <Footer />
    </>
  );
}
