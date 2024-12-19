"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const WorkSpaceList = () => {
    const { user } = useUser();
    const [workSpaceList,setWorkSpaceList] = useState([]);
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
        <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Hello, {user?.fullName}</h2>
            <Button>+</Button>
        </div>
        <div className="mt-10 flex justify-between">
        <div>
            <h2 className="font-medium text-primary">Workspaces</h2>
        </div>
        <div className="flex gap-2 ">
            <LayoutGrid/>
            <AlignLeft/>
        </div>
        </div>
        {workSpaceList.length == 0 ? 
        <div className="flex flex-col jusitfy-center items-center my-10">
            <Image src={"/workspace.png"} width={200} height={200} alt="workspace"/>
            <h2>Create a new workspace</h2>
            <Button variant="outline" className="my-3"> + New WorkSpace</Button>
        </div> 
        :
        <div>Workspace List </div>
         }
    </div>
  )
}

export default WorkSpaceList