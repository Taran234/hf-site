import Image from "next/image";
import * as React from "react";
import { useEffect } from "react";

export function Step5() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900">
                    <div className="flex flex-col">
                        <div className="mt-5 text-lg font-medium md:leading-8 md:justify-start">
                            Your website is live, but our work has just begun. From here on we have two path to scale traffic to your website: our SEO content package brings steady, organic traffic over time, or we can help you scale quickly with targeted ads on Google, Facebook, and Instagram. For the best results, we recommend a balanced approach—building SEO while running ads for faster growth.
                            Alongside either packages, we provide FREE technical maintenance to keep your site fast, secure, and always performing at its best.
                        </div>
                        <div className="justify-center mt-4 items-center">
                            <SkeletonTwo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkeletonTwo = () => {
    useEffect(() => {
        // Dynamically load the Chart.js script
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/chart.js@2.8.0";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // After the script loads, initialize the chart
            const Chart = (window as any).Chart;
            const chart = new Chart(document.getElementById("myChart"), {
                type: "line",
                data: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "Aug",
                        "Sep",
                        "Nov",
                        "Dec"
                    ],
                    datasets: [
                        {
                            label: "16 Mar 2018",
                            borderColor: "#4A5568",
                            data: [300, 330, 420, 400, 600, 680, 830, 900, 800, 940, 1000],
                            fill: false,
                            pointBackgroundColor: "#4A5568",
                            borderWidth: "3",
                            pointBorderWidth: "4",
                            pointHoverRadius: "6",
                            pointHoverBorderWidth: "8",
                            pointHoverBorderColor: "rgba(74, 85, 104, 0.2)"
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: true
                                },
                                display: true
                            }
                        ]
                    }
                }
            });

            return () => {
                chart.destroy(); // Clean up the chart on component unmount
            };
        };

        return () => {
            // Clean up the script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex items-center justify-center py-8 md:px-4 ">
            <div className="w-full lg:w-2/3 bg-dot-white/[0.2] md:mx-10 md:p-6">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="lg:flex w-full justify-between">
                            <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
                                Increased Visitors
                            </h3>

                        </div>
                        <div className="flex items-end mt-6">
                            <h3 className="text-indigo-500 leading-5 text-lg md:text-2xl">11,875</h3>
                            <div className="flex items-center md:ml-4 ml-1 text-green-700">
                                <p className="text-green-700 text-xs md:text-base">267%</p>
                                <svg role="img" className="text-green-700" aria-label="increase. upward arrow icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 2.5V9.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M8 4.5L6 2.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M4 4.5L6 2.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <canvas id="myChart" width="1025" height="400" role="img" aria-label="line graph to show selling overview in terms of months and numbers"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};
