// import { useState } from "react";
import GalleryComponent from "../components/Gallery";
function Gallery() {
  // const [selectedImage, setSelectedImage] = useState(null);

  // const images = import.meta.glob(
  //   "/src/assets/gallery/*.{jpg,jpeg,png,gif,svg}",
  //   { eager: true }
  // );

  // const imageArray = Object.values(images).map((module: any) => module.default);

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery">
        <GalleryComponent />
      </div>
    </div>
  );
}

export default Gallery;
