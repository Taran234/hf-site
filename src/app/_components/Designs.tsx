'use client';
import React from 'react';
import { HeroParallax } from './pdesign';

// Array with image sources
const img = [
    "/des1.jpeg",
    "/des2.jpeg",
    "/des3.jpeg",
    "/des4.png",
    "/des5.jpeg",
    "/des6.jpeg",
    "/des7.jpeg",
    "/des8.jpeg",
    "/des9.jpeg",
    "/des10.jpeg",
    "/des11.jpeg",
    "/des12.jpeg",
    "/des13.jpeg"
    // Add more image URLs as needed
];
const products = [
    {
        title: "Management Company Website Design",
        thumbnail:
            "/des1.jpeg",
    },
    {
        title: "Restorant Website Design",
        thumbnail:
            "/des2.jpeg",
    },
    {
        title: "E-commerce Website Design",
        thumbnail:
            "/des3.jpeg",
    },

    {
        title: "Editorially",
        thumbnail:
            "/des4.png",
    },
    {
        title: "Product Landing Page Design",
        thumbnail:
            "/des5.jpeg",
    },
    {
        title: "Photography Website Design",
        thumbnail:
            "/des6.jpeg",
    },

    {
        title: "Restaurant Bar Website Design",
        thumbnail:
            "/des8.jpeg",
    },
    {
        title: "E-Commerce Website Redesign",
        thumbnail:
            "/des9.jpeg",
    },
    {
        title: "Hi-res Bakery website Design",
        thumbnail:
            "/des10.jpeg",
    },
    {
        title: "Movers website Design",
        thumbnail:
            "/des11.jpeg",
    },

    {
        title: "Real Estate Website design",
        thumbnail:
            "/des12.jpeg",
    },
    {
        title: "Real Estate Lisiting Website Design",
        thumbnail:
            "/des13.jpeg",
    },
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
    return (<div className='flex flex-col m-6'>
        {/* <InfiniteMovingCards items={images} direction="left" speed="slow" pauseOnHover={false} />
        <InfiniteMovingCards items={images} direction="right" speed="slow" pauseOnHover={false} />
        <InfiniteMovingCards items={images} direction="left" speed="slow" pauseOnHover={false} /> */}
        <HeroParallax products={products} />
    </div>

    );
};

const Gallery = () => {
    return (
        <>
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal my-10">
                <h4 className="text-3xl lg:text-5xl font-aclonica lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
                    Our Designs
                </h4>
                <br />
            </div>
            <div className="mx-auto w-full " >
                <Grid images={imagesWithDetails} />
            </div >
        </>
    );
};

export default Gallery;
