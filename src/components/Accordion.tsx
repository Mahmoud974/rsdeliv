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
    <section className="py-12 bg-black text-white lg:px-0 px-6">
      <h3 className="text-center text-4xl font-bold mb-8">
        Questions fréquemment posées
      </h3>
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>
                <p className="text-lg">{item.question}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
