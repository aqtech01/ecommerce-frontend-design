import React from "react";
import {
  dealsAndOffers,
  electronicsAndGadget,
} from "../../../../public/assets.js";
import { homeAndOutdoor } from "../../../../public/assets.js";
import Image from "next/image";
import Contact from "@/app/components/Contact.jsx";

const Products = () => {
  return (
    <>
      <DealsAndOffers />
      <HomeAndOutdoor />
      <ElectronicAndGadget />
      <Contact />
      <RecommendedItems />
    </>
  );
};
const DealsAndOffers = () => {
  const date = new Date();
  const day = date.getDate();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const time = [day, hours, minutes, seconds];
  const name = ["Day", "Hours", "Minutes", "Seconds"];
  const images = [
    dealsAndOffers.smartwatch,
    dealsAndOffers.laptops,
    dealsAndOffers.camera,
    dealsAndOffers.headphones,
    dealsAndOffers.canonCameras,
  ];
  const offers = ["-50% ", "-30% ", "-20% ", "-10%", "-5%"];
  const title = [
    "Laptops",
    "Smartwatches",
    "Cameras",
    "Headphones",
    "Canon Cameras",
  ];

  return (
    <div className="bg-white shadow-sm py-12 border-t border-gray-200 m-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Timer Section */}
          <div className="w-1/3 border-r-1 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Deals And Offers
            </h2>
            <p className="mt-2 text-2xl text-gray-600">Hygiene Equipments</p>
            <div className="flex items-center gap-4">
              {time.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mt-5 bg-gray-500 text-white rounded-md p-2 text-sm font-bold"
                >
                  <span className="px-2 py-1 w-10 h-10 flex items-center justify-center">
                    {item}
                  </span>
                  <span className="mt-1">{name[index]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1 flex items-center gap-8">
            {images.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-r-1 border-gray-200"
              >
                <Image
                  src={item}
                  alt={title[index]}
                  className="w-[140px] h-[140px] object-contain"
                />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-md font-medium text-center">
                    {title[index]}
                  </h3>
                  <span className="mt-1 text-sm bg-red-400 rounded-full px-3 py-1">
                    {offers[index]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
const Section = (props) => {
  const { bg, productImages, price, title } = props;
  return (
    <>
      <section className="bg-white shadow-sm border-t border-gray-200 m-3">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Left Section with Background */}
          <div
            className="col-span-1 flex flex-col justify-center items-center text-left p-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <p className="font-extrabold text-lg text-black mb-4">{title}</p>
            <button className="bg-white shadow-md text-sm px-4 py-2 hover:bg-gray-100 transition">
              Source now
            </button>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
            {productImages.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border flex flex-col items-center"
              >
                <Image
                  src={product}
                  alt={product}
                  className="w-20 h-20 object-contain mb-2"
                />
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500">From</p>
                <p className="text-sm text-gray-900">USD {price[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
const HomeAndOutdoor = () => (
  <Section
    title="Home and Outdoor"
    bg={homeAndOutdoor.homeBg}
    productImages={homeAndOutdoor.product}
    price={[1, 2, 3, 4, 5, 6, 7, 8]}
  />
);
const ElectronicAndGadget = () => (
  <Section
    title="Consumer Electronics and gadgets"
    bg={electronicsAndGadget.electronicBg}
    productImages={electronicsAndGadget.product}
    price={[1, 2, 3, 4, 5, 6, 7, 8]}
  />
);
const RecommendedItems = () => {
  return (
    <>
      <div class="grid grid-cols-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"></div>
    </>
  );
};
