"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DialogTitle,
  type DialogContentProps,
  type DialogProps,
} from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  dialog?: Partial<{
    root: DialogProps;
    content: DialogContentProps;
  }>;
};

export function Modal({ children, dialog }: Props) {
  const router = useRouter();

  function onDismiss(open: boolean) {
    if (!open) {
      router.back();
    }
  }

  return createPortal(
    <Dialog {...dialog?.root} open onOpenChange={onDismiss} modal>
      <DialogTitle className="sr-only">Dialog Modal</DialogTitle>
      <DialogContent
        {...dialog?.content}
        className={cn("max-w-[60vw] p-0", dialog?.content?.className)}
      >
        {children}
      </DialogContent>
    </Dialog>,
    document.getElementById("modal-root")!,
  );
}
