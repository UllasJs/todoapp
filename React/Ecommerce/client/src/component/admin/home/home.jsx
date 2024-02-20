import React from "react";
// import Cookies from "js-cookie";
// import AdminSidebar from "../component/sidebar/adminsidebar";
import Topbar from "../component/topbar/topbar";

function HomeAdmin({ storedToken, setStoredToken }) {
  // function LogOut() {
  //   Cookies.remove("userToken");
  //   window.location.href = "/admin";
  // }

  return (
    <div className="w-full h-screen bg-[#1d2c38] relative flex flex-col">
      <div className="bg-blue-500">
        <Topbar />
      </div>
      <div>
        {/* <AdminSidebar LogOut={LogOut} /> */}
        <div className="home_main"></div>
      </div>
    </div>
  );
}

export default HomeAdmin;
