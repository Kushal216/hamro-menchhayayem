import ManageData from "@/components/Admin/ManageData";
import ToggleForm from "@/components/Admin/ToggleForm";
import React from "react";

const page = () => {
  return (
    <>
      <div>
      <ToggleForm title="Add a culture" route={'cultures'}/>
        <ManageData route="cultures" />
      </div>
    </>
  );
};

export default page;
