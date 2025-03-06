import React from "react";
import logo from "../assets/logo-colored.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className="m-2.5 text-center">
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo Section */}
          <a href="/" className="mt-3">
            <img src={logo} alt="Company Logo" className="w-24 md:w-32" />
          </a>

          {/* Search Bar Section */}
          <div className="flex flex-grow max-w-lg w-full">
            <input
              type="search"
              className="flex-grow text-blue-600 border-2 h-10  border-[#0D6EFD] border-r-[#e4e8ec] rounded-l-lg p-2 focus:text-blue-600 focus:border-[#0D6EFD] focus:outline-none"
              placeholder="Search..."
            />
            <select
              name="dropDown"
              id="dropDown"
              className="border-2 border-[#0D6EFD] w-24 md:w-36 h-10 text-center border-l-0 rounded-none focus:text-blue-600 focus:border-[#0D6EFD] focus:outline-none"
            >
              <option value="All Categories">All Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
            <button
              type="button"
              className="bg-[#0D6EFD] text-white w-24 h-10 rounded-r-lg hover:bg-blue-700 transition duration-300 focus:outline-none"
            >
              Search
            </button>
          </div>

          {/* Profile & Cart Section */}
          <ul className="flex justify-center gap-4 md:gap-6 mt-4 text-gray-400">
            <li className="hover:text-[#0D6EFD] cursor-pointer">
              <FontAwesomeIcon icon={faUser} aria-label="Profile" />
              <br />
              <span className="text-sm">Profile</span>
            </li>
            <li className="hover:text-[#0D6EFD] cursor-pointer">
              <FontAwesomeIcon icon={faMessage} aria-label="Message" />
              <br />
              <span className="text-sm">Message</span>
            </li>
            <li className="hover:text-[#0D6EFD] cursor-pointer">
              <FontAwesomeIcon icon={faHeart} aria-label="Orders" />
              <br />
              <span className="text-sm">Orders</span>
            </li>
            <li className="hover:text-[#0D6EFD] cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} aria-label="My Cart" />
              <br />
              <span className="text-sm">My Cart</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
