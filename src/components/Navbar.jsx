import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/profiles" className="text-white">Profiles</Link>
        </li>
        <li>
          <Link to="/matches" className="text-white">Matches</Link>
        </li>
        <li>
          <Link to="/messages" className="text-white">Messages</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;