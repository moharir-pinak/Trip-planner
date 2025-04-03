import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

function Gallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9; // 3x3 grid

  useEffect(() => {
    fetch('/data/gallery.json')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching gallery data:', error));
  }, []);

  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / itemsPerPage));
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / itemsPerPage)) % Math.ceil(images.length / itemsPerPage));
  };

  const displayedImages = images.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage);

  return (
    <div className="w-full relative p-16 pt-24 pb-24">
      <h2 className="text-2xl font-bold text-center">Gallery</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {displayedImages.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-auto rounded-lg shadow transition-transform duration-300 transform group-hover:scale-105"
            />
            <p className="text-center mt-2">{image.name}</p>
          </div>
        ))}
      </div>
      <Button onClick={prevPage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded shadow hover:bg-gray-200">
        &lt;
      </Button>
      <Button onClick={nextPage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded shadow hover:bg-gray-200">
        &gt;
      </Button>
    </div>
  );
}

export default Gallery;