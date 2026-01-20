import ManageData from "@/components/Admin/ManageData";
import ToggleForm from "@/components/Admin/ToggleForm";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex justify-center"></div>
      <div>
        <ToggleForm title="Add a Place" />
        <ManageData route="places" />
      </div>
    </>
  );
};

export default page;
