import React from "react";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import Image from "next/image";

const ImagePage = async ({ params: { id } }: { params: { id: string } }) => {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw Error("Invalid ID provided");

  const image = await getImage(idAsNumber);

  return (
    <Modal>
      <Image src={image.url} alt={image.name} width={400} height={400} />
    </Modal>
  );
};

export default ImagePage;
