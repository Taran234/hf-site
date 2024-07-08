'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const img = [
    { src: "/des1.jpeg", width: 400, height: 600, caption: "Design 1" },
    { src: "/des2.jpeg", width: 400, height: 900, caption: "Design 2" },
    { src: "/des3.jpeg", width: 400, height: 600, caption: "Design 3" },
    { src: "/des5.jpeg", width: 400, height: 600, caption: "Design 4" },
    { src: "/des11.jpeg", width: 400, height: 900, caption: "Design 5" },
    { src: "/des12.jpeg", width: 400, height: 600, caption: "Design 6" },
    { src: "/des8.jpeg", width: 400, height: 900, caption: "Design 7" },
    { src: "/des13.jpeg", width: 400, height: 600, caption: "Design 8" },
    { src: "/des10.jpeg", width: 400, height: 900, caption: "Design 9" },
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
            <div className="relative hover:scale-110">
                <Image
                    className="lazyload lazypreload fadein block "
                    src={src}
                    width={width}
                    height={height}
                    alt="Design description"
                />
                <div className="absolute inset-1 block items-start justify-start">
                    <div className="absolute top-1 left-1 w-8 h-8 bg-inherit border-t-4 border-l-4 border-gray-400 "></div>
                    <div className="absolute top-1 right-1 w-8 h-8 bg-inherit border-t-4 border-r-4 border-gray-400 "></div>
                    <div className="absolute bottom-1 left-1 w-8 h-8 bg-inherit border-b-4 border-l-4 border-gray-400 "></div>
                    <div className="absolute bottom-1 right-1 w-8 h-8 bg-inherit border-b-4 border-r-4 border-gray-400 "></div>
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
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal my-16">
                <span className="bg-gradient-to-r from-pink-100 to-yellow-100 text-transparent bg-clip-text my-7">Our Designs</span>
                <br />
            </div>
            <div className='flex md:flex-row flex-col-reverse w-full'>
                <div className="gallery grid gap-10 grid-cols-1 md:grid-cols-3 mx-auto px-10 md:w-4/6 items-start justify-start" itemScope itemType="http://schema.org/ImageGallery">
                    {img.map((image, index) => (
                        <GalleryItem key={index} {...image} onClick={() => openLightbox(image.src, image.caption)} />
                    ))}
                </div>
                {lightboxOpen && (
                    <div className="md:w-2/6 md:flex hidden justify-end items-start" onClick={closeLightbox}>
                        <div>
                            <img src={selectedImage.src} alt="Expanded" />
                            {selectedImage.caption && <div className="lightbox-caption">{selectedImage.caption}</div>}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;