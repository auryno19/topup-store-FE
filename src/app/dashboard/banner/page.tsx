import { Metadata } from "next";
import HandleEditBanner from "./handleEditBanner";

export const metadata: Metadata = {
  title: "Banner",
};

const BannerPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl mb-5">Edit Banner</p>
      <HandleEditBanner />
    </div>
  );
};

export default BannerPage;
