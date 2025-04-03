import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data/reviews.json')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews data:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  const displayedReviews = reviews.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="bg-orange-300 relative p-20">
      <h2 className="text-2xl font-bold text-center">What Our Users Say</h2>
      <div className="flex overflow-hidden">
        {displayedReviews.map((review, index) => (
          <div key={index} className="flex-none w-1/3 p-4 transition-transform duration-400">
            <img
              src={review.photo}
              alt={review.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-lg italic">"{review.text}"</p>
          </div>
        ))}
      </div>
      <Button onClick={prevSlide} className="absolute left-1 top-1/2 transform -translate-y-1/2">
        &lt;
      </Button>
      <Button onClick={nextSlide} className="absolute right-1 top-1/2 transform -translate-y-1/2">
        &gt;
      </Button>
    </div>
  );
}

export default Reviews;