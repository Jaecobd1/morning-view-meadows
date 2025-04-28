"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function GalleryComponent() {
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    title: string;
    description: string;
    span: number;
    // height: number;
    url: string;
  } | null>(null);

  // Generate sample gallery items with varying heights
  const galleryItems = Array.from({ length: 10 }, (_, i) => {
    // Randomly assign a span value (1, 2, or 3) to create height variation
    const span = Math.floor(Math.random() * 3) + 1;
    // const height = span * 150; // Base height multiplied by span

    return {
      id: i + 1,
      title: `Image ${i + 1}`,
      description: `This is a beautiful image ${i + 1}`,
      span,
      //   height,
      url: `/gallery/${i + 1}.JPG`,
    };
  });

  return (
    <div className=" mx-auto px-4 py-8">
      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            // className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            // style={{ gridRow: `span ${item.span}` }}
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative h-full w-full group over min-h-72">
              <img
                src={item.url || "/placeholder.svg"}
                alt={item.title}
                // fill
                className="object-cover w-full h-auto"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-gray-800/60 rounded-lg p-2 hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X size={24} />
            </button>
            <div className="relative max-h-[80vh] w-full">
              <img
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.title}
                className="object-contain rounded-lg max-h-[80vh] w-full"
              />
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">
                {selectedImage.title}
              </h3>
              <p>{selectedImage.description}</p>
            </div> */}
          </div>
        </div>
      )}
      <iframe
        className="w-full h-[600px]"
        src="https://www.youtube.com/embed/M0dDGnYzJw4?si=jb-XY8I3vdZIQvMW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
