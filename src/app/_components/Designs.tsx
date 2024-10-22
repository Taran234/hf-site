'use client';
import React from 'react';
import { HeroParallax } from './pdesign';

// Array with image sources
const img = [
    "/website-design-toronto1.webp",
    "/website-design-toronto2.webp",
    "/website-design-toronto3.webp",
    "/website-design-toronto4.webp",
    "/website-design-toronto5.webp",
    "/website-design-toronto6.webp",
    "/website-design-toronto7.webp",
    "/website-design-toronto8.webp",
    "/website-design-toronto9.webp",
    "/website-design-toronto10.webp",
    "/website-design-toronto11.webp",
    "/website-design-toronto12.webp",
    "/website-design-toronto13.webp"
    // Add more image URLs as needed
];
const products = [
    {
        title: "Management Company Website Design Agency in Toronto",
        thumbnail: "/website-design-toronto1.webp",
    },
    {
        title: "Restaurant Website Design Services in Toronto | Harbourfront Web Designs",
        thumbnail: "/website-design-toronto2.webp",
    },
    {
        title: "Custom E-commerce Website Design in Toronto",
        thumbnail: "/website-design-toronto3.webp",
    },
    {
        title: "Editorial Website Design Services in Toronto",
        thumbnail: "/website-design-toronto4.webp",
    },
    {
        title: "High-Converting Product Landing Page Design in Toronto",
        thumbnail: "/website-design-toronto5.webp",
    },
    {
        title: "Photography Portfolio Website Design in Toronto",
        thumbnail: "/website-design-toronto6.webp",
    },
    {
        title: "Restaurant & Bar Website Design in Toronto | Custom Solutions",
        thumbnail: "/website-design-toronto8.webp",
    },
    {
        title: "E-Commerce Website Redesign & Optimization in Toronto",
        thumbnail: "/website-design-toronto9.webp",
    },
    {
        title: "Bakery Website Design in High-Resolution | Toronto",
        thumbnail: "/website-design-toronto10.webp",
    },
    {
        title: "Professional Movers Website Design in Toronto",
        thumbnail: "/website-design-toronto11.webp",
    },
    {
        title: "Custom Real Estate Website Design in Toronto",
        thumbnail: "/website-design-toronto12.webp",
    },
    {
        title: "Real Estate Listing Website Design Services in Toronto",
        thumbnail: "/website-design-toronto13.webp",
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
                <div className="text-3xl lg:text-5xl font-aclonica lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
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
