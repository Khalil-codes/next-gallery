import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getMyImages } from "@/server/queries";
import { ZoomInIcon } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Images = async () => {
  const images = await getMyImages();
  return (
    <>
      {images.map((item) => (
        <Link
          key={item.id}
          href={`/img/${item.id}`}
          className="group relative overflow-hidden rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg"
          prefetch={false}
        >
          <Image
            src={item.url}
            alt={item.name}
            width={500}
            height={500}
            className="aspect-square h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomInIcon className="h-8 w-8 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 flex w-full items-center gap-2 bg-black/70 px-4 py-2 text-sm text-white">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-muted-foreground text-xs">2 days ago</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Images;
