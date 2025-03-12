"use client";
import Button from "@/components/button";
import FormField from "@/components/formField";
import Modal from "@/components/modal";
import ModalBody from "@/components/modalBody";
import ModalFooter from "@/components/modalFooter";
import { useState } from "react";

const HandleAddGame = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [name, setName] = useState("");
  const [publisher, setPublisher] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPublisher, setErrorPublisher] = useState("");

  const saveData = () => {};
  const handleAddModal = () => {
    setModalIsActive(!modalIsActive);
  };

  return (
    <>
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
                label={"Publisher"}
                type={"text"}
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                onFocus={() => setErrorPublisher("")}
                error={errorPublisher}
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
    </>
  );
};

export default HandleAddGame;
