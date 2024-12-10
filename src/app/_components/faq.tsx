"use client"
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpenIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can you guarantee that your website design will meet my expectations?",
      answer: "Our primary goal is client satisfaction. We strive to ensure that your website aligns with your vision and requirements. If you are not satisfied with the final product, we will work closely with you to make any necessary changes until you are completely happy. Additionally, if you still unhappy with the results and choose not to keep the website, we offer a money-back guarantee for your peace of mind. Your success is important to us, and we want to be your trusted partner as you grow."
    },
    {
      question: "Can you guarantee me top placement on Google?",
      answer: "No one can. People say it to get you worked up, and there are certainly things you can do right to get good placement, but no one can truly guarantee any search results. Also many companies, not just yours, are working to get top placement. So results change due to competition and new content being added to the web. At Harbourfront Web Designs we offer weekly key word researched SEO (Search Engine Optimization) to rank your website well in search engine results. This helps bring more qualified potential customers to your site and eventually increases conversion rates."
    },
    {
      question: "What type of Clients does Harbourfront Web Designs have worked with?",
      answer: "Our ideal clients are businesses seeking to scale and enhance their online presence. Whether you're a startup, small business, or an established company, we tailor our services to meet your unique needs and growth goals."
    },
    {
      question: "What sets Harbourfront Web Designs apart from other agencies?",
      answer: "We stand out through our blend of deep industry expertise, personalized service, and a relentless commitment to excellence. Our team collaborates closely with clients, offering as many revisions it would need to get you the result you seek, real-time project updates, and competition data-driven strategies to ensure your website and ads are both visually stunning and highly effective."
    },
    {
      question: "Do you offer website hosting?",
      answer: "Yes, we offers month to month hosting with free maintenance and secure backups on all new website projects."
    },
    {
      question: "Do you offer custom design options for website?",
      answer: "Absolutely! Our talented designers collaborate with you to create custom website designs that reflect your brand identity and meet your specific business needs. From color schemes to layout and functionality, every detail is tailored to your vision and objectives."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "The completion time for a website project varies based on its complexity. However, thanks to our efficient processes and dedicated team, we typically complete projects up to 4x faster than traditional agencies, ensuring a quick turnaround without compromising quality."
    },
    {
      question: "What if I'm not satisfied with the final product?",
      answer: "Your satisfaction is our top priority. We offer unlimited revisions and maintain close communication throughout the development process to ensure the final product meets your expectations. If you're still not satisfied, we offer 100% Money Back Guarantee."
    }
  ];


  return (
    <div className="flex flex-col p-10 text-xl font-medium leading-8 justify-center items-center mx-auto max-w-6xl">
      <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto font-aclonica text-center tracking-tight font-medium text-white">
          Frequently Asked Questions
        </h4>
        <br />
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 justify-center px-10 py-8 mt-8 w-full rounded-xl bg-inherit border-b-[0.1px] border-l-[0.1px] border-r-[0.1px] border-amber-300 transition-colors duration-300 ease-in-out shadow-lg max-md:flex-wrap max-md:px-5"
          onClick={() => toggleOpenIndex(index)}
        >
          <div className="flex justify-between items-center text-gray-50 w-full cursor-pointer">
            <div className="flex-auto">{faq.question}</div>
            <div className="flex items-center justify-center text-amber-500 w-10">
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
