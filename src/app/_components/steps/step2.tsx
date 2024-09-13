import { motion } from "framer-motion";


export function Step2() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4 rounded-xl bg-neutral-900">

                    <div className="flex md:flex-col flex-col">
                        <div className=" text-lg font-medium md:leading-8 md:justify-start">
                            Within 24 hours, we'll send you a detailed strategy proposal, including an initial website concept. This proposal will cover all aspects of your project, from design to functionality, and how we'll achieve your objectives.
                        </div>
                        <div className=" justify-center mt-4 items-center">
                            <SkeletonTwo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const SkeletonTwo = () => {
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
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border  border-white/[0.2] p-2  items-center space-x-2 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full px-2">We can do your website for just $99. </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border  border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
            >
                <div className="w-full px-2 text-right">That's it?, what's the catch? </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border  border-white/[0.2] p-2 items-center space-x-2 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full px-2">No catch, just pay for any plugins you want. </div>
            </motion.div>
        </motion.div>
    );
};
