import { motion } from "framer-motion";


export function Step2() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4 rounded-xl bg-neutral-900">

                    <div className="flex md:flex-col flex-col">
                        <div className="m-5 text-md tracking-wide font-medium md:leading-8 md:justify-start">
                            After our FREE consultation, we will outline our strategy—ranging from competitor-driven keyword research to a customized development plan, ending with design and functionality—to position your business for measurable success.
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
                className="flex flex-row rounded-full border  border-amber-500 p-2  items-center space-x-2 w-4/5 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full px-2 text-xs">Your total comes down to $499. </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-amber-500 p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
            >
                <div className="w-full px-2 text-right text-xs">That's it?, what's the catch? </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border  border-amber-500 p-2 items-center space-x-2 w-4/5 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full px-2 text-xs">No catch, just pay for what you need. </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-amber-500 p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
            >
                <div className="w-full px-2 text-right text-xs">Sounds Great! Lets do it 🤝 </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
        </motion.div>
    );
};
