"use client";

import Button from "@/components/button";
import Modal from "@/components/modal";
import Image from "next/image";
import { useState } from "react";

const HandleEditBanner: React.FC = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const handleModal = () => {
    setModalIsActive(!modalIsActive);
  };
  return (
    <>
      <Modal active={modalIsActive} handleModal={handleModal} />
      <Button loading={false} onClick={handleModal} value="trigger" />
      <div className="self-center relative w-[70%] h-0 pb-[35%] rounded-lg overflow-hidden shadow-sm ">
        <Image
          src="/banner.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Fufa Store Logo"
        />
      </div>
    </>
  );
};

export default HandleEditBanner;
