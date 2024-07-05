import * as React from "react";

export function About() {
    return (
        <div className="bg-black py-16 my-auto px-5 ">
            <div className="max-w-5xl mx-auto">
                <div className="text-center text-2xl md:text-5xl font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text leading-normal mb-10">
                    Experience Affordable Development with Lightning Speed.<br /><br />
                    <div className="md:text-xl text-sm font-normal text-white">
                        Stop struggling with overpriced agencies and unreliable freelancers. Partner with us for a dedicated team, unlimited revisions, and real-time tracking. Stay informed every step of the way and enjoy development that's up to 4x faster than traditional methods. Ready to transform your project? <a href="/contact" className="text-blue-500 font-bold underline">Contact us now!</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <FeatureCard title="A Dedicated Team" description="Skip the hassle of finding and vetting developers. At We, you get access to an entire dedicated team including a Developer, Designer, and Project Manager all for the price of a single employee." />
                    <FeatureCard title="Real-Time Tracking" description="Access a real-time project management board, allowing you to track progress, request unlimited revisions, and communicate with your dedicated team. The board facilitates clear communication and efficient task management." />
                    <FeatureCard title="Increase Speed" description="Our proven development process eliminates slowdowns with faster project cycles and fewer meetings. Accelerating your software development up to 4x faster than traditional agencies." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <FeatureCard title="Weekly Active Sprints" description="We crank through development sprints in weekly cycles. Each sprint is comprised of multiple tasks that are scheduled to be completed that week." />
                    <FeatureCard title="Unlimited Tasks & Revisions" description="Once subscribed, you'll unlock unlimited development services with the ability to add endless development or design tasks. Our unlimited revision policy ensures your software or app is built exactly as you envision it." />
                </div>
            </div>
        </div>
    );
}

// Reusable component for feature cards
function FeatureCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-amber-900 rounded-3xl p-5">
            <div className="text-white text-4xl font-medium mb-3">{title}</div>
            <div className="text-white text-md">{description}</div>
        </div>
    );
}
