


export function Step3() {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4  rounded-xl bg-neutral-900 ">

                    <div className="flex  flex-col">
                        <div className="mt-5 text-lg font-medium md:leading-8  md:justify-start">
                            Once you approve the design, our team will start building your website. We break the project into actionable steps and keep you informed throughout the process to ensure everything aligns with your vision.
                        </div>
                        <div className=" justify-center mt-4 items-center">
                            <SkeletonThree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkeletonThree = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <>
            {/* stats */}
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-row w-full gap-4">
                    <div className="p-4 relative w-1/2 bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>

                        <div className="text-2xl text-gray-100 font-medium leading-8">20</div>
                        <div className="text-sm text-gray-500">Components</div>
                    </div>


                    <div className="p-4 relative w-1/2 bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="text-2xl text-gray-100 font-medium leading-8">15</div>
                        <div className="text-sm text-gray-500">Plugins</div>
                    </div>
                </div>

                <div className="p-4 relative w-full flex flex-col bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="flex flex-col">
                        <div className="text-2xl text-gray-100 font-medium leading-8">99</div>
                        <div className="text-sm text-gray-500">SEO Blog Pages</div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default SkeletonThree;
