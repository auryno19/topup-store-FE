import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="md:px-[8rem] ">
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-sm">
        <Image
          src="/banner.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Fufa Store Logo"
        />
      </div>
    </div>
  );
};

export default Banner;
