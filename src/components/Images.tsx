import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {images.map((item) => (
        <Link href={`/img/${item.id}`} key={item.id}>
          <Image
            src={item.url}
            alt={item.name}
            width={400}
            height={300}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Link>
      ))}
    </div>
  );
};

export default Images;
