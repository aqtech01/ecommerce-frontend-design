import { heroImage } from "../../../public/assets";
import { FaUserAlt } from "react-icons/fa";

const HeroSection = () => {
  const list = [
    "Auto Mobiles",
    "Clothes and Wears",
    "Home Interior",
    "Computer and Tech",
    "Tools and Equipments",
    "Sports and Outdoors",
    "Animal and Pets",
    "Machinery and Tools",
    "More Categories",
  ];

  console.log(heroImage.heroBg);
  return (
    <section className="bg-white shadow-sm border-2 border-gray-200 m-5 py-3 rounded-lg">
      <div className="grid grid-cols-4">
        {/* Left - Categories */}
        <nav className="p-5">
          <ul className="space-y-2">
            {list.map((item, indx) => (
              <li
                key={indx}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Center - Hero Image */}
        <div
  className="col-span-2 bg-cover bg-center flex flex-col justify-center"
  style={{ backgroundImage: `url(${heroImage.heroBg.src})` }}
>
          <h1 className="mt-5 ml-5 text-2xl">Latest Trending</h1>
          <p className="ml-5 text-xl font-bold">Electronic Items</p>
          <button
            className=" w-fit p-2 text-xl bg-white rounded-md ml-5 mt-2 transition hover:bg-gray-100 shadow-md"
            aria-label="Learn More"
          >
            Learn More
          </button>
        </div>

        {/* Right - User Section */}
        <div className="col-span-1 mr-6 flex flex-col justify-center space-y-4 m-3">
          <div className="text-center bg-[#E3F0FF] text-gray-800 rounded-lg p-5 shadow-md">
            {/* User Greeting */}
            <div className="flex items-center justify-around mb-4">
              <FaUserAlt className="text-2xl" />
              <p className="text-lg">
                Hi User, <br /> let's get Started
              </p>
            </div>

            <button
              className="bg-blue-400 w-full text-white p-2 rounded-lg transition hover:bg-blue-500"
              aria-label="Sign In"
            >
              Sign In
            </button>

            <button
              className="bg-white w-full mt-2 shadow-md text-blue-400 p-2 rounded-lg border border-blue-400 transition hover:bg-blue-50"
              aria-label="Sign Up"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center bg-[#F38332] text-white rounded-lg p-5 shadow-md">
            Get US $10 off with a new supplier
          </div>
          <div className="text-center bg-[#55BDC3] text-white rounded-lg p-5 shadow-md">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
