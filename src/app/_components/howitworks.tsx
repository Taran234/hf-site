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
            description: "Schedule a Free Call",
            content: <Step1 />,
            className: "col-span-6 lg:col-span-4 border-b lg:border-r border-neutral-800",
        },
        {
            title: "Step Two",
            description: "Get Your Plan",
            content: <Step2 />,
            className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
        },
        {
            title: "Step Three",
            description: "Work on the Project",
            content: <Step3 />,
            className: "col-span-6 lg:col-span-2 lg:border-r border-b border-neutral-800",
        },
        {
            title: "Step Four",
            description: "Review and Adjust",
            content: <Step4 />,
            className: "col-span-6 lg:col-span-4 border-b border-neutral-800",
        },
        {
            title: "Step Five",
            description: "Final Delivery",
            content: <Step5 />,
            className: "col-span-6 lg:col-span-6 border-b border-t border-neutral-800",
        },
    ];

    return (
        <div className="relative z-20 p-10 lg:py-30 max-w-7xl mx-auto">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    How We Work
                </h4>

                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    From scheduling a call to final delivery, follow our streamlined process to get the best results.
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
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
        <div className={`p-4 sm:p-8 relative overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500  font-normal dark:text-neutral-300">
            {children}
        </p>
    );
};
