import React, { useContext } from "react";
import HeaderContext from "../context/Header/HeaderContext";

function UserHeader() {
  const { Home, Gallery, About, Product } = useContext(HeaderContext);

  return (
    <header className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md px-6 py-4 flex items-center justify-end z-50">
      {/* Navigation Links */}
      <nav className="flex gap-6 text-gray-700 font-medium">
        <div className="hover:text-blue-600 cursor-pointer">{Home}</div>
        <div className="hover:text-blue-600 cursor-pointer">{Gallery}</div>
        <div className="hover:text-blue-600 cursor-pointer">{About}</div>
        <div className="hover:text-blue-600 cursor-pointer">{Product}</div>
      </nav>
    </header>
  );
}

export default UserHeader;
