import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export function Step3() {


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

const CountUpAnimation = ({ from, to, duration = 3 }: any) => {
    const [count, setCount] = useState(from);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: [0, 1],
                transition: { duration: 0.5 },
            });

            let start = from;
            const increment = (to - from) / (duration * 60); // Smooth increase, assuming 60 FPS
            const updateCount = () => {
                start += increment;
                if ((increment > 0 && start < to) || (increment < 0 && start > to)) {
                    setCount(Math.round(start));
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(to);
                }
            };

            updateCount();
        }
    }, [isInView, from, to, duration]);

    return (
        <motion.div ref={ref} animate={controls}>
            {count}
        </motion.div>
    );
};


const SkeletonThree = () => {



    return (
        <>
            {/* stats */}
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-row w-full gap-4">
                    <div className="p-6 relative w-1/2 bg-black border-r-2 border-b-2 border-r-amber-600 border-b-amber-600 shadow-lg rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>

                        <div className="text-2xl text-gray-100 font-medium leading-8"><CountUpAnimation from={0} to={20} duration={3} /></div>
                        <div className="text-sm text-gray-500">Components</div>
                    </div>


                    <div className="p-6 relative w-1/2 bg-black border-r-2 border-b-2 border-r-amber-600 border-b-amber-600 shadow-lg rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="text-2xl text-gray-100 font-medium leading-8"><CountUpAnimation from={0} to={15} duration={3} /></div>
                        <div className="text-sm text-gray-500">Plugins</div>
                    </div>
                </div>

                <div className="p-6 relative w-full flex flex-col bg-black border-r-2 border-b-2 border-r-amber-600 border-b-amber-600 shadow-lg rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="flex flex-col">
                        <div className="text-2xl text-gray-100 font-medium leading-8"><CountUpAnimation from={0} to={99} duration={3} /></div>
                        <div className="text-sm text-gray-500">SEO Blog Pages</div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default SkeletonThree;
