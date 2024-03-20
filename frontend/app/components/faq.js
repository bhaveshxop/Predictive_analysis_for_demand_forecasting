"use client";

import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "How can I access predictive sales analysis for my shop?",
    answer: "Simply sign up and navigate to the sales analysis section to view predictions for your shop.",
  },
  {
    question: "Is this platform reliable for shopkeepers?",
    answer: "Absolutely, our platform is a trusted solution developed specifically for shopkeepers' needs.",
  },
  {
    question: "Will I receive alerts for peak sales hours and inventory restocking?",
    answer:
      "Yes, you will receive real-time alerts via the app and SMS on your registered mobile number for peak sales hours and inventory restocking.",
  },
  {
    question: "Who will receive the sales predictions and analysis?",
    answer:
      "You will have access to the sales predictions and analysis directly, helping you make informed decisions to optimize your shop's performance.",
  },
];


export default Faq;
