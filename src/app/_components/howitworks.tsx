import React from "react";
import Image from "next/image";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";

export function Howitworks() {
    const steps = [
        {
            title: "Step One",
            description: "Schedule Your Free Strategy Call",
            content: <Step1 />,
            className: "col-span-6 lg:col-span-4 border-b lg:border-r border-gray-800",
        },
        {
            title: "Step Two",
            description: "Receive Your Customized Plan",
            content: <Step2 />,
            className: "border-b col-span-1 lg:col-span-2 border-gray-800",
        },
        {
            title: "Step Three",
            description: " Begin Your Project",
            content: <Step3 />,
            className: "col-span-6 lg:col-span-2 lg:border-r border-b border-gray-800",
        },
        {
            title: "Step Four",
            description: "Optimize and Refine",
            content: <Step4 />,
            className: "col-span-6 lg:col-span-4 border-b border-gray-800",
        },
        {
            title: "Step Five",
            description: "Final Delivery and Support",
            content: <Step5 />,
            className: "col-span-6 lg:col-span-6 border-b  border-gray-800",
        },
    ];

    return (
        <div className="relative z-20 md:p-10 p-4 lg:py-30  max-w-7xl mx-auto">
            <div className="px-8">
                <h3 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl font-inknut mx-auto text-center tracking-tight font-medium text-amber-500">
                    How We Work
                </h3>

                <p className="text-lg max-w-2xl my-4 mx-auto font-inknut text-center font-normal text-white">
                    {`We’ve helped countless people create their first website and grow their online presence. From stunning designs to fast-loading pages, our websites are built to attract visitors and deliver real results.`}
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12  rounded-md ">
                    {steps.map((step) => (
                        <FeatureCard key={step.title} className={step.className}>
                            <FeatureTitle>{step.title}</FeatureTitle>
                            <FeatureDescription>{step.description}</FeatureDescription>
                            <div className="h-full w-full">{step.content}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return (
        <div className={`p-4 relative overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight font-inknut text-amber-500 font-semibold text-3xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="text-xl max-w-4xl text-left mx-auto font-sans text-neutral-300">
            {children}
        </p>
    );
};
