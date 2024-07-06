import ImageDetail from "@/app/_components/ImageDetail";
import React from "react";

const ImagePage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <section className="py-6">
      <ImageDetail id={id} />
    </section>
  );
};

export default ImagePage;
