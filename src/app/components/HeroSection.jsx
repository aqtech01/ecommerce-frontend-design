import { heroImage } from "../../../public/assets";
import { FaUserAlt } from "react-icons/fa";

const HeroSection = () => {
  const categories = [
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

  const promoCards = [
    {
      bgColor: "bg-[#E3F0FF]",
      textColor: "text-gray-800",
      content: (
        <>
          <div className="flex items-center justify-around mb-4">
            <FaUserAlt className="text-2xl" />
            <p className="text-lg">
              Hi User, <br /> let's get Started
            </p>
          </div>
          <button className="bg-blue-400 w-full text-white p-2 rounded-lg transition hover:bg-blue-500">
            Sign In
          </button>
          <button className="bg-white w-full mt-2 shadow-md text-blue-400 p-2 rounded-lg border border-blue-400 transition hover:bg-blue-50">
            Sign Up
          </button>
        </>
      ),
    },
    {
      bgColor: "bg-[#F38332]",
      textColor: "text-white",
      content: "Get US $10 off with a new supplier",
    },
    {
      bgColor: "bg-[#55BDC3]",
      textColor: "text-white",
      content: "Send quotes with supplier preferences",
    },
  ];

  return (
    <section className="bg-white shadow-sm border-2 border-gray-200 m-5 py-3 rounded-lg">
      <div className="grid grid-cols-4">
        {/* Categories Section */}
        <nav className="p-5">
          <ul className="space-y-2">
            {categories.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Image Section */}
        <div
          className="col-span-2 bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: `url(${heroImage.heroBg.src})` }}
        >
          <div className="ml-5">
            <h1 className="text-2xl">Latest Trending</h1>
            <p className="text-xl font-bold">Electronic Items</p>
            <button className="w-fit p-2 text-xl bg-white rounded-md mt-2 transition hover:bg-gray-100 shadow-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Promo Cards Section */}
        <div className="col-span-1 mr-6 flex flex-col justify-center space-y-4 m-3">
          {promoCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.textColor} rounded-lg p-5 shadow-md text-center`}
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;