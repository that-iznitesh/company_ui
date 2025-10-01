import { FaSearch  } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 px-8 py-3 flex items-center justify-between shadow">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        {/* Logo icon: Replace below svg with your logo or image */}
        <span className="bg-white p-1 rounded-md">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="12" rx="2" fill="#2563EB"/>
            <rect x="7" y="2" width="10" height="8" rx="2" fill="white"/>
          </svg>
        </span>
        <span className="text-white font-bold text-2xl">IELTS Institute</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10 text-white font-semibold">
         <li>
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-blue-200 transition">Courses</Link>
        </li>
        <li>
          <Link to="/tutors" className="hover:text-blue-200 transition">Tutors</Link>
        </li>
        <li>
          <Link to="/resources" className="hover:text-blue-200 transition">Resources</Link>
        </li>
      </ul>

      {/* Right Side: Contact Button + Icons */}
      <div className="flex items-center gap-4">
        <Link
          to="/contactus"
          className="bg-blue-400 bg-opacity-20 rounded-full px-6 py-2 text-white font-semibold hover:bg-opacity-40 focus:outline-none"
        >
          Contact
        </Link>
        <div className="flex items-center bg-blue-700 rounded-full px-2 py-1 gap-2">
       
          <FaSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="Search here"
        className="ml-2 outline-none flex-grow"
      />
        <FiMenu size={24} />
          {/* Menu icon
          <span>
            <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </span> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
