import React, { useContext } from "react";
import SideBarContext from "../context/Sidebar/sideBarContext";

function AdminSidebar() {
  const a = useContext(SideBarContext);

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6 flex flex-col">
      {/* Sidebar Header */}
      <div className="text-2xl font-bold mb-8 text-center border-b border-gray-700 pb-4">
        US SALES
      </div>

      {/* Sidebar Items */}
      <nav className="flex flex-col gap-4">
        <div className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
          {a.Home}
        </div>
        <div className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
          {a.Charts}
        </div>
        <div className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
          {a.Elements}
        </div>
        <div className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
          {a.Widgets}
        </div>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
