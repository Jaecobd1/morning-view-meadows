export default function GalleryItem({ image, onSelect }: any) {
  return (
    <div
      className="mb-4 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={onSelect}
    >
      <img
        src={image.url || "/placeholder.svg"}
        alt={image.title}
        width={image.width}
        height={image.height}
        className="w-full h-auto object-cover"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
        <div className="p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{image.title}</h3>
          <p className="text-sm">{image.description}</p>
        </div>
      </div> */}
    </div>
  );
}
