import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-200">
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="text-2xl font-bold text-purple-600"
      >
        Sellwave<span className="text-black">.</span>
      </Link>
    </div>
  );
};

export default AdminNavbar;
