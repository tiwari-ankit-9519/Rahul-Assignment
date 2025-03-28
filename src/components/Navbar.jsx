import { logoutUser } from "@/features/authSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        setTimeout(() => {
          navigate("/login");
          toast.success("Logged out successfully");
        });
      })
      .catch(() => {
        toast.error("Failed to Logout");
      });
  };

  return (
    <nav className="w-full h-[4rem] border-b flex items-center justify-between px-[5%] font-poppins">
      <div className="">
        <h1 className="font-semibold">EmployeeWise</h1>
      </div>

      <div className="">
        <Button
          className="flex gap-2 items-center bg-red-500 hover:bg-red-600 transition-all duration-300"
          onClick={handleLogout}
        >
          <LogOut />
          Log Out
        </Button>
      </div>
    </nav>
  );
}
export default Navbar;
