import React from "react";
import { contactBgImage } from "../../../public/assets";

const Contact = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      {/* Background with subtle blue overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${contactBgImage.BgImage.src})`,
          }}
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-12">
          {/* Text section */}
          <div className="max-w-xl text-center lg:text-left text-white">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              An Easy way to send Requests to all suppliers
            </h1>
            <p className="text-lg text-blue-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          {/* Form section */}
          <div className="w-full max-w-md backdrop-blur-sm bg-white/90 rounded-xl shadow-xl overflow-hidden p-8">
            <form className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Contact Suppliers
              </h2>

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700">
                    <option value="">Select Supplier</option>
                    <option value="supplier1">Supplier 1</option>
                    <option value="supplier2">Supplier 2</option>
                    <option value="supplier3">Supplier 3</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
