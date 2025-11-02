import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/db/Questions";

export default function AccordionQuestions() {
  return (
    <section id="faq" className="relative flex flex-col justify-center items-center  py-24 bg-black text-white px-6 lg:px-0">
      {/* Conteneur central */}
      <div className="max-w-3xl w-full text-center">
      <p className="text-center text-blue-600">FAQ</p>
        <h3 className="text-3xl sm:text-4xl font-bold mb-10">
          Questions fréquemment posées
        </h3>

        <Accordion
          type="single"
          collapsible
          className="w-full text-left space-y-2"
        >
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>
                <p className="text-lg font-medium">{item.question}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
