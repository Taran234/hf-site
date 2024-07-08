import * as React from "react";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

// Define animation variants
const leftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const rightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

// Helper component for animated steps
const AnimatedStep = ({ children, direction, delay }: any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={direction === 'left' ? leftToRight : rightToLeft}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </motion.div>
    );
};

export function Howitworks() {
    return (
        <div className="flex flex-col items-center mx-5 space-y-4">
            <AnimatedStep direction="left" delay={0}>
                <Step1 />
            </AnimatedStep>
            <AnimatedStep direction="right" delay={0}>
                <Step2 />
            </AnimatedStep>
            <AnimatedStep direction="left" delay={0}>
                <Step3 />
            </AnimatedStep>
            <AnimatedStep direction="right" delay={0}>
                <Step4 />
            </AnimatedStep>
            <AnimatedStep direction="left" delay={0}>
                <Step5 />
            </AnimatedStep>
        </div >
    );
}
