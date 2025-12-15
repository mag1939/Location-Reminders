import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className=" bg-black min-h-dvh text-white">
        <NavBar />
        <div>
            <Outlet />
        </div>
    </div>
  );
}
