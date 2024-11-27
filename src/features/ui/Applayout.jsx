import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Applayout() {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}

export default Applayout;
