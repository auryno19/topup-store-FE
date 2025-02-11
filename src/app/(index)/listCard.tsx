import Image from "next/image";
const ListCard: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap py-6">
      <div className="relative h-72 my-4 lg:w-1/6 md:w-1/3 w-1/2 px-4 cursor-pointer group hover:scale-105 duration-300 ease-in-out transition-transform ">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute w-full h-full rounded-lg top-0 border-2 opacity-0 border-sky-600 scale-90 group-hover:opacity-100 group-hover:scale-[1.04] duration-300 ease-in-out transition-all"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/item2.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Fufa Store Logo"
            />
          </div>
          <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-slate-800 to-transparent top-0 z-30 opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-300 ease-in-out">
            <p className="absolute bottom-5 left-2 font-extrabold translate-y-10 group-hover:translate-y-0 delay-75 duration-300 ease-in-out transition-transform">
              Genshin Impact
            </p>
          </div>
        </div>
        <div className="relative max-w-32 z-10 bottom-20 left-1/2 -translate-x-1/2 ">
          <Image
            src="/title-item2.png"
            alt="cek"
            width={140}
            height={14}
            layout="responsive"
          />
        </div>
      </div>
      <div className="relative h-72 my-4 lg:w-1/6 md:w-1/3 w-1/2 px-4 cursor-pointer group hover:scale-105 duration-300 ease-in-out transition-transform ">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute w-full h-full rounded-lg top-0 border-2 opacity-0 border-sky-600 scale-90 group-hover:opacity-100 group-hover:scale-[1.04] duration-300 ease-in-out transition-all"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/item.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Fufa Store Logo"
            />
          </div>
          <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-slate-800 to-transparent top-0 z-30 opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-300 ease-in-out">
            <p className="absolute bottom-5 left-2 font-extrabold translate-y-10 group-hover:translate-y-0 delay-75 duration-300 ease-in-out transition-transform">
              Honkai Star Rail
            </p>
          </div>
        </div>
        <div className="relative max-w-32 z-10 bottom-20 left-1/2 -translate-x-1/2 ">
          <Image
            src="/title-item.png"
            alt="cek"
            width={140}
            height={14}
            layout="responsive"
          />
        </div>
      </div>
      <div className="relative h-72 my-4 lg:w-1/6 md:w-1/3 w-1/2 px-4 cursor-pointer group hover:scale-105 duration-300 ease-in-out transition-transform ">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute w-full h-full rounded-lg top-0 border-2 opacity-0 border-sky-600 scale-90 group-hover:opacity-100 group-hover:scale-[1.04] duration-300 ease-in-out transition-all"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/item2.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Fufa Store Logo"
            />
          </div>
          <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-slate-800 to-transparent top-0 z-30 opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-300 ease-in-out">
            <p className="absolute bottom-5 left-2 font-extrabold translate-y-10 group-hover:translate-y-0 delay-75 duration-300 ease-in-out transition-transform">
              Genshin Impact
            </p>
          </div>
        </div>
        <div className="relative max-w-32 z-10 bottom-20 left-1/2 -translate-x-1/2 ">
          <Image
            src="/title-item2.png"
            alt="cek"
            width={140}
            height={14}
            layout="responsive"
          />
        </div>
      </div>
      <div className="relative h-72 my-4 lg:w-1/6 md:w-1/3 w-1/2 px-4 cursor-pointer group hover:scale-105 duration-300 ease-in-out transition-transform ">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute w-full h-full rounded-lg top-0 border-2 opacity-0 border-sky-600 scale-90 group-hover:opacity-100 group-hover:scale-[1.04] duration-300 ease-in-out transition-all"></div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/item.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Fufa Store Logo"
            />
          </div>
          <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-slate-800 to-transparent top-0 z-30 opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-300 ease-in-out">
            <p className="absolute bottom-5 left-2 font-extrabold translate-y-10 group-hover:translate-y-0 delay-75 duration-300 ease-in-out transition-transform">
              Honkai Star Rail
            </p>
          </div>
        </div>
        <div className="relative max-w-32 z-10 bottom-20 left-1/2 -translate-x-1/2 ">
          <Image
            src="/title-item.png"
            alt="cek"
            width={140}
            height={14}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
