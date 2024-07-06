import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getImage } from "@/server/queries";
import Image from "next/image";
import React from "react";
import Actions from "./Actions";

const ImageDetail = async ({ id }: { id: string }) => {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw Error("Invalid ID provided");

  const image = await getImage(idAsNumber);
  return (
    <>
      <Image
        src={image.url}
        alt={image.name}
        width={700}
        height={700}
        className="w-full object-contain"
      />
      <div className="bg-background p-4">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p>Uploaded 2 days ago</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Actions />
        </div>
      </div>
    </>
  );
};

export default ImageDetail;
