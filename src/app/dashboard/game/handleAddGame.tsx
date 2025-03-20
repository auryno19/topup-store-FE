"use client";
import AlertToast from "@/components/alertToast";
import Button from "@/components/button";
import FormField from "@/components/formField";
import FormFile from "@/components/formFile";
import Modal from "@/components/modal";
import ModalBody from "@/components/modalBody";
import ModalFooter from "@/components/modalFooter";
import RichTextEditor from "@/components/richTextEditor";
import { useCallback, useEffect, useState } from "react";

const HandleAddGame = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [name, setName] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("No File");
  const [dataImage, setDataImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPublisher, setErrorPublisher] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [alertHeader, setAlertHeader] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState<
    "error" | "success" | "warning"
  >("success");
  const [alertActive, setAlertActive] = useState(false);

  const saveData = () => {};
  const handleAddModal = () => {
    setModalIsActive(!modalIsActive);
  };
  const handlePreviewImage = useCallback(() => {
    if (dataImage) {
      const file = new FileReader();
      file.readAsDataURL(dataImage);
      const image = new window.Image();
      image.src = URL.createObjectURL(dataImage);
      file.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setPreviewImage(e.target.result);
        }
      };
    }
  }, [dataImage]);
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorImage("");
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0].name);
      setDataImage(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (dataImage) {
      handlePreviewImage();
    }
  }, [dataImage, handlePreviewImage]);
  const clearPreviewImage = () => {
    (document.getElementById("image") as HTMLInputElement).value = "";
    setDataImage(null);
    setPreviewImage("");
    setImage("No File");
  };
  const handleAlert = () => {
    setAlertActive(true);
    setAlertHeader("Error !");
    setAlertStatus("warning");
    setAlertMessage("lorem ipsum dolor sit amet");
  };

  return (
    <>
      <AlertToast
        isActive={alertActive}
        setIsActive={setAlertActive}
        status={alertStatus}
        header={alertHeader}
        message={alertMessage}
      />

      <Modal
        active={modalIsActive}
        handleModal={handleAddModal}
        title={"Add Game"}
      >
        <ModalBody long={true}>
          <form onSubmit={saveData}>
            <div className="px-4 mt-2 mb-3">
              <FormField
                id={"name"}
                label={"Nama Game"}
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setErrorName("")}
                error={errorName}
              />
            </div>
            <div className="px-4 mt-2 mb-3">
              <FormField
                id={"publisher"}
                label={"Nama Publisher"}
                type={"text"}
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                onFocus={() => setErrorPublisher("")}
                error={errorPublisher}
              />
            </div>
            <div className="px-4 mt-2 mb-3">
              <RichTextEditor
                label={"Deskripsi"}
                onChange={(value) => setDescription(value)}
              />
            </div>
            <div className="px-4 mt-2 mb-3">
              <FormFile
                id={"image"}
                label={"Upload Cover Image"}
                error={errorImage}
                value={image}
                handlePreview={handlePreviewImage}
                clearPreview={clearPreviewImage}
                previewImage={previewImage}
                onChange={(e) => handleChangeImage(e)}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end">
            <Button loading={false} onClick={saveData} value={"Save"} />
          </div>
        </ModalFooter>
      </Modal>
      <div className="ml-3">
        <Button
          loading={false}
          onClick={handleAddModal}
          value={"Add Game"}
          iconEnd={<span className="codex--plus ml-1"></span>}
        />
      </div>
      <div className="ml-3">
        <Button
          loading={false}
          onClick={handleAlert}
          value={"Allert Trigger"}
          iconEnd={<span className="codex--plus ml-1"></span>}
        />
      </div>
    </>
  );
};

export default HandleAddGame;
