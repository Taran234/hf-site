import * as React from "react";

export function Partners() {
    return (
        <div className="flex justify-center items-center px-16 py-12 text-4xl font-medium tracking-tighter leading-10 text-black bg-gray-50 drop-shadow-2xl max-md:px-5">
            <div className="flex flex-col items-center w-full max-w-[1194px] max-md:max-w-full">
                <div>Our Partners</div>
                <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-8 w-full aspect-[25] max-md:max-w-full"
                />
            </div>
        </div>
    );
}

