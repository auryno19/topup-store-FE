"use client";

import Button from "@/components/button";
import Modal from "@/components/modal";
import ModalBody from "@/components/modalBody";
import ModalFooter from "@/components/modalFooter";
import apiService from "@/service/apiService";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ListBanner from "./listBanner";

const HandleEditBanner: React.FC = () => {
  interface listBanner {
    id: number;
    image: string;
  }
  interface errorFetch {
    message?: string;
    error?: string;
  }
  const [modalIsActive, setModalIsActive] = useState(false);
  const [data, setData] = useState<listBanner[] | null>([]);
  const [banner, setBanner] = useState("No File");
  const [dataBanner, setDataBanner] = useState<File | null>(null);
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState("");
  const [errorBanner, setErrorBanner] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("");
  const [modalId, setModalId] = useState(0);

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
  const handleEditModal = async (id: number) => {
    try {
      const response = await apiService.get<{ data: listBanner }>(
        "/banner/get/" + id,
        {
          credentials: "include",
        }
      );
      if (response.data && response.data.data) {
        setModalTitle("Edit Banner");
        setPreviewImage("data:image/*;base64," + response.data.data.image);
        setModalType("edit");
        setModalId(id);
        setIsPreviewImage(true);
        setModalIsActive(true);
      }
    } catch (err) {
      setError((err as errorFetch).message || "An unknown error occurred");
    }
  };
  useEffect(() => {
    if (dataBanner) {
      handlePreviewImage();
    }
  }, [dataBanner, handlePreviewImage]);
  const clearPreview = () => {
    (document.getElementById("banner") as HTMLInputElement).value = "";
    setDataBanner(null);
    setIsPreviewImage(false);
    setBanner("No File");
  };
  const fetchData = async () => {
    try {
      const response = await apiService.get<{ data: listBanner[] }>(
        "/banner/getAll",
        {
          credentials: "include",
        }
      );
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

  const handleFileUpload = async (
    form: FormData,
    endpoint: string,
    method: string
  ) => {
    try {
      let response;
      if (method == "POST") {
        response = await apiService.post(
          endpoint,
          form,
          {
            credentials: "include",
          },
          false
        );
      } else {
        response = await apiService.put(
          endpoint,
          form,
          {
            credentials: "include",
          },
          false
        );
      }

      const statusCode = response.status;
      if (statusCode === 200) {
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
  };

  const validateFile = (file: File | null) => {
    const errors = new Map();
    if (!file) {
      errors.set("image", "Please Insert image");
      return { valid: false, errors: errors as Map<string, string> };
    }

    const type = file.type;
    const size = Number(file.size) / 1024; // Convert size to KB

    if (size > 1024) {
      errors.set(
        "image",
        "The uploaded file exceeds the maximum allowed size of 1 MB. Please reduce the file size and try again"
      );
      return { valid: false, errors };
    }

    if (
      !["image/png", "image/jpg", "image/jpeg", "image/webp"].includes(type)
    ) {
      errors.set(
        "image",
        "The uploaded file must have a .jpeg, .jpg, .png, or .webp extension"
      );
      return { valid: false, errors };
    }

    return { valid: true, errors: new Map<string, string>() };
  };

  const handleBanner = async (id?: number) => {
    const form = new FormData();
    const validation = validateFile(dataBanner);

    if (!validation.valid) {
      handleError(validation.errors);
      return;
    }

    if (dataBanner) {
      form.append("file", dataBanner);
    }

    const imgCheck = new window.Image();
    if (dataBanner) {
      imgCheck.src = URL.createObjectURL(dataBanner);
    }
    imgCheck.onload = () => {
      const endpoint = id ? `/banner/edit/${id}` : "/banner/add";
      const method = id ? "PUT" : "POST";

      handleFileUpload(form, endpoint, method);
    };
    imgCheck.onerror = () => {
      handleError(new Map([["image", "Please upload a valid image file"]]));
    };
  };

  const saveBanner = () => {
    handleBanner();
  };

  const editBanner = (id: number) => {
    handleBanner(id);
  };

  const deleteBaner = async (id: number) => {
    try {
      const response = await apiService.put("/banner/delete/" + id, null, {
        credentials: "include",
      });
      console.log(response);
    } catch (err) {
      if (err) {
        setError((err as errorFetch).message || "An unknown error occurred");
      }
    } finally {
      fetchData();
    }
  };

  const handleError = (error: Map<string, string>) => {
    if (error.get("image") != null) {
      setErrorBanner(error.get("image") || "");
    }
  };

  const handleModal = () => {
    setModalTitle("Add Banner");
    setModalType("post");
    setModalId(0);
    clearPreview();
    setModalIsActive(!modalIsActive);
  };
  return (
    <>
      <Modal
        active={modalIsActive}
        handleModal={handleModal}
        title={modalTitle}
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
          <Button
            loading={false}
            onClick={
              modalType == "post" ? saveBanner : () => editBanner(modalId)
            }
            value={modalType == "post" ? "Save" : "Edit"}
          />
        </ModalFooter>
      </Modal>
      <div className="w-full pl-10">
        <Button loading={false} onClick={handleModal} value="Add Banner" />
      </div>
      {loading ? (
        <div className="flex justify-center self-center relative w-[70%] h-0 pb-[35%] rounded-lg overflow-hidden shadow-sm ">
          <span className="eos-icons--three-dots-loading"></span>
        </div>
      ) : error ? (
        <div className="self-center relative w-[70%] h-0 pb-[35%] rounded-lg overflow-hidden shadow-sm ">
          <p className="text-center">Error : {error}</p>
        </div>
      ) : (
        <div className="w-full px-20">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="px-4 py-2 w-1/6">No</th>
                <th className="px-4 py-2 w-3/6">Banner</th>
                <th className="px-4 py-2 w-2/6">Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((banner, index) => (
                  <ListBanner
                    data={banner}
                    key={banner.id}
                    no={index + 1}
                    handleEdit={handleEditModal}
                    handleDelete={deleteBaner}
                  />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default HandleEditBanner;
