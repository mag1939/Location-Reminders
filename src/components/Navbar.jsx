import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <div className="flex justify-between items-center p-6">
            <Link className="hover:underline" to={"/"}>Home</Link>
            <img className="w-[43px] h-[55px]" src="icon-white.png" alt="" />
            <Link className="hover:underline" to={"/aboutme"}>About Me</Link>
        </div>
    )
}