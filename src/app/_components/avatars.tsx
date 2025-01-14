/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { cn } from "../lib/utils";


interface Avatar {
    imageUrl: string;
    profileUrl: string;
}
interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: Avatar[];
}

const AvatarCircles = ({
    numPeople,
    className,
    avatarUrls,
}: AvatarCirclesProps) => {
    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            {avatarUrls.map((url, index) => (
                <a
                    key={index}
                    href={url.profileUrl}

                >
                    <img
                        key={index}
                        className="h-12 w-12 rounded-full border-2 border-gray-800"
                        src={url.imageUrl}
                        width={40}
                        height={40}
                        loading="lazy"
                        alt={`Avatar ${index + 1}`}
                    />
                </a>
            ))}
            {(numPeople ?? 0) > 0 && (
                <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
                    href=""
                >
                    +{numPeople}
                </a>
            )}
        </div>
    );
};

export default AvatarCircles;
