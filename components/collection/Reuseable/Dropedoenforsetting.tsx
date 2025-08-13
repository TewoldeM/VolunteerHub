import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { causes, causes2, causes3, causes4, causes5, causes6 } from "@/lib/Data/causes";
import { Edit2Icon, PlusCircle, View } from "lucide-react";

const Dropedoenforsettingcauses = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-16 dark:text-gray-400  justify-center items-center flex ml-2">
        <div className="flex flex-row gap-8">
          <View size={25} className="text-blue-400 hover:text-blue-500" />
          <Edit2Icon size={25} className="text-blue-400 hover:text-blue-500" />
        </div>
      </DialogTrigger>

      <DialogContent
        className="dark:bg-gray-900 bg-white shadow-md max-w-4xl w-full"
        style={{ zIndex: 1000 }}
      >
        <DialogHeader>
          <DialogTitle>Select from the list and add</DialogTitle>
          <DialogDescription>
            Select causes from the list below. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-8 justify-center items-start w-full mt-4">
          <div className="flex flex-col gap-4">
            {causes.map((cause, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">{cause}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {causes2.map((cause, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">{cause}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {causes3.map((cause, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">{cause}</span>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Dropedoenforsettingcauses;




