import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CoverOption from "../_shared/CoverOption";
import Image from "next/image";

const CoverPicker = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Cover</DialogTitle>
          <DialogDescription>
            {CoverOption.map((cover, index) => (
              <div key={index}>
                <Image
                  alt="image"
                  src={cover?.imageUrl}
                  width={200}
                  height={140}
                />
              </div>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CoverPicker;
