import * as React from "react";
import { BiDownArrow, BiDownArrowAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Faq() {
  return (
    <div className="flex flex-col p-10 text-2xl font-medium leading-7 justify-center items-center mx-auto text-white max-w-6xl">
      <div className="self-center text-6xl tracking-tighter leading-[66px] max-md:text-4xl">
        FAQ's
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-16 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">Who's the ideal client for We ?</div>
        <RiArrowDropDownLine size={45} />
      </div>
      <div className="flex gap-5 justify-center px-10 py-11 mt-3 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5">
        <div className="flex-auto max-w-full">
          What happens if I don't need development work for a certain month?
        </div>
        <RiArrowDropDownLine size={45} />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-5 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          Why wouldn't I just hire a full-time developer?
        </div>
        <RiArrowDropDownLine size={45} />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-8 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          Is there a limit to how many tasks or projects I can have?
        </div>
        <RiArrowDropDownLine size={45} />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-2.5 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          How long does it take to complete a development task?
        </div>
        <RiArrowDropDownLine size={45} />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-5 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          What if I'm not satisfied with the software solution?
        </div>
        <RiArrowDropDownLine size={45} />
      </div>
    </div>
  );
}
