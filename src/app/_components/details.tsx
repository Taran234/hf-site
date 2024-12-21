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

interface Loc {
    location: string;
}
export function Detail(location: Loc) {
    var currentLocation = location.location || "your City";
    currentLocation = currentLocation.charAt(0).toUpperCase() + currentLocation.slice(1);
    const features = [
        {
            title: "Fully Customized solution",
            description:
                "Tailored solutions that fit your unique business needs.",
            icon: <FaCode size={30} />,
        },
        {
            title: "Responsive Design",
            description:
                "Designs that look great on all devices.",
            icon: <FaMobileAlt size={30} />,
        },
        {
            title: "E-commerce Integration",
            description:
                "Building online stores that drive sales.",
            icon: <FaLaptopCode size={30} />,
        },
        {
            title: "Fast and Secure Hosting",
            description:
                "Reliable hosting solutions for optimal website performance and security.",
            icon: <FaUserShield size={30} />,
        },
        {
            title: "SEO Optimization",
            description:
                "SEO practices and strategies to rank higher on Google.",
            icon: <FaWrench size={30} />,
        },
        {
            title: "100% Money Back Guaranteed",
            description:
                "Money back if unsatisfying results.",
            icon: <FaRocket size={30} />,
        },
        {
            title: "GMB Profile Optimization",
            description:
                `Boost local search visibility and attract more customers in ${currentLocation}.`,
            icon: <FaPaintBrush size={30} />,
        },
        {
            title: "Improved Brand Visibility",
            description:
                `Increase brand visibility and rankings for relevant keywords in ${currentLocation}.`,
            icon: <FaHandshake size={30} />,
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
            <div className="mb-4 relative z-10 px-10 text-neutral-300">
                {icon}
            </div>
            <div className=" font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-32 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-amber-500 transition-all duration-300 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 font-aclonica md:text-xl text-xl inline-block text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
