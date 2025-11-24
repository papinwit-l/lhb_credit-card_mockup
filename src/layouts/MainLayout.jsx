import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
