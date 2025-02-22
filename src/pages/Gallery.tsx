import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = import.meta.glob(
    "/src/assets/gallery/*.{jpg,jpeg,png,gif,svg}",
    { eager: true }
  );

  const imageArray = Object.values(images).map((module: any) => module.default);

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery">
        {imageArray.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            style={{ width: "150px", height: "auto", cursor: "pointer" }}
            onClick={() => setSelectedImage(src)}
          />
        ))}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
