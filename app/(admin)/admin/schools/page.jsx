import ManageData from "@/components/Admin/ManageData";
import ToggleForm from "@/components/Admin/ToggleForm";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex justify-center"></div>
      <div>
        <ToggleForm title="Add a School" />
        <ManageData route="schools" />
      </div>
    </>
  );
};

export default page;
