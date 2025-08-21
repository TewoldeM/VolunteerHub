"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface CreateOpportunityDialogForNoShiftProps {
  openshift: boolean;
  setOpenshift: (arg: boolean) => void;
}

const CreateOpportunityDialogForNoShift = ({
  openshift,
  setOpenshift,
}: CreateOpportunityDialogForNoShiftProps) => {
  const [selectAll, setSelectAll] = useState(false);
  const [weekdaysDaytime, setWeekdaysDaytime] = useState(false);
  const [weekdaysEvenings, setWeekdaysEvenings] = useState(false);
  const [weekendsDaytime, setWeekendsDaytime] = useState(false);
  const [weekendsEvenings, setWeekendsEvenings] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setWeekdaysDaytime(newSelectAll);
    setWeekdaysEvenings(newSelectAll);
    setWeekendsDaytime(newSelectAll);
    setWeekendsEvenings(newSelectAll);
  };

  const handleCheckboxChange = (type: string) => {
    switch (type) {
      case "weekdaysDaytime":
        setWeekdaysDaytime(!weekdaysDaytime);
        break;
      case "weekdaysEvenings":
        setWeekdaysEvenings(!weekdaysEvenings);
        break;
      case "weekendsDaytime":
        setWeekendsDaytime(!weekendsDaytime);
        break;
      case "weekendsEvenings":
        setWeekendsEvenings(!weekendsEvenings);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    console.log({
      selectAll,
      weekdaysDaytime,
      weekdaysEvenings,
      weekendsDaytime,
      weekendsEvenings,
    });
    setOpenshift(false); // Close the dialog
  };

  const handleCancel = () => {
    setOpenshift(false); // Close the dialog
  };

  return (
    <Dialog open={openshift} onOpenChange={setOpenshift}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-orange-500 font-semibold">
            TIMESLOTS
          </DialogTitle>
          <div className="mt-2 flex items-center justify-between bg-blue-100 p-2 rounded text-blue-700 text-sm">
            <span>
              <span className="mr-1">ℹ️</span>
              Help volunteers with limited availability filter their search
              results.
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                // Close the message (in this case, it’s just hidden visually)
              }}
              className="text-blue-700 hover:text-blue-900"
            >
              ✕
            </button>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <label className="text-red-500 font-semibold">
              WHEN CAN VOLUNTEERS PARTICIPATE?*
            </label>
            <div className="flex items-center gap-2">
              <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
              <span className="text-sm">SELECT ALL</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-t border-b p-2">
              <div className="font-semibold text-center">Weekdays</div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  checked={weekdaysDaytime}
                  onCheckedChange={() =>
                    handleCheckboxChange("weekdaysDaytime")
                  }
                />
                <label>Daytime</label>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  checked={weekdaysEvenings}
                  onCheckedChange={() =>
                    handleCheckboxChange("weekdaysEvenings")
                  }
                />
                <label>Evenings (after 5pm)</label>
              </div>
            </div>
            <div className="border-t border-b p-2">
              <div className="font-semibold text-center">Weekends</div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  checked={weekendsDaytime}
                  onCheckedChange={() =>
                    handleCheckboxChange("weekendsDaytime")
                  }
                />
                <label>Daytime</label>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  checked={weekendsEvenings}
                  onCheckedChange={() =>
                    handleCheckboxChange("weekendsEvenings")
                  }
                />
                <label>Evenings (after 5pm)</label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="bg-red-600 hover:bg-red-400 text-white hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-orange-500 hover:bg-orange-400 text-white"
          >
            SAVE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOpportunityDialogForNoShift;
