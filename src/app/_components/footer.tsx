import * as React from "react";

export function Footer() {
    return (
        <div className="flex justify-center items-center px-16 py-16 text-sm leading-5 text-white bg-orange-500 max-md:px-5">
            <div className="flex flex-col max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="self-start ml-4 w-full aspect-[1.72] max-md:ml-2.5"
                />
                <div className="mt-1.5 text-center">We are simply the Development <br /> Agency of the Future</div>
            </div>
        </div>
    );
}

