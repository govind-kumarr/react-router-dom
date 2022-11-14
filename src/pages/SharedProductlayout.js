import React from "react";
import { Outlet } from "react-router-dom";

const SharedProductlayout = () => {
  return (
    <div>
      Products
      <Outlet />
    </div>
  );
};

export default SharedProductlayout;
