import { X } from "lucide-react";

export default function Lightbox({ image, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-800 border-rounded-lg p-4 hover:text-gray-300 transition-colors duration-300"
        >
          <X size={24} />
        </button>
        <img
          src={image.url || "/placeholder.svg"}
          alt={image.title}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg"
        />
        {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
          <p>{image.description}</p>
        </div> */}
      </div>
    </div>
  );
}
