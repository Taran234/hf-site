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

export function Detail() {
    const features = [
        {
            title: "Fully Customized solution",
            description:
                "Tailored solutions that fit your unique business needs, from concept to deployment.",
            icon: <FaCode size={40} />,
        },
        {
            title: "Responsive Design",
            description:
                "Designs that look great on all devices, ensuring a seamless user experience across screens.",
            icon: <FaMobileAlt size={40} />,
        },
        {
            title: "E-commerce Integration",
            description:
                "Building robust online stores that drive sales and enhance customer experience.",
            icon: <FaLaptopCode size={40} />,
        },
        {
            title: "Fast and Secure Hosting",
            description:
                "Providing reliable hosting solutions for optimal website performance and security.",
            icon: <FaUserShield size={40} />,
        },
        {
            title: "SEO Optimization",
            description:
                "Improve your search engine rankings with our SEO best practices and strategies.",
            icon: <FaWrench size={40} />,
        },
        {
            title: "Keyword-Specific Blogs",
            description:
                "Crafting SEO-optimized blog content tailored to specific keywords that enhance your search visibility and audience engagement.",
            icon: <FaRocket size={40} />,
        },
        {
            title: "GMB Profile Optimization",
            description:
                "Optimizing your Google My Business profile to boost local search visibility and attract more customers in your area.",
            icon: <FaPaintBrush size={40} />,
        },
        {
            title: "Improved Google Ranking",
            description:
                "Implementing strategies that enhance your website's search engine ranking, driving more organic traffic to your business.",
            icon: <FaHandshake size={40} />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 md:py-10 max-w-7xl mx-auto">
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
                "flex flex-col lg:border-r md:p-10 p-6 relative group/feature border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l border-neutral-800",
                index < 4 && "lg:border-b border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 font-aclonica text-3xl inline-block text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
