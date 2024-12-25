'use client';
import React from 'react';
import { HeroParallax } from './pdesign';

// Array with image sources
const img = [
    "/website-design-company-toronto-1.webp",
    "/website-design-company-toronto-2.webp",
    "/website-design-company-toronto-3.webp",
    "/website-design-company-toronto-4.webp",
    "/website-design-company-toronto-5.webp",
    "/website-design-company-toronto-6.webp",
    "/website-design-company-toronto-7.webp",
    "/website-design-company-toronto-8.webp",
    "/website-design-company-toronto-9.webp",
    "/website-design-company-toronto-10.webp",
    "/website-design-company-toronto-11.webp",
    "/website-design-company-toronto-12.webp",
    "/website-design-company-toronto-13.webp"
    // Add more image URLs as needed
];
const products = [
    {
        title: "Management Company Website Design Company in Toronto",
        thumbnail: "/website-design-company-toronto-1.webp",
    },
    {
        title: "Restaurant Website Design Services in Toronto | Harbourfront Web Designs",
        thumbnail: "/website-design-company-toronto-2.webp",
    },
    {
        title: "Custom E-commerce Website Design in Toronto",
        thumbnail: "/website-design-company-toronto-3.webp",
    },
    {
        title: "Editorial Website Design Services in Toronto",
        thumbnail: "/website-design-company-toronto-4.webp",
    },
    {
        title: "High-Converting Product Landing Page Design in Toronto",
        thumbnail: "/website-design-company-toronto-5.webp",
    },
    {
        title: "Photography Portfolio Website Design in Toronto",
        thumbnail: "/website-design-company-toronto-6.webp",
    },
    {
        title: "Restaurant & Bar Website Design in Toronto | Custom Solutions",
        thumbnail: "/website-design-company-toronto-8.webp",
    },
    {
        title: "E-Commerce Website Redesign & Optimization in Toronto",
        thumbnail: "/website-design-company-toronto-9.webp",
    },
    {
        title: "Bakery Website Design in High-Resolution | Toronto",
        thumbnail: "/website-design-company-toronto-10.webp",
    },
    {
        title: "Professional Movers Website Design in Toronto",
        thumbnail: "/website-design-company-toronto-11.webp",
    },
    {
        title: "Custom Real Estate Website Design in Toronto",
        thumbnail: "/website-design-company-toronto-12.webp",
    },
    {
        title: "Real Estate Listing Website Design Services in Toronto",
        thumbnail: "/website-design-company-toronto-13.webp",
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
                <div className="text-3xl lg:text-5xl font-inknut lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
                    Our Designs
                </div>
                <br />
            </div>
            <div className="mx-auto w-full " >
                <Grid images={imagesWithDetails} />
            </div >
        </>
    );
};

export default Gallery;
