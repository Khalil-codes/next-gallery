"use client";
import { DownloadIcon, HeartIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                <HeartIcon className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Like</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                <ShareIcon className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default Actions;
