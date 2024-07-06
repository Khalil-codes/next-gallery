"use client";
import { DownloadIcon, HeartIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ShareIcon } from "lucide-react";
import React from "react";

const Actions = () => {
  return (
    <>
      <Button variant="outline">
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download
      </Button>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground dark:text-muted-foreground"
        >
          <HeartIcon className="h-4 w-4" />
          <span className="sr-only">Like</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground dark:text-muted-foreground"
        >
          <ShareIcon className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </div>
    </>
  );
};

export default Actions;
