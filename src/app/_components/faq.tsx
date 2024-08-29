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
      question: "Who is the ideal client for Harbourfront Web Designs & Marketing?",
      answer: "Our ideal clients are businesses seeking to scale and enhance their online presence through expertly crafted websites and targeted advertising campaigns. Whether you're a startup, small business, or an established company, we tailor our services to meet your unique needs and growth goals."
    },
    {
      question: "What sets Harbourfront Web Designs & Marketing apart from other agencies?",
      answer: "We stand out through our blend of deep industry expertise, personalized service, and a relentless commitment to excellence. Our team collaborates closely with clients, offering unlimited revisions, real-time project tracking, and data-driven strategies to ensure your website and ads are both visually stunning and highly effective."
    },
    {
      question: "How quickly can Harbourfront Web Designs & Marketing start on my project?",
      answer: "We can typically initiate your project within 1-2 days following your initial consultation. Our streamlined onboarding process gathers all necessary information efficiently, allowing us to kick off your custom design and development work as soon as possible."
    },
    {
      question: "Do you offer custom design options for websites and ads?",
      answer: "Absolutely! Our talented designers collaborate with you to create custom website designs and ad campaigns that reflect your brand identity and meet your specific business needs. From color schemes to layout and functionality, every detail is tailored to your vision and objectives."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "The completion time for a website project varies based on its complexity. However, thanks to our efficient processes and dedicated team, we typically complete projects up to 4x faster than traditional agencies, ensuring a quick turnaround without compromising quality."
    },
    {
      question: "What if I'm not satisfied with the final product?",
      answer: "Your satisfaction is our top priority. We offer unlimited revisions and maintain close communication throughout the development process to ensure the final product meets your expectations. If you're not satisfied, we'll continue to make adjustments until you are."
    }
  ];


  return (
    <div className="flex flex-col p-10 text-xl font-medium leading-8 justify-center items-center mx-auto sax-w-6xl">
      <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto font-aclonica text-center tracking-tight font-medium text-white">
          Frequently Asked Questions
        </h4>
        <br />
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 justify-center px-10 py-8 mt-8 w-full rounded-xl bg-inherit border-b-[0.1px] border-l-[0.1px] border-r-[0.1px] border-white transition-colors duration-300 ease-in-out shadow-lg max-md:flex-wrap max-md:px-5"
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
