'use client';
import React from 'react';
import { InfiniteMovingCards } from '../components/ui/cards';

// Array with image sources
const img = [
    "/des13.jpeg",
    "/des15.jpeg",
    "/des16.jpg",
    "/des5.jpeg",
    "/des11.jpeg",
    "/des12.jpeg",
    "/des8.jpeg",
    "/des7.jpeg",
    "/des10.jpeg"
    // Add more image URLs as needed
];

// Convert the array of image sources into an array of objects
const imagesWithDetails = img.map((src, index) => ({
    // label: `Design ${index + 1}`,
    label: "",
    src,
    alt: `Design Image ${index + 1}`
}));

// Grid component to render InfiniteMovingCards
const Grid = ({ images }: { images: { label: string; src: string; alt: string; }[] }) => {
    return (<div className='flex flex-col gap-2 justify-evenly'>
        <InfiniteMovingCards items={images} direction="left" speed="slow" pauseOnHover={false} />
        <InfiniteMovingCards items={images} direction="right" speed="slow" pauseOnHover={false} />
        <InfiniteMovingCards items={images} direction="left" speed="slow" pauseOnHover={false} />
    </div>

    );
};

const Gallery = () => {
    return (
        <>
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal my-10">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Our Designs
                </h4>
                <br />
            </div>
            <div className="gallery mx-auto  w-full items-center justify-center" >
                <Grid images={imagesWithDetails} />
            </div >
        </>
    );
};

export default Gallery;
