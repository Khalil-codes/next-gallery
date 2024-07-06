import React from "react";
import { Modal } from "./modal";
import ImageDetail from "@/app/_components/ImageDetail";

const ImagePage = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Modal
      dialog={{
        content: {
          className: "gap-0 max-w-[70vw] max-h-[70vh] overflow-auto",
        },
      }}
    >
      <ImageDetail id={id} />
    </Modal>
  );
};

export default ImagePage;
