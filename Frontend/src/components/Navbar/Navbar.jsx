import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ shortStays: false, rental: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeMenuOnLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen({ shortStays: false, rental: false }); // Close all dropdowns when a link is clicked
  };

  const handleDropdownItemClick = (dropdown) => {
    closeMenuOnLinkClick(); // Close the menu and dropdowns
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: false, // Close the dropdown after clicking an item
    }));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenuOnLinkClick}>
          <img src={assets.koyoccoLogo} className="w-[80px]" alt="Koyocco Logo" />
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} aria-label="Close menu" />
          ) : (
            <FaBars size={24} aria-label="Open menu" />
          )}
        </div>

        {/* Menu Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 fixed lg:static top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-8 lg:p-0 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:transform-none transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Mobile Menu Header (logo + close icon) */}
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <Link to="/" onClick={closeMenuOnLinkClick}>
              <img src={assets.koyoccoLogo} className="w-[80px]" alt="Koyocco Logo" />
            </Link>
            <div onClick={toggleMenu}>
              <FaTimes size={24} aria-label="Close menu" />
            </div>
          </div>

          {/* Navigation Links */}
          <li>
            <Link
              to="/"
              className="hover:text-gray-700 block py-2 lg:py-0"
              onClick={closeMenuOnLinkClick}
            >
              Home
            </Link>
          </li>

          {/* Short-Stays Dropdown */}
          <li className="relative group">
            <Link
              to="/short-stays"
              className="hover:text-gray-700 py-2 lg:py-0 flex items-center focus:outline-none"
              onClick={toggleDropdown.bind(null, 'shortStays')}
            >
              <span className="flex items-center">
                Short-Stays <FaChevronDown size={10} className="ml-2" />
              </span>
            </Link>

            {/* Dropdown Content */}
            <ul
              className={`absolute left-0  z-10  mt-1 bg-white shadow-lg rounded-md py-2 w-48 ${
                dropdownOpen.shortStays ? 'block' : 'hidden'
              } lg:group-hover:block lg:group-focus:block lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300`}
            >
              <li>
                <Link
                  to="/hotels"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('shortStays')}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/movie-house"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('shortStays')}
                >
                  Movie House
                </Link>
              </li>
              <li>
                <Link
                  to="/guest-house"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('shortStays')}
                >
                  Guest House
                </Link>
              </li>
            </ul>
          </li>

          {/* Rental Dropdown */}
          <li className="relative group">
            <Link
              to="/rental"
              className="hover:text-gray-700 py-2 lg:py-0 flex items-center focus:outline-none"
              onClick={toggleDropdown.bind(null, 'rental')}
            >
              <span className="flex items-center">
                Property Rentals <FaChevronDown size={10} className="ml-2" />
              </span>
            </Link>

            {/* Dropdown Content */}
            <ul
              className={`absolute left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 ${
                dropdownOpen.rental ? 'block' : 'hidden'
              } lg:group-hover:block lg:group-focus:block lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300`}
            >
              <li>
                <Link
                  to="/apartments"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('rental')}
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  to="/condos"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('rental')}
                >
                  Condos
                </Link>
              </li>
              <li>
                <Link
                  to="/houses"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('rental')}
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  to="/duplex"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleDropdownItemClick('rental')}
                >
                  Duplex
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/uploadProperty"
              className="hover:text-gray-700 block py-2 lg:py-0"
              onClick={closeMenuOnLinkClick}
            >
              Upload a Property
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-700 block py-2 lg:py-0"
              onClick={closeMenuOnLinkClick}
            >
              About
            </Link>
          </li>

          {/* Mobile-Only Buttons */}
          <li className="lg:hidden mt-4">
            <Link to="/login">
              <button className="bg-red-500 text-white px-7 py-2 rounded-md hover:bg-black w-full">
                Login
              </button>
            </Link>
          </li>
          <li className="lg:hidden">
            <Link to="/signup">
              <button className="bg-red-500 mt-2 text-white px-7 py-2 rounded-md hover:bg-black w-full">
                Signup
              </button>
            </Link>
          </li>
        </ul>

        {/* Desktop-Only Buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link to="/login">
            <button className="bg-red-500 text-white px-7 py-2 rounded-md hover:bg-black">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-500 text-white px-7 py-2 rounded-md hover:bg-black">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
