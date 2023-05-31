import React, { useState } from 'react';

const images = [
  { id: 1, src: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150319937990757/MG_4283-01_1.jpeg', title: 'Image 1' },
  { id: 2, src: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150661996073071/Rishika_Sen.jpg', title: 'Image 2' },
  { id: 3, src: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150319937990757/MG_4283-01_1.jpeg', title: 'Image 3' },
  { id: 4, src: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150661996073071/Rishika_Sen.jpg', title: 'Image 4' },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <button
          onClick={handlePrevClick}
          className="p-4 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none"
        >
          Prev
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center">
        <button
          onClick={handleNextClick}
          className="p-4 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;