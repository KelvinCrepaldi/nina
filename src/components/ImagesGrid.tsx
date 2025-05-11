import React from "react";

interface ImageGridProps {
  images: string[];
}

const MasonryGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-x-0 [column-gap:0] p-10 px-20">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          className=" w-full break-inside-avoid"
        />
      ))}
    </div>
  );
};

export default MasonryGrid;
