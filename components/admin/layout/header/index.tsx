import AuthSection from "@/components/common/auth-section";
import React from "react";

const AdminHeader = () => {
  return (
    <div>
      <header className="h-16 border-b border-gray-300 shadow flex justify-between items-center pr-10  py-2">
        <p>Admin header</p>
        <AuthSection />
      </header>
    </div>
  );
};

export default AdminHeader;
