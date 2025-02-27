"use client";

import Button from "@/components/button";
import Modal from "@/components/modal";
import ModalBody from "@/components/modalBody";
import ModalFooter from "@/components/modalFooter";
import apiService from "@/service/apiService";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const HandleEditBanner: React.FC = () => {
  interface Banner {
    banner: string;
  }
  interface errorFetch {
    message?: string;
    error?: string;
  }
  const [modalIsActive, setModalIsActive] = useState(false);
  const [data, setData] = useState<Banner | null>(null);
  const [banner, setBanner] = useState("No File");
  const [dataBanner, setDataBanner] = useState<File | null>(null);
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState("");
  const [errorBanner, setErrorBanner] = useState("");
  const [loading, setLoading] = useState(true);

  const handlePreviewImage = useCallback(() => {
    if (dataBanner) {
      const file = new FileReader();
      file.readAsDataURL(dataBanner);

      const image = new window.Image();
      image.src = URL.createObjectURL(dataBanner);
      image.onload = () => {
        file.onload = (e) => {
          if (typeof e.target?.result === "string") {
            setIsPreviewImage(true);
            setPreviewImage(e.target.result);
          }
        };
      };
    }
  }, [dataBanner]);
  useEffect(() => {
    if (dataBanner) {
      handlePreviewImage();
    }
  }, [dataBanner, handlePreviewImage]);
  const clearPreview = () => {
    setDataBanner(null);
    setIsPreviewImage(false);
    setBanner("No File");
  };
  const fetchData = async () => {
    try {
      const response = await apiService.get<{ data: Banner }>("/banner", {
        credentials: "include",
      });
      setData(response.data.data);
    } catch (err) {
      if (err) {
        setError((err as errorFetch).message || "An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveBanner = () => {
    const errors = new Map();
    const form = new FormData();

    if (dataBanner == null) {
      console.log("data banner kosong : ", dataBanner);
      errors.set("image", "Please Insert image");
      handleError(errors);
      return;
    }
    console.log("data banner next : ", dataBanner);

    const type = dataBanner.type;
    const size = Number(dataBanner.size) / 1024;
    form.append("file", dataBanner);

    const imgCheck = new window.Image();
    imgCheck.src = URL.createObjectURL(dataBanner);
    imgCheck.onload = async () => {
      if (size > 1024) {
        errors.set(
          "image",
          "The uploaded file exceeds the maximum allowed size of 1 MB. Please reduce the file size and try again"
        );
        handleError(errors);
      } else {
        try {
          console.log(form);
          const response = await apiService.put(
            "/banner/edit",
            form,
            {
              credentials: "include",
            },
            false
          );

          const statusCode = response.status;
          if (statusCode == 200) {
            fetchData();
            handleModal();
            clearPreview();
          }
        } catch (err) {
          setError((err as errorFetch).message || "An unknown error occurred");
          handleModal();
        } finally {
          handleModal();
        }
      }
    };

    imgCheck.onerror = () => {
      if (
        !(
          type == "image/png" ||
          type == "image/jpg" ||
          type == "image/jpeg" ||
          type == "image/webp"
        )
      ) {
        errors.set(
          "image",
          "The uploaded file must have a .jpeg, .jpg, .png, or .webp extension"
        );
      } else {
        errors.set("image", "Plase upload image file");
      }
      handleError(errors);
    };
  };

  const handleError = (error: Map<string, string>) => {
    if (error.get("image") != null) {
      setErrorBanner(error.get("image") || "");
    }
  };

  const handleModal = () => {
    setModalIsActive(!modalIsActive);
  };
  return (
    <>
      <Modal
        active={modalIsActive}
        handleModal={handleModal}
        title="Edit Banner"
      >
        <ModalBody>
          <div className="w-full px-3">
            <form onSubmit={saveBanner}>
              <label htmlFor="banner" className="text-sm text-slate-600">
                Banner
              </label>
              <div
                className={`flex flex-row items-center w-full bg-slate-300 rounded-md ${
                  errorBanner && "ring-red-500 ring-2"
                }`}
              >
                <input
                  type="file"
                  id="banner"
                  onChange={(e) => {
                    if (e.target.files) {
                      setErrorBanner("");
                      setBanner(e.target.files[0].name);
                      setDataBanner(e.target.files[0]);
                      setTimeout(() => {
                        handlePreviewImage();
                      }, 200);
                    }
                  }}
                  hidden
                />
                <label
                  htmlFor="banner"
                  className="block py-2 px-4 rounded-[3.5px] w-[6.5rem] border-0 text-sm =font-semibold bg-slate-400
            text-slate-700 hover:bg-slate-500 hover:text-slate-200 cursor-pointer"
                >
                  Choose file
                </label>
                <label className="text-sm py-2 px-4 text-slate-500 max-w-72">
                  <p className="line-clamp-1">{banner}</p>
                </label>
              </div>
              {errorBanner && (
                <div className="before:content-['*'] text-sm italic text-red-600 mt-1 ml-2">
                  {errorBanner}
                </div>
              )}
              <div
                className={`relative w-36 h-24 mt-3  ${
                  !isPreviewImage && "hidden"
                }`}
              >
                {isPreviewImage && (
                  <Image
                    src={previewImage}
                    alt="banner preview"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
                <div
                  className="absolute flex items-center justify-center text-slate-200 w-5 h-5 bg-red-500 rounded-full cursor-pointer -right-2 -top-2"
                  onClick={clearPreview}
                >
                  <span className="iconamoon--close-bold"></span>
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button loading={false} onClick={saveBanner} value="Save" />
        </ModalFooter>
      </Modal>
      <Button loading={false} onClick={handleModal} value="trigger" />
      {loading ? (
        <div className="flex justify-center self-center relative w-[70%] h-0 pb-[35%] rounded-lg overflow-hidden shadow-sm ">
          <span className="eos-icons--three-dots-loading"></span>
        </div>
      ) : error ? (
        <div className="self-center relative w-[70%] h-0 pb-[35%] rounded-lg overflow-hidden shadow-sm ">
          <p className="text-center">Error : {error}</p>
        </div>
      ) : (
        <div className="self-center relative w-[70%] h-0 pb-[35%] rounded-lg overflow-hidden shadow-sm ">
          <Image
            src={data ? "data:image/*;base64," + data.banner : "/banner.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="Fufa Store Logo"
          />
        </div>
      )}
    </>
  );
};

export default HandleEditBanner;
