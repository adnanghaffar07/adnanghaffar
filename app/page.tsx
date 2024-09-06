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
import { ToolLogosSection } from "./components/ToolLogosSection";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ToolLogosSection />
      <Expertise />
      <AboutMe />
      <HireMe />
      <RecentProjects />
      <LifeStyle />
      <Services />
      <Testimonials />
      <Achievements />
      <ContactSection />
      <Footer />
    </>
  );
}
