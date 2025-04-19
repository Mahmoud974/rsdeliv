import About from "@/components/About";
import ContactForm from "@/components/Contact";

import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Location from "@/components/Location";
import Prestations from "@/components/Prestations";
import Services from "@/components/Services";

import React from "react";
import AccordionQuestions from "@/components/Accordion";

import ContactBlue from "@/components/ContactBlue";

export default function Page() {
  return (
    <>
      <main className=" ">
        <Home />
        <About />
        <Prestations />
        <Services />
        <Location />
        {/*<Features /> */}
        <ContactBlue />

        <AccordionQuestions />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
