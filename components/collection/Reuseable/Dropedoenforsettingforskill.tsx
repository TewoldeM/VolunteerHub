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
import {
  causes4,
  causes5,
  causes6,
} from "@/lib/Data/causes";
const Dropedoenforsettingforskill = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-6 dark:text-gray-400 border-2 border-gray-500 px-8 justify-center items-center flex">
        Add
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
        <div className="flex flex-wrap gap-6 justify-center items-start w-full mt-4">
          <div className="flex flex-col gap-4">
            {causes4.map((cause, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">{cause}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {causes5.map((cause, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">{cause}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {causes6.map((cause, index) => (
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

export default Dropedoenforsettingforskill;
