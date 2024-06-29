import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export function Header() {
    return (
        <div className="flex gap-5 mt-5  justify-between items-center px-7 text-base font-medium leading-4 capitalize max-md:flex-wrap">
            <img
                loading="lazy"
                srcSet="/logo.png"
                className="shrink-0 self-stretch max-w-full aspect-[1.69] w-[200px]"
            />
            <div className="flex gap-5 justify-between self-stretch p-1.5 my-auto text-white max-md:flex-wrap">
                <div>About</div>
                <div>How It Works</div>
                <div>services</div>
                <div>Pricing</div>
                <div>FAQ</div>
            </div>
            <div className="flex gap-3 justify-end self-stretch py-1.5 pr-1.5 pl-3 my-auto bg-orange-500 rounded-md text-stone-100">
                <div className="grow my-auto">book a call</div>
                <div className=" border-2 p-1" >
                    <BiRightArrowAlt size={32} />
                </div>


            </div>
        </div>
    );
}

