"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { SmilePlus } from "lucide-react";
import CoverPicker from "@/app/_components/CoverPicker";
const CreateWorkSpace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [coverImage, setCoverImage] = useState("/cover.png");
  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">
        {/* Cover Image */}
        <CoverPicker>
          <div className="relative group cursor-pointer">
            <h2 className="hidden absolute p-4 w-full h-full group-hover:flex items-center justify-center">
              Change Cover
            </h2>
            <div className="group-hover:opacity-40">
              <Image
                width={400}
                height={400}
                className="w-full h-[150px] object-cover rounded-t-xl"
                src={coverImage}
                alt="Cover Image"
              />
            </div>
          </div>
        </CoverPicker>
        {/* Input Section  */}
        <div className="p-12">
          <h2 className="font-medium text-xl">Create a new workspace</h2>
          <h2 className="text-sm mt-2">
            This is a shared space where you can collaborate with your team. You
            can always rename it later.
          </h2>
          <div className="mt-8 flex gap-2 items-center">
            <Button variant="outline">
              <SmilePlus />
            </Button>
            <Input
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="WorkSpace Name"
            />
          </div>
          <div className="mt-7 flex justify-end gap-6">
            <Button disabled={!workspaceName?.length}>Create</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkSpace;
