import Leftsidebar from "@/components/shared/Sidebar/Leftsidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <div className="flex">
        <Leftsidebar />

        <section>{children}</section>
      </div>
    </main>
  );
};

export default layout;
