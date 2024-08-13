'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ParallaxScroll } from '../components/ui/parallax-grid';

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

// Grid component to render ParallaxScroll
const Grid = ({ images }: { images: string[] }) => {
    return (
        <ParallaxScroll images={images} />
    );
};

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: '', caption: '' });

    const openLightbox = (src: string, caption: string) => {
        setSelectedImage({ src, caption });
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage({ src: '', caption: '' });
    };

    return (
        <>
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal my-10">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Our Designs
                </h4>
                <br />
            </div>
            <div className="gallery grid gap-10 grid-cols-1 md:grid-cols-3 mx-auto px-10 w-full items-start justify-start" itemScope itemType="http://schema.org/ImageGallery">
                <Grid images={img} />
                {/* Optionally, you might want to add a GalleryItem component for individual items */}
            </div>
            {lightboxOpen && (
                <div className="fixed top-0 inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80 overflow-y-scroll" onClick={closeLightbox}>
                    <div className="relative max-w-full max-h-full object-contain">
                        <img src={selectedImage.src} alt={selectedImage.caption} className="relative max-w-full max-h-full " />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
