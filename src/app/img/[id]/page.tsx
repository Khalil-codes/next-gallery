import React from "react";

const ImagePage = ({ params: { id } }: { params: { id: string } }) => {
  return <div>{id}</div>;
};

export default ImagePage;
