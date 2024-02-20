import React from "react";

function AdminSidebar({ LogOut }) {
  return (
    <div className="w-[250px] bg-red-400 relative">
      <button onClick={LogOut}>Log Out</button>
    </div>
  );
}

export default AdminSidebar;
