import React from "react";
import ItemDetails from "@/components/layout/ItemDetails";

export default function Page({ params }) {
  const { id } = params.id;

  return <ItemDetails route="places" id={id} />;
}
