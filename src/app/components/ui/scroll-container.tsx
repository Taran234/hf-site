"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const containerRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 0.95];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());


    return (
        <div
            className="h-[10rem] md:h-[45rem] flex items-center justify-center relative p-2  py-10"
            ref={containerRef}
        >
            <div
                className=" w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >

                <Card rotate={rotate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    );
};


export const Card = ({
    rotate,
    scale,

    children,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="relative max-w-5xl -mt-12 mx-auto w-full border-2 border-[#85c2c2] pl-10 py-[6px] pr-14 bg-[#0c0304] rounded-[30px]"
        >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-900 md:rounded-2xl md:p-4">
                {children}
            </div>
            {/* Camera */}
            <div className="absolute top-[45%] left-5 transform -translate-x-1/2 w-3.5 h-3.5 bg-gray-900 rounded-full"></div>
            {/* Home Button */}
            <div className="absolute top-[43%] -right-1 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full border-2 border-[#85c2c2]">
                <div className="w-4 h-4 bg-transparent border-white border-[0.3px] rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            </div>
        </motion.div>
    );
};

