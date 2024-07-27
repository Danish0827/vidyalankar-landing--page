import React from "react";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Testimonial21 from "@/components/Testimonial/Testimonial";
import Contact from "@/components/Contact/Contact";
import Programs from "@/components/Programs/Programs";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Programs/>
      <Testimonial21/>
      <Contact/>
    </>
  );
}
