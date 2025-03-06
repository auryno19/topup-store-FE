"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  slides: string[];
}
const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [translateX, setTranslateX] = useState(0);
  const [orderedSlide, setOrderedSlides] = useState(slides);
  const [isTransition, setIsTransitions] = useState(true);

  const moveSlide = (fromIndex: number, toIndex: number) => {
    const newSlides = [...orderedSlide];
    const movedSlide = newSlides.splice(fromIndex, 1)[0];
    newSlides.splice(toIndex, 0, movedSlide);
    setOrderedSlides(newSlides);
  };
  const nextSlide = () => {
    if (translateX < 100 * (slides.length - 1)) {
      setIsTransitions(true);
      setTranslateX(translateX + 100);
      if (translateX + 100 == 100 * (slides.length - 1)) {
        setTimeout(() => {
          setIsTransitions(false);
        }, 500);
      }
    } else {
      moveSlide(0, slides.length - 1);
      setTranslateX(translateX - 100);
      setTimeout(() => {
        setTranslateX(translateX);
        setIsTransitions(true);
        setTimeout(() => {
          setIsTransitions(false);
        }, 500);
      }, 100);
    }
  };

  const previousSlide = () => {
    if (translateX > 0) {
      setIsTransitions(true);
      setTranslateX(translateX - 100);
      if (translateX - 100 == 0) {
        setTimeout(() => {
          setIsTransitions(false);
        }, 500);
      }
    } else {
      moveSlide(slides.length - 1, 0);
      setTranslateX(translateX + 100);
      setTimeout(() => {
        setTranslateX(translateX);
        setIsTransitions(true);
        setTimeout(() => {
          setIsTransitions(false);
        }, 500);
      }, 100);
    }
  };
  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translateX]);
  return (
    <div className="overflow-hidden relative shadow-lg rounded-lg">
      <div
        className={`flex ${
          isTransition ? "transition-transform duration-500" : ""
        }`}
        style={{
          transform: `translateX(-${translateX}%)`,
        }}
      >
        {orderedSlide.map((s, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={s ? "data:image/*;base64," + s : "/banner.jpeg"}
              alt={`Slide ${index}`}
              width={800}
              height={100}
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </div>

      <div
        className={`top-0 h-full w-full justify-between items-center flex text-white px-2 text-3xl ${
          slides.length > 1 ? "absolute" : "hidden"
        }`}
      >
        <button
          onClick={previousSlide}
          className="md:w-8 md:h-8 w-4 h-4 rounded-full bg-gray-600 opacity-30 hover:opacity-70 transition-opacity duration-200 ring-2 ring-white active:border-none active:ring-0 flex items-center"
          title="Previous Slide"
        >
          <span className="eva--chevron-left-fill "></span>
        </button>
        <button
          onClick={nextSlide}
          className="md:w-8 md:h-8 w-4 h-4 rounded-full bg-gray-600 opacity-30 hover:opacity-70 transition-opacity duration-200 ring-2 ring-white active:border-none active:ring-0 flex items-center"
          title="Next Slide"
        >
          <span className="eva--chevron-right-fill "></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
