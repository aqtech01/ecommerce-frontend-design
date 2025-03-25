import { header } from "../../../public/assets";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { US } from "country-flag-icons/react/3x2";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-600 mt-2">
              Get daily updates about our products and special offers
            </p>
            <div className="flex justify-center mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 w-80 h-10 rounded-l-lg focus:outline-blue-500 border-blue-500 px-4"
              />
              <button className="bg-blue-500 text-white w-32 h-10 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Image src={header.logo} alt="logo" className="h-8" />
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <AiFillTwitterCircle size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaInstagramSquare size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>

            {/* Other Sections */}
            <Brand />
            <Partnership />
            <Information />
            <ForUsers />
            <GetApp />
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-gray-600">
              &copy;{new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <US className="w-4 h-4" />
              English
              <RiArrowDropDownLine className=" text-3xl" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Sections = ({ heading, list }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-lg text-gray-800">{heading}</h3>
    <ul className="space-y-2">
      {list.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Brand = () => (
  <Sections
    heading="Brand"
    list={["About Us", "Find Store", "Categories", "Blogs"]}
  />
);

const Partnership = () => (
  <Sections
    heading="Partnership"
    list={["About Us", "Find Store", "Categories", "Blogs"]}
  />
);

const Information = () => (
  <Sections
    heading="Information"
    list={["Help Center", "Money Refund", "Shipping", "Contact Us"]}
  />
);

const ForUsers = () => (
  <Sections
    heading="For Users"
    list={["Login", "Register", "Settings", "My Orders"]}
  />
);

const GetApp = () => (
  <div className="space-y-4">
    <h3 className="font-bold text-lg text-gray-800">Get the App</h3>
    <div className="space-y-2">
      <Image src={header.appleStore} className="w-32" alt="App Store" />
      <Image src={header.googleStore} className="w-32" alt="Google Play" />
    </div>
  </div>
);

export default Footer;
