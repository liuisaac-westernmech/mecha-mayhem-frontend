"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/photos/gallery`);
            console.log(res);
    
            // Construct the photoData with URLs
            const photoData = res.data.map(photo => ({
                ...photo, // Keep existing properties
                url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/photos/gallery/${photo.url}`, // Construct full URL
            }));

            console.log(photoData);
    
            setPhotos(photoData); // Set the state with the modified photo data
        } catch (error) {
            console.error("Error fetching photos:", error); // Log error for debugging
        }
    };
    

    return (
        <div className="flex-col-centered z-10 mt-20 bg-black">
          <h1 className="font-saira sm:text-9xl text-7xl z-10 mb-8">GALLERY</h1>
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 w-[80vw] gap-5 border-t-2 border-white pt-16">
                {photos.map((photo, index) => (
                    <figure className="flex-row-start" key={index}>
                        <div className="relative w-full 2xl:h-[20vw] lg:h-[40vh] sm:h-[60vh] h-[80vw] hover:scale-105 transition duration-400 ease-in-out rounded-sm">
                            <Image
                                src={photo.url}
                                alt="break"
                                style={{ objectFit: "cover" }}
                                unoptimized
                                fill
                            />
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
