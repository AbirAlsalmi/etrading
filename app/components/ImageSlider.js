"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-full group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-700 ease-in-out transform
            ${index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
        >
          {index === current && (
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-2xl flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white/90 mb-1">
                  {slide.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {slide.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <FaChevronLeft size={16} />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <FaChevronRight size={16} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300
              ${index === current 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/70'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
