import { header } from "../../public/assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { US } from "country-flag-icons/react/3x2";
const Header = () => {
  return (
    <>
      <header className="bg-white mx-auto max-w-7xl p-4">
        <nav className="flex justify-between items-center">
          <img src={header.logo} alt="logo" />
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border-2 w-60 h-8 rounded-l-lg focus:outline-blue-500 border-blue-500"
            />
            <select
              name="categories"
              id="categories"
              className="border-2 w-32 h-8 focus:outline-blue-500 border-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
              <option value="toys">Toys</option>
            </select>
            <button className="bg-blue-500 text-white w-24 h-8 rounded-r-lg">
              Search
            </button>
          </div>
          <ul className="flex gap-6 items-center">
            <li>
              <a href="" className="flex flex-col items-center">
                <FaUserAlt />
                Profile
              </a>
            </li>
            <li>
              <a href="" className="flex flex-col items-center">
                <MdOutlineMessage />
                Message
              </a>
            </li>
            <li>
              <a href="" className="flex flex-col items-center">
                <FaHeart />
                Orders
              </a>
            </li>
            <li>
              <a href="" className="flex flex-col items-center">
                <FaShoppingCart />
                Cart
              </a>
            </li>
          </ul>
        </nav>

        <nav className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-6">
            <IoIosMenu className="text-2xl cursor-pointer" />
            <span>All Categories</span>
            <ul className="flex items-center gap-6">
              <li>
                <a href="">Hot Offers</a>
              </li>
              <li>
                <a href="">Gift Boxes</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Menu Items</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-2">
                English, USD
                <RiArrowDropDownLine className="text-3xl" />
              </li>
              <li className="flex items-center gap-2">
                Ship to
                <US title="United States" className="w-4 h-4" />
                <RiArrowDropDownLine className="text-3xl" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
