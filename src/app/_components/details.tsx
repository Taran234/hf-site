import {
    FaCode,
    FaMobileAlt,
    FaLaptopCode,
    FaUserShield,
    FaWrench,
    FaRocket,
    FaPaintBrush,
    FaHandshake,
} from "react-icons/fa";
import { cn } from "../lib/utils";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Custom Web Development",
            description:
                "Tailored solutions that fit your unique business needs, from concept to deployment.",
            icon: <FaCode />,
        },
        {
            title: "Responsive Design",
            description:
                "Designs that look great on all devices, ensuring a seamless user experience across screens.",
            icon: <FaMobileAlt />,
        },
        {
            title: "E-commerce Solutions",
            description:
                "Robust and scalable online stores that drive sales and enhance customer experience.",
            icon: <FaLaptopCode />,
        },
        {
            title: "Secure and Reliable",
            description:
                "We prioritize security and reliability to ensure your website is protected and always available.",
            icon: <FaUserShield />,
        },
        {
            title: "SEO Optimization",
            description:
                "Improve your search engine rankings with our SEO best practices and strategies.",
            icon: <FaWrench />,
        },
        {
            title: "Fast Performance",
            description:
                "Optimized websites for fast loading times, improving user satisfaction and retention.",
            icon: <FaRocket />,
        },
        {
            title: "Creative Design",
            description:
                "Innovative and visually appealing designs that capture your brand's essence and attract your audience.",
            icon: <FaPaintBrush />,
        },
        {
            title: "Client-Centric Approach",
            description:
                "We value your feedback and work closely with you to ensure the final product exceeds your expectations.",
            icon: <FaHandshake />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r p-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
