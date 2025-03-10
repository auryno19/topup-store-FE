import Button from "@/components/button";
import Image from "next/image";

interface Banner {
  id: number;
  image: string;
}

interface ListBannerProp {
  data: Banner;
  no: number;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const ListBanner: React.FC<ListBannerProp> = ({
  data,
  no,
  handleEdit,
  handleDelete,
}) => {
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
            onClick={() => handleEdit(data.id)}
            type="warning"
            size="sm"
            value={"Edit"}
          />
          <Button
            loading={false}
            onClick={() => handleDelete(data.id)}
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
