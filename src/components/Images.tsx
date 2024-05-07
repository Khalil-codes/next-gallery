import Image from "next/image";
import React from "react";
import { db } from "~/server/db";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {images.map((item) => (
        <Image
          src={item.url}
          key={item.id}
          alt={item.name}
          width={400}
          height={300}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      ))}
    </div>
  );
};

export default Images;
