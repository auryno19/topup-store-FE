import Button from "@/components/button";
import Image from "next/image";

interface Banner {
  id: number;
  image: string;
}

interface ListBannerProp {
  data: Banner;
  no: number;
}

const ListBanner: React.FC<ListBannerProp> = ({ data, no }) => {
  return (
    <tr className="border-b border-slate-300">
      <td className="px-4 py-2">{no}</td>
      <td className="px-4 py-2 flex justify-center">
        <div className="relative w-[50%] h-0 pb-[30%] rounded-lg overflow-hidden shadow-sm ">
          <Image
            src={data ? "data:image/*;base64," + data.image : "/banner.jpeg"}
            layout="fill"
            objectFit="cover"
            alt={"Slide Banner " + data.id}
          />
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="w-full flex gap-2 justify-center">
          <Button
            loading={false}
            onClick={function (e: React.FormEvent): void {
              throw new Error("Function not implemented.");
            }}
            type="warning"
            size="sm"
            value={"Edit"}
          />
          <Button
            loading={false}
            onClick={function (e: React.FormEvent): void {
              throw new Error("Function not implemented.");
            }}
            type="danger"
            size="sm"
            value={"Delete"}
          />
        </div>
      </td>
    </tr>
  );
};

export default ListBanner;
