import { useState } from "react";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface CarouselProps {
  slides: string[];
}
const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks slide saat ini

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Pindah ke slide berikutnya
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    ); // Pindah ke slide sebelumnya
  };

  // Mengatur urutan slide berdasarkan currentIndex
  const orderedSlides = slides.map((_, index) => {
    return slides[(currentIndex + index) % slides.length];
  });

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition-transform duration-500`}
        style={{
          transform: `translateX(-${(currentIndex % slides.length) * 100}%)`,
        }}
      >
        {orderedSlides.map((s, index) => (
          <Image
            src={s}
            alt={`Slide ${index}`}
            key={index}
            layout="fill"
            objectFit="cover"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide} title="Previous Slide">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} title="Next Slide">
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => {
              setCurrentIndex(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
