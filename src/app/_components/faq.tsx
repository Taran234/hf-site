"use client"
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpenIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is the ideal client for Harbourfront Web Designs?",
      answer: "Our ideal client is any business or individual looking for a professional, responsive, and SEO-optimized website. Whether you're a startup, a small business, or an established company, our services are tailored to meet your unique needs and help you achieve your online goals."
    },
    {
      question: "What makes Harbourfront Web Designs different from other web design agencies?",
      answer: "At Harbourfront Web Designs, we offer a unique combination of expertise, personalized service, and a commitment to excellence. Our dedicated team works closely with you, providing unlimited revisions and real-time tracking, ensuring your website is not only visually stunning but also highly functional and optimized for performance."
    },
    {
      question: "How quickly can Harbourfront Web Designs start on my project?",
      answer: "We can typically start your project within a day or two after your initial consultation. Our streamlined onboarding process ensures that we gather all necessary information quickly and efficiently, allowing us to get started on your custom design and development as soon as possible."
    },
    {
      question: "Do you offer custom design options?",
      answer: "Absolutely! Our team of talented designers works closely with you to create a custom design that reflects your brand identity and meets your specific needs. From color schemes to layout and functionality, we ensure every detail is tailored to your vision."
    },
    {
      question: "How long does it take to complete the Website?",
      answer: "The completion time for a website varies depending on its complexity. However, our efficient processes and dedicated team typically allow us to complete tasks up to 4x faster than traditional agencies."
    },
    {
      question: "What if I'm not satisfied with the final product?",
      answer: "Your satisfaction is our top priority. We offer unlimited revisions and work closely with you throughout the development process to ensure the final product meets your expectations. If you're not satisfied, we'll continue to make adjustments until you are."
    }
  ];

  return (
    <div className="flex flex-col p-10 text-xl font-medium leading-7 justify-center items-center mx-auto text-gray-200 max-w-6xl">
      <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
        <span className="bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text">
          Frequently Asked Questions
        </span>
        <br />
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 justify-center px-10 py-8 mt-8 w-full rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out shadow-lg max-md:flex-wrap max-md:px-5"
          onClick={() => toggleOpenIndex(index)}
        >
          <div className="flex justify-between items-center text-gray-50 w-full cursor-pointer">
            <div className="flex-auto">{faq.question}</div>
            <div className="flex items-center justify-center w-10">
              {openIndex === index ? (
                <RiArrowDropUpLine size={30} />
              ) : (
                <RiArrowDropDownLine size={30} />
              )}
            </div>
          </div>
          {openIndex === index && (
            <div className="mt-4 text-base text-gray-200">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );


}
