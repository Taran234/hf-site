'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const img = [

    { src: "/des13.jpeg", width: 600, height: 1000, caption: "Minimalist High-End website Design for furniture store" },
    { src: "/des15.jpeg", width: 600, height: 1000, caption: "Profesional bright color website design for construction service" },
    { src: "/des16.jpg", width: 600, height: 1000, caption: "Elegant and clam web design for professionalism" },
    { src: "/des5.jpeg", width: 600, height: 1000, caption: "A bright and unique website that make you stand out" },
    { src: "/des11.jpeg", width: 600, height: 1000, caption: "A clean website design for small buisness to show off thier service" },
    { src: "/des12.jpeg", width: 600, height: 1000, caption: "Real Estate Lisiting website design for portfolio showcase" },
    { src: "/des8.jpeg", width: 600, height: 1000, caption: "Dark themed website for night time buisnesses" },
    { src: "/des7.jpeg", width: 600, height: 1000, caption: "Brand designs for standing out" },
    { src: "/des10.jpeg", width: 600, height: 1000, caption: "Dark themed Bakery website for elegance" },
    // Add more images as needed
];

const GalleryItem = ({ src, width, height, caption, onClick }: any) => {
    const klass = height > width ? 'row-span-2' : width > height ? 'col-span-2' : '';

    return (
        <figure
            className={`relative ${klass}`}
            onClick={onClick}
            itemProp="associatedMedia"
            itemScope
            itemType="http://schema.org/ImageObject"
        >
            <div className="relative hover:scale-105">
                <Image
                    className="lazyload lazypreload fadein block"
                    src={src}
                    width={width}
                    height={height}
                    alt={caption}
                />
                <div className="absolute inset-1 block items-start justify-start">
                    <div className="absolute top-1 left-1 w-8 h-8 bg-inherit border-t-4 border-l-4 border-purple-300"></div>
                    <div className="absolute top-1 right-2 w-8 h-8 bg-inherit border-t-4 border-r-4 border-purple-300"></div>
                    <div className="absolute bottom-1 left-1 w-8 h-8 bg-inherit border-b-4 border-l-4 border-purple-300"></div>
                    <div className="absolute bottom-1 right-2 w-8 h-8 bg-inherit border-b-4 border-r-4 border-purple-300"></div>
                </div>
            </div>
            {caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 text-center text-sm bg-black bg-opacity-10 text-white py-1">
                    {caption}
                </figcaption>
            )}
        </figure>
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
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text my-7">Our Designs</span>
                <br />
            </div>
            <div className="gallery grid gap-10 grid-cols-1 md:grid-cols-3 mx-auto px-10 w-full items-start justify-start" itemScope itemType="http://schema.org/ImageGallery">
                {img.map((image, index) => (
                    <GalleryItem key={index} {...image} onClick={() => openLightbox(image.src, image.caption)} />
                ))}
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
