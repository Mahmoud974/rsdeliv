import About from "@/components/About";
import ContactForm from "@/components/Contact";

import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Location from "@/components/Location";
import Prestations from "@/components/Prestations";
import Services from "@/components/Services";

import React from "react";
import AccordionQuestions from "@/components/Accordion";



export default function Page() {
  return (
    <>
      <main className=" ">
        <Home />
        <Location />
        <Services />
        <About />
        <Prestations />
  
        {/* <ContactBlue /> */}

        <AccordionQuestions />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
